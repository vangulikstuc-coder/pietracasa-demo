#!/usr/bin/env bash
# Bouw-lus voor Stucq. Stuurt Claude Code autonoom aan tot prd.json klaar is.
# Vooraf eenmalig in deze map: git init && git add -A && git commit -m "init"
# Vereist: claude (Claude Code CLI) + node + git.
set -u
MAX_ITERATIONS=40       # harde bovengrens
STALL_LIMIT=3           # stop na zoveel beurten zonder enige wijziging
iter=0; stall=0
[ -f .gitignore ] || { for p in 'node_modules/' 'dist/' '.astro/' '.DS_Store' '**/node_modules/' '**/dist/' '**/.astro/'; do echo "$p"; done > .gitignore; }
echo "Start bouw-lus voor Stucq (max $MAX_ITERATIONS beurten)"
while [ $iter -lt $MAX_ITERATIONS ]; do
  iter=$((iter+1))
  echo "-------- beurt $iter --------"
  before=$(git rev-parse HEAD 2>/dev/null || echo none)
  cat PROMPT.md | claude -p --permission-mode acceptEdits --max-turns 50 > .loop-last.txt 2>&1 || true
  tail -n 15 .loop-last.txt
  git add -A >/dev/null 2>&1 && git commit -qm "beurt $iter (auto)" >/dev/null 2>&1 || true
  if grep -q "BUILD-COMPLEET" .loop-last.txt; then echo "Alle taken afgerond."; break; fi
  after=$(git rev-parse HEAD 2>/dev/null || echo none)
  if [ "$before" = "$after" ]; then
    stall=$((stall+1)); echo "geen wijziging (stall $stall/$STALL_LIMIT)"
    if [ $stall -ge $STALL_LIMIT ]; then echo "Vastgelopen - gestopt. Bekijk .loop-last.txt en prd.json."; break; fi
  else stall=0; fi
done
echo "Klaar. Bekijk de site lokaal; daarna live zetten via de stappen in README-CLAUDE-CODE.md."