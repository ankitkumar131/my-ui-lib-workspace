import json
from pathlib import Path
from graphify.extract import collect_files, extract
from concurrent.futures import ThreadPoolExecutor
import graphify.extract as extract_module

def thread_pool_parallel(*args, **kwargs):
    # Flexibly handle arguments since the library signature might vary
    # Usually: work_items, max_workers, ...
    work_items = args[0]
    max_workers = args[1]
    
    # If max_workers was passed as a list or something else, default it
    if not isinstance(max_workers, int):
        max_workers = 4
        
    with ThreadPoolExecutor(max_workers=max_workers) as pool:
        futures = {pool.submit(extract_module._extract_single_file, item): item[0] for item in work_items}
        return [future.result() for future in futures]

# Patch the parallel execution function
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
        result = extract(code_files)
        (WORKSPACE / 'graphify-out' / '.graphify_ast.json').write_text(json.dumps(result, indent=2))
        print(f"AST: {len(result['nodes'])} nodes, {len(result['edges'])} edges")
    else:
        (WORKSPACE / 'graphify-out' / '.graphify_ast.json').write_text(json.dumps({'nodes':[],'edges':[],'input_tokens':0,'output_tokens':0}))
        print('No code files - skipping AST extraction')

if __name__ == '__main__':
    main()
