import json
from pathlib import Path

WORKSPACE = Path('D:/drive 1 1Local disk/Projects/my-ui-lib-workspace')
detect_path = WORKSPACE / 'graphify-out' / '.graphify_detect.json'

detect = json.loads(detect_path.read_text())
all_files = []
for files in detect['files'].values():
    all_files.extend(files)

try:
    from graphify.cache import check_semantic_cache
    cached_nodes, cached_edges, cached_hyperedges, uncached = check_semantic_cache(all_files)
    if cached_nodes or cached_edges or cached_hyperedges:
        (WORKSPACE / 'graphify-out' / '.graphify_cached.json').write_text(
            json.dumps({'nodes': cached_nodes, 'edges': cached_edges, 'hyperedges': cached_hyperedges})
        )
    (WORKSPACE / 'graphify-out' / '.graphify_uncached.txt').write_text('\n'.join(uncached))
    print(f'Cache: {len(all_files)-len(uncached)} files hit, {len(uncached)} files need extraction')
except ImportError:
    (WORKSPACE / 'graphify-out' / '.graphify_uncached.txt').write_text('\n'.join(all_files))
    print(f'Cache not available, treating all {len(all_files)} files as uncached')
