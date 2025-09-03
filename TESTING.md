### Prettier testing

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
npm run prettier:testfile
npm run prettier:force
npm run prettier:checkfile
npm run prettier:checkall
```

Warning! Overwrite all files in repo with current Prettier config
`npx prettier --write .`

### Repo Dependency Update & Validation Workflow with ncu

Install npm-check-updates

- globally: `npm install -g npm-check-updates`
  - run ncu in any project without adding to that project’s devDependencies
  - list outdated deps:
    - `ncu`
  - update package.json to latest
    - `ncu -u`
    - `npm install`

- locally (per-repo): `npm install --save-dev npm-check-updates`
  - version‑pinned per repo, can be better for team reproducibility

Update with ncu

- Review available updates:
  - `npx npm-check-updates
  - `npm install --save-dev npm-check-updates`

Apply updates:

- `npx npm-check-updates -u`
- `npm install`

Verify Lint + Format Harmony

- `npx eslint . --ext .js,.cjs,.mjs`
- `npx prettier --check .`
- No new errors/warnings
- Prettier output matches ESLint expectations

Check Peer Dependencies

- `npm ls eslint prettier`
- Confirm versions satisfy updated package peer ranges

Run Tests

- `npm test`
- All tests pass — no regressions

Update Docs & Changelog

- Note version bumps in CHANGELOG.md
- Mention any new minimum Node/ESLint requirements for onboarding

Commit the new baseline

- `git add package.json package-lock.json`
- `git commit -m "chore: deps updated via ncu; all checks passed"`
  Tag if you want a rollback point:
  - `git tag -a deps-YYYYMMDD -m "Deps baseline after ncu"`

Optional: One‑Shot Validation Script

- Add to package.json:
  - `"scripts": {
"validate": "eslint . --ext .js,.cjs,.mjs && prettier --check . && npm test"
}`
- Run after ncu:
  - npm run validate

Cleanup

- Remove and reinstall dependencies:
  - `rm -rf node_modules package-lock.json`
  - `npm install`
  - Guarantees node_modules matches what's in package.json and lockfile.

- Prune extraneous packages
  - `npm prune`
  - Removes anything unlisted in package.json

- Clear npm cache
  - `npm cache clean --force`
  - Affects local cache to speed up installs, doesn't touch /node_modules
