#!/usr/bin/env python3
"""One-shot migration: delete per-component dark-mode blocks and re-point
light fallback values to shared design tokens.

Run once from the repo root:  python3 scripts/consolidate-tokens.py [--write]
Without --write it only reports what it would do.
"""
import os, re, sys

WRITE = '--write' in sys.argv
ROOT = 'projects/my-ui'

# ---------- color normalization ----------
def _hsl_to_hex(h, s, l):
    h, s, l = float(h) % 360, float(s) / 100, float(l) / 100
    c = (1 - abs(2 * l - 1)) * s
    x = c * (1 - abs((h / 60) % 2 - 1))
    m = l - c / 2
    sec = int(h // 60) % 6
    rgb = [(c, x, 0), (x, c, 0), (0, c, x), (0, x, c), (x, 0, c), (c, 0, x)][sec]
    rgb = [max(0, min(255, round((v + m) * 255))) for v in rgb]
    return '#%02x%02x%02x' % tuple(rgb)

COLOR_RE = re.compile(
    r'^(hsla?|rgba?)\(([^)]*)\)$|^#[0-9a-fA-F]{3,8}$')

def norm_color(val):
    """Return canonical form: '#rrggbb' or ('#rrggbb', alpha) or the raw string."""
    v = val.strip()
    if re.match(r'^#[0-9a-fA-F]{3}$', v):
        return '#' + ''.join(ch * 2 for ch in v[1:]).lower()
    if re.match(r'^#[0-9a-fA-F]{6}$', v):
        return v.lower()
    m = re.match(r'^hsla?\(([^)]*)\)$', v)
    if m:
        inner = m.group(1).replace('/', ' ').replace(',', ' ')
        parts = inner.split()
        # supports "h s% l%" and "h, s%, l%" plus optional alpha
        h, s, l = parts[0], parts[1].rstrip('%'), parts[2].rstrip('%')
        alpha = None
        if len(parts) >= 4:
            a = parts[3]
            alpha = float(a) if a.replace('.', '').isdigit() else None
            if alpha is not None and alpha > 1:
                alpha = alpha / 100
        hexv = _hsl_to_hex(h, s, l)
        return (hexv, alpha) if alpha is not None else hexv
    m = re.match(r'^rgba?\(([^)]*)\)$', v)
    if m:
        parts = [p.strip() for p in m.group(1).replace('/', ' ').split()]
        nums = []
        alpha = None
        for i, p in enumerate(parts):
            if p.isdigit() or re.match(r'^\d*\.\d+$', p):
                if i < 3:
                    nums.append(int(p) if p.isdigit() else float(p))
                else:
                    alpha = float(p)
        if len(nums) == 3:
            hexv = '#%02x%02x%02x' % tuple(int(n) for n in nums)
            return (hexv, alpha) if alpha is not None else hexv
    return v

# ---------- (light, dark) pair -> token reference ----------
PAIR_MAP = {}
def add_pair(light, dark, token):
    PAIR_MAP[(norm_color(light), norm_color(dark))] = f'var({token})'

add_pair('#ffffff', '#09090b', '--ui-background')   # card surface
add_pair('#ffffff', '#18181b', '--ui-popover')      # popover/menu surface
add_pair('#09090b', '#fafafa', '--ui-foreground')
add_pair('hsl(222.2, 84%, 4.9%)', 'hsl(210, 40%, 98%)', '--ui-foreground')
for l in ['#f4f4f5', '#f1f1f1', '#f9fafb', '#f5f5f5', '#f3f4f6', 'hsl(240, 4.8%, 95.9%)']:
    for d in ['#27272a', '#09090b', 'hsl(240, 3.7%, 15.9%)']:
        add_pair(l, d, '--ui-muted')
for l in ['#71717a', '#888888', '#555555', '#6b7280', 'hsl(215.4, 16.3%, 46.9%)']:
    for d in ['#a1a1aa', '#71717a', 'hsl(215, 20.2%, 65.1%)']:
        add_pair(l, d, '--ui-muted-foreground')
for l in ['#a1a1aa', '#9ca3af']:
    for d in ['#52525b', '#71717a']:
        add_pair(l, d, '--ui-foreground-subtle')
for l in ['#e5e7eb', '#e4e4e7', 'hsl(214.3, 31.8%, 91.4%)']:
    for d in ['#27272a', 'hsl(217.2, 32.6%, 17.5%)']:
        add_pair(l, d, '--ui-border')
for l in ['#d1d5db', '#e5e7eb', '#e4e4e7']:
    add_pair(l, '#3f3f46', '--ui-border-strong')
add_pair('#18181b', '#fafafa', '--ui-primary')
add_pair('#fafafa', '#09090b', '--ui-primary-foreground')
add_pair('#eff6ff', '#1e3a8a', '--ui-selection')
add_pair('#18181b', '#e4e4e7', '--ui-selection-foreground')
add_pair('#2196f3', '#60a5fa', '--ui-focus')
add_pair('#dc2626', '#f87171', '--ui-destructive')
add_pair('hsl(210, 40%, 96.1%)', 'hsl(217.2, 32.6%, 17.5%)', '--ui-accent')
add_pair('hsl(0, 0%, 100%)', 'hsl(222.2, 84%, 4.9%)', '--ui-popover')
add_pair('#6b7280', '#9ca3af', '--ui-muted-foreground')
add_pair('#888888', '#52525b', '--ui-foreground-subtle')
add_pair('#f3f4f6', '#3f3f46', '--ui-accent')
add_pair('rgba(255, 255, 255, 0.9)', 'rgba(24, 24, 27, 0.9)', '--ui-surface-translucent')

# alpha pairs -> color-mix
PAIR_MAP[(norm_color('hsl(215.4, 16.3%, 46.9%)'), 0.3)] = \
    'color-mix(in srgb, var(--ui-muted-foreground) 30%, transparent)'
PAIR_MAP[(norm_color('hsl(215.4, 16.3%, 46.9%)'), 0.5)] = \
    'color-mix(in srgb, var(--ui-muted-foreground) 50%, transparent)'
PAIR_MAP[(norm_color('hsl(215, 20.2%, 65.1%)'), 0.3)] = \
    'color-mix(in srgb, var(--ui-muted-foreground) 30%, transparent)'
PAIR_MAP[(norm_color('hsl(215, 20.2%, 65.1%)'), 0.5)] = \
    'color-mix(in srgb, var(--ui-muted-foreground) 50%, transparent)'

# ---------- scss parsing helpers ----------
def find_media_blocks(src):
    blocks = []
    for m in re.finditer(r'@media\s*\(prefers-color-scheme:\s*dark\)\s*\{', src):
        i = m.end() - 1
        depth = 0
        for j in range(i, len(src)):
            if src[j] == '{':
                depth += 1
            elif src[j] == '}':
                depth -= 1
                if depth == 0:
                    blocks.append((m.start(), j + 1, src[i + 1:j]))
                    break
    return blocks

VARUSE = re.compile(r'var\((--[\w-]+)\s*,\s*([^()]+)\)')

report = []
for dirpath, dirs, files in os.walk(ROOT):
    for f in files:
        if not f.endswith('.scss'):
            continue
        fp = os.path.join(dirpath, f)
        if '/styles/' in fp.replace(os.sep, '/'):
            continue
        src = open(fp).read()
        if 'prefers-color-scheme: dark' not in src:
            continue
        orig = src
        darks = find_media_blocks(src)
        dark_fallbacks = {}
        non_var_lines = []
        for (_, _, inner) in darks:
            for vm in VARUSE.finditer(inner):
                dark_fallbacks.setdefault(vm.group(1), []).append(vm.group(2).strip())
            for line in inner.splitlines():
                ls = line.strip()
                if ls and not ls.startswith('//') and 'var(' not in ls and ls not in ('}', '{'):
                    if re.search(r':\s', ls):
                        non_var_lines.append(ls)
        base = src
        for (s, e, _) in reversed(darks):
            base = base[:s] + base[e:]
        replaced, unmatched = 0, []
        def repl(m):
            global replaced
            name, val = m.group(1), m.group(2).strip()
            darks_v = dark_fallbacks.get(name)
            ref = None
            if darks_v:
                key = (norm_color(val), norm_color(darks_v[0]))
                ref = PAIR_MAP.get(key)
                if ref is None:
                    akey = norm_color(val)
                    if isinstance(akey, tuple):
                        ref = PAIR_MAP.get((norm_color(darks_v[0]) if False else norm_color(val), akey[1]))
                        ref = PAIR_MAP.get((norm_color(val.split('/')[0] if '/' in val else val),)) if ref is None else ref
            if ref:
                replaced += 1
                return f'var({name}, {ref})'
            if darks_v:
                unmatched.append((name, val, darks_v[0]))
            return m.group(0)
        base = VARUSE.sub(repl, base)
        # tidy: collapse >2 blank lines left by removed blocks
        base = re.sub(r'\n{3,}', '\n\n', base).rstrip() + '\n'
        if base != orig:
            report.append((fp, replaced, unmatched, non_var_lines))
            if WRITE:
                open(fp, 'w').write(base)

print(f"{'WROTE' if WRITE else 'DRY-RUN'} — {len(report)} files changed\n")
for fp, n, unmatched, nonvar in report:
    print(f"{fp}: {n} fallback(s) -> tokens")
    for name, l, d in unmatched:
        print(f"    UNMATCHED {name}: {l} | dark {d}")
    for line in nonvar[:6]:
        print(f"    DARK-ONLY DECL: {line}")
