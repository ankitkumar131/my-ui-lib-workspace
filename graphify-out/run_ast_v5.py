import os
import json
from pathlib import Path
from graphify.extract import extract, _extract_single_file
import concurrent.futures

# Monkey-patch to use ThreadPoolExecutor instead of ProcessPoolExecutor
def thread_pool_parallel(uncached_work, per_file, effective_root, max_workers, total_files):
    # Handle the case where max_workers might be passed as a list by mistake
    if isinstance(max_workers, list):
        max_workers = max_workers[0] if max_workers else None
    
    if max_workers is None:
        max_workers = min(os.cpu_count() or 4, len(uncached_work), 8)

    root_str = str(effective_root)
    work_items = [(idx, str(path), root_str) for idx, path in uncached_work]

    print(f"  Starting ThreadPool AST extraction with {max_workers} workers...")
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=max_workers) as pool:
        # Wrap item in a list or pass as single arg to match _extract_single_file's unpacking
        futures = {
            pool.submit(_extract_single_file, item): item[0] for item in work_items
        }
        for future in concurrent.futures.as_completed(futures):
            try:
                idx, result = future.result()
                per_file[idx] = result
            except Exception as e:
                idx = futures[future]
                print(f"Error extracting file at index {idx}: {e}")
                per_file[idx] = {"nodes": [], "edges": [], "error": str(e)}

import graphify.extract
graphify.extract._extract_parallel = thread_pool_parallel

def main():
    with open("graphify-out/.graphify_detect.json", "r") as f:
        detect = json.load(f)
    
    # Access nested structure: files -> code
    code_paths = detect.get("files", {}).get("code", [])
    code_files = [Path(f) for f in code_paths]
    print(f"Found {len(code_files)} code files")
    
    if not code_files:
        print("No code files found to extract.")
        return

    # This calls the monkey-patched _extract_parallel internally
    result = extract(code_files)
    
    # Save the structural results
    with open("graphify-out/.graphify_extract_ast.json", "w") as f:
        json.dump(result, f)
    print("AST extraction complete. Saved to graphify-out/.graphify_extract_ast.json")

if __name__ == "__main__":
    main()
