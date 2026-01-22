# TESTING.md

##### This documents the workflow to configure this repo's shared CJS+ESM setup.

### 01. Dependency Update Workflow

Install npm-check-updates

- globally: `npm install -g npm-check-updates`
  - ncu stands for npm-check-updates
  - list outdated deps:
    - `ncu`
  - update package.json to latest
    - `ncu -u`
    - `npm install`

- locally (per-repo): `npm install --save-dev npm-check-updates`

Update with ncu

- Review available updates:
  - npx stands for Node Package eXecute and allows you to run packages from the registry without installing globally
  - `npx npm-check-updates`
  - `npm install --save-dev npm-check-updates`

Apply updates:

- `npx npm-check-updates -u`
- `npm install`

### 02. Post-Update Checklist - confirming operational

- `npm test`
- All tests pass — no regressions

Optional: One‑Shot Validation Script

- Add to package.json:
  - `"scripts": {
"validate": "eslint . --ext .js,.cjs,.mjs && prettier --check . && npm test"
}`
- Run after ncu:
  - npm run validate

### 03. Cleanup Tasks

- Remove and reinstall dependencies:
  - `rm -rf node_modules package-lock.json`
  - `npm install`

- Prune extraneous packages
  - `npm prune`
  - Removes anything unlisted in package.json

- Clear npm cache
  - `npm cache clean --force`
  - Affects local cache to speed up installs, doesn't touch /node_modules

### 04. Lint Validation - ESLint config and error checks

- `npx eslint . --ext .js,.cjs,.mjs`
- `npx prettier --check .`
- No new errors/warnings
- Prettier output matches ESLint expectations

Check Peer Dependencies

- `npm ls eslint prettier`
- Confirm versions satisfy updated package peer ranges

### 05. Prettier Validation - formatting consistency and config resolution

Create test file
`touch ./test.js`

Verify which config file is being used
`npx prettier --find-config-path ./test.js`

Run Prettier with a specific config file on a specific file
`npx prettier --config ./.prettier.config.cjs --write ./test.js`

Check if a single file passes the Prettier configuration
`npx prettier --check ./test.js`

Check if entire repo passes the Prettier configuration
`npx prettier --check .`

```sh
npm run prettier:testfile     # Format test.js using repo config
npm run prettier:force        # Overwrite all files with current config
npm run prettier:checkfile    # Check formatting of test.js
npm run prettier:checkall     # Check formatting across entire repo
```

Warning! Overwrite all files in repo with current Prettier config
`npx prettier --write .`

### 06. Config Drift - Notes

- ESLint + Prettier quote/comma rules harmonized across:
  - fse-instructor repo - Common JS (CJS)
  - fse-learning repo - ES Module (ESM)
- `.eslintrc.cjs` and `.prettierrc.cjs` updated for consistency

### 07. Debugging Node.js in VS Code

#### Option 1: JS Debug Terminal

- Open `Terminal > New JavaScript Debug Terminal`
- Run your script manually: `node app.js`
- VS Code auto-attaches debugger

#### Option 2: launch.json (Reproducible & Configurable)

- Create `.vscode/launch.json`
- Define entry point, env vars, console type, etc.
- Ideal for team projects and onboarding clarity

### 08. Git Ignore for Bootcamp Projects

Child .gitignore rules from multiple React projects cascade and override parent rules.

**Solution**

**Part 1.** Use `.git/info/exclude` to block nested `.gitignore` files from overriding config.
Instead of fighting scattered `.gitignore` files, we placed global rules in `.git/info/exclude`.
This file is local only and never committed, so while stable and effective, somewhat inflexible.

```
/bootcamp/**
```

**Part 2.** Revise .gitignore to recurse from the repo root--needs more testing

```gitignore
/bootcamp/**        # repo-root-anchored recursive ignore
!bootcamp/.gitkeep  # keep placeholder for folder tracking
```

Key Takeaways

- Nested .gitignore files override repo-root .gitignore rules.
- Leading "/" anchors a rule to the repo root ( bootcamp/** vs /bootcamp/** )
- .git/info/exclude for local ignore rules.
- Note: .git/info/exclude are local, per-user, and not synced with commits.
