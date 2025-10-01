# TESTING.md

This file documents how I validate builds and environments across platforms.
It’s designed to be audit-friendly and modular — not exhaustive.

## Platforms

- **Windows**
  - Tested on x64 (Chocolatey Node had issues; MSI installer preferred)
  - ARM64 beta not currently accessible
- **Linux**
  - Fedora setup pending
  - Other variants untested
- **macOS**
  - Primary dev platform
  - Tested with Node via `nvm`

## Node & NPM

- Use `nvm` to manage Node versions across platforms
- Avoid Chocolatey Node on Windows — known issues with path resolution and global installs
- Prefer MSI installer or `nvm-windows` for consistency

## HTML Validation

- Uses `HTMLHint` for linting
- W3C Validator not compatible with Prettier formatting
- Configurable via `.htmlhintrc`

## VS Code Settings

See [`config/settings.json`](./config/settings.json) for editor defaults.
Includes formatting, linting, and extension recommendations.

## Notes

- This file is not exhaustive — it reflects current testing status and known issues
- Contributions welcome if you’ve tested on other platforms or setups
