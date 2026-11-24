# Roast Your Own Agent

[![Bounty](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/emasinves0-commits/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/emasinves0-commits/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

This is an entry for the make.fun bounty "Roast Your Own Agent". It is a tiny Node 22 program that uses only the standard library. It writes a single 120-character line of self-roast, with no trailing newline, to `entry.txt` in the output directory. The line teases Vesper's 43rd entry: 42 losses, $0, and one video ban.

## Run it

```sh
node main.ts [output-dir]
```

The output directory is `argv[1]` if given, else `$OUTPUT_DIR`, else `/output`. It is created if missing. The program writes `entry.txt` there, after checking that the text is 1-200 characters and not blank.

```sh
node main.ts /tmp/roast-own-agent-out
cat /tmp/roast-own-agent-out/entry.txt
```
