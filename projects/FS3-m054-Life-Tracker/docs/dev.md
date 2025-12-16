// dev.md

# Railway deployment

- visit railway.com/dashboard
- click +New (project)
- select GitHub, let it build and fail
- Project > Settings > General > Name (change to m054-life-tracker)
- Project > Settings > General > Visibility (change to public)
- Project > Settings > General > Project ID > copy
- vscode > integrated project terminal
- `railway login` (if not already)
- `railway status` (should be empty, if one exists: `railway unlink`)
- `railway link --project <paste Project ID>`
- visit railway.com/dashboard
- click m054-life-tracker
- click the service inside m054-life-tracker (e.g., “fse-instructor”)
- click Settings (corresponds to service settings)
- [Railway Networking Settings](https://docs.railway.com/guides/public-networking#railway-provided-domain)
- Networking > confirm default domain (Railway auto-generates one once service is running)
- Networking > Generate Domain and select default if one does not appear
- Build > Use Metal Build Environment (select)
- if using railway.toml with `root = "projects/FS3-m054-Life-Tracker"`, you don’t need the `cd ... &` prefix in the dashboard — but okay to keep as a fallback
- Custom Build Command > + Build Command > `cd projects/FS3-m054-Life-Tracker && npm run build`
- Custom Start Command > + Start Command > `cd projects/FS3-m054-Life-Tracker && npm run start`
- Apply 3 changes > Details > Deploy Changes (triggers redeploy with new service settings)
- For production deploys, serve and vite must be listed in "dependencies" in package.json, not "devDependencies".
- `npm install serve@^14.2.1 vite@^7.1.12 --save`
- `serve -s dist`

# Project package.json

```json
{
  "name": "daily-life-tracker",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "start": "serve -s dist"
  },
  "dependencies": {
    "bootstrap": "^5.3.8",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.10",
    "react-dom": "^19.0.0",
    "serve": "^14.2.5",
    "vite": "^7.3.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0"
  },
  "engines": {
    "node": ">=20"
  }
}
```

# Repo package.json

```json
{
  "name": "fse-instructor",
  "description": "Instructor-led showcase from Codecademy's Full Stack Engineer program.",
  "author": "Jacob Stern",
  "version": "1.0.0",
  "license": "MIT",
  "private": true,
  "type": "commonjs",
  "homepage": "https://github.com/jacobdavidstern/fse-instructor",
  "scripts": {
    "build:fs3-1": "cd projects/FS3-Challenge-1 && npm run build",
    "start:fs3-1": "cd projects/FS3-Challenge-1 && npm run start",
    "build:fs3-2": "cd projects/FS3-m046-Stock-Tracker && npm run build",
    "start:fs3-2": "cd projects/FS3-m046-Stock-Tracker && npm run start",
    "dev:fs3-3": "cd projects/FS3-m054-Life-Tracker && npm run dev",
    "build:fs3-3": "cd projects/FS3-m054-Life-Tracker && npm run build",
    "start:fs3-3": "cd projects/FS3-m054-Life-Tracker && serve -s dist",
    "dev": "vite",
    "build": "vite build",
    "start": "serve -s dist",
    "lint": "eslint . --ext .js,.cjs",
    "lint:htmlhint": "htmlhint '**/*.html'",
    "format": "prettier --config prettier.config.cjs --write .",
    "check:prettier": "prettier --check .",
    "check:eslint": "eslint . --ext .js,.cjs",
    "prettier:testfile": "touch ./test.js && prettier --find-config-path ./test.js",
    "prettier:force": "prettier --config ./prettier.config.cjs --write ./test.js",
    "prettier:checkfile": "prettier --check ./test.js",
    "prettier:checkall": "prettier --check .",
    "prettier:validate": "npm run prettier:testfile && npm run prettier:force && npm run prettier:checkfile && npm run prettier:checkall",
    "validate": "eslint coursework sandbox --ext .js,.cjs,.mjs && prettier --check coursework sandbox config && npm test",
    "test": "echo \"TBD test\" && exit 0"
  },
  "keywords": [
    "full-stack-engineer",
    "bootcamp",
    "showcase"
  ],
  "devDependencies": {
    "@awmottaz/prettier-plugin-void-html": "^1.9.0",
    "@eslint/js": "^9.34.0",
    "eslint": "^9.34.0",
    "eslint-config-prettier": "^10.1.8",
    "eslint-plugin-import": "^2.32.0",
    "eslint-plugin-markdown": "^5.1.0",
    "eslint-plugin-n": "^17.21.3",
    "eslint-plugin-prettier": "^5.5.4",
    "htmlhint": "^1.6.3",
    "prettier": "^3.6.2",
    "tailwindcss": "^4.1.15"
  },
  "dependencies": {
    "@fortawesome/free-solid-svg-icons": "^7.1.0",
    "@fortawesome/react-fontawesome": "^3.1.1",
    "@tailwindcss/cli": "^4.1.15",
    "@tailwindcss/postcss": "^4.1.15",
    "bootstrap": "^5.3.8",
    "express": "^5.1.0",
    "react": "^19.0.0",
    "react-bootstrap": "^2.10.10",
    "react-dom": "^19.0.0",
    "react-router": "^7.9.5",
    "react-router-dom": "^7.9.5"
  }
}
```

# Repo railway.toml

```toml
# railway.toml

# Vibe Player service
[service "vibe-player"]
root = "projects/challenge-1-vibe-player"
build = "npm run build"
start = "npm run start"

# Life Tracker service
[service "life-tracker"]
root = "projects/FS3-m054-Life-Tracker"
build = "npm run build"
start = "npm run start"
```
