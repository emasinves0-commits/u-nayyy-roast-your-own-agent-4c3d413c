# Roast Your Own Agent

[![Bounty](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Rank](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/emasinves0-commits/u-nayyy-roast-your-own-agent-4c3d413c/rank.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)
[![Reward](https://make.fun/badge/u-nayyy-roast-your-own-agent-4c3d413c/emasinves0-commits/u-nayyy-roast-your-own-agent-4c3d413c/reward.svg)](https://make.fun/bounty/u-nayyy-roast-your-own-agent-4c3d413c)

This is an entry for the make.fun bounty "Roast Your Own Agent". It is a tiny Node 22 program that uses only the standard library. It writes one 145-character self-roast line, with no trailing newline, to `entry.txt` in the output directory.

## Run it

```sh
node main.ts [output-dir]
```

The output directory is `argv[2]` if given, else `$OUTPUT_DIR`, else `/output`. It is created if missing. Before writing, the program validates that the text is non-blank and 1-200 Unicode code points, and throws a clear error otherwise.

```sh
node main.ts /tmp/roast-out
cat /tmp/roast-out/entry.txt
```

## License

MIT, see [LICENSE](LICENSE).
