import json
from pathlib import Path
from graphify.extract import collect_files
# Use thread pool instead of process pool to avoid Windows issues
from concurrent.futures import ThreadPoolExecutor
import importlib

# Monkey-patch to use ThreadPoolExecutor
import graphify.extract as extract_module
original_parallel = extract_module._extract_parallel

def thread_pool_parallel(work_items, max_workers):
    with ThreadPoolExecutor(max_workers=max_workers) as pool:
        futures = {pool.submit(extract_module._extract_single_file, item): item[0] for item in work_items}
        for future in futures:
            yield future.result()

extract_module._extract_parallel = thread_pool_parallel

def main():
    WORKSPACE = Path('D:/drive 1 1Local disk/Projects/my-ui-lib-workspace')
    detect_path = WORKSPACE / 'graphify-out' / '.graphify_detect.json'

    detect = json.loads(detect_path.read_text())
    code_files = []
    for f in detect.get('files', {}).get('code', []):
        p = Path(f)
        code_files.extend(collect_files(p) if p.is_dir() else [p])

    print(f"Found {len(code_files)} code files")

    if code_files:
        from graphify.extract import extract
        result = extract(code_files)
        (WORKSPACE / 'graphify-out' / '.graphify_ast.json').write_text(json.dumps(result, indent=2))
        print(f'AST: {len(result["nodes"])} nodes, {len(result["edges"])} edges')
    else:
        (WORKSPACE / 'graphify-out' / '.graphify_ast.json').write_text(json.dumps({'nodes':[],'edges':[],'input_tokens':0,'output_tokens':0}))
        print('No code files - skipping AST extraction')

if __name__ == '__main__':
    main()
