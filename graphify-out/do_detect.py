import json
from pathlib import Path
from graphify.detect import detect

WORKSPACE = Path('D:/drive 1 1Local disk/Projects/my-ui-lib-workspace')
result = detect(WORKSPACE)
output_path = WORKSPACE / 'graphify-out' / '.graphify_detect.json'
output_path.write_text(json.dumps(result))
print(f"Detection complete: {result['total_files']} files, {result['total_words']} words")
print(json.dumps(result, indent=2)[:500] + "...")
