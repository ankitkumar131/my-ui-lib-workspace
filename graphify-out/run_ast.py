import json
from pathlib import Path
from graphify.extract import collect_files, extract

WORKSPACE = Path('D:/drive 1 1Local disk/Projects/my-ui-lib-workspace')
detect_path = WORKSPACE / 'graphify-out' / '.graphify_detect.json'

print(f"Reading detect from {detect_path}")
detect = json.loads(detect_path.read_text())
code_files = []
for f in detect.get('files', {}).get('code', []):
    p = Path(f)
    code_files.extend(collect_files(p) if p.is_dir() else [p])

print(f"Found {len(code_files)} code files")

if code_files:
    result = extract(code_files)
    (WORKSPACE / 'graphify-out' / '.graphify_ast.json').write_text(json.dumps(result, indent=2))
    print(f'AST: {len(result["nodes"])} nodes, {len(result["edges"])} edges')
else:
    (WORKSPACE / 'graphify-out' / '.graphify_ast.json').write_text(json.dumps({'nodes':[],'edges':[],'input_tokens':0,'output_tokens':0}))
    print('No code files - skipping AST extraction')
