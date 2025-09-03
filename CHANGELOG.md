# Changelog

All notable changes to this project will be documented in this file.

Based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Added

- Multi‑file Prettier configuration:
  - Base config: `prettier.base.cjs` — shared formatting rules
  - Main config: `prettier.config.js` — imports base config
  - Helper scripts in `package.json` for validation:
    - `prettier:testfile` — verify Prettier config resolution
    - `prettier:force` — force‑apply formatting to a test file
    - `prettier:checkfile` — check formatting on a single file
    - `prettier:checkall` — check formatting across the repo
    - `prettier:validate` — run all Prettier tests

- Multi‑file ESLint configuration:
  - Base config: `eslint.base.cjs` — core linting rules
  - Overrides: `eslint.config-overrides.cjs` — targeted scenarios
  - Main config: `eslint.config.js` — imports base and overrides

### Changed

- Reformatted entire codebase to match Prettier rules (including trailing commas where valid in ES5+)
