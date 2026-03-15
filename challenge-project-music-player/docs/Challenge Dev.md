# Options to run Express and Vite in one terminal:

npm install --save-dev npm-run-all

```json // package.json
{
  "scripts": {
    "start-backend": "node server.js",
    "start-frontend": "vite",
    "dev": "npm-run-all --parallel start-backend start-frontend"
  }
}
```

npm install --save-dev concurrently

concurrently

```json // package.json
{
  "scripts": {
    "dev": "concurrently \"node server.js\" \"vite\""
  }
}
```

# GitHub Actions CI/CD workflow for Railway deployment

## Railway setup

```sh
npm install -g @railway/cli
railway --version
railway login
railway status
railway link
railway status
```

## GitHub online repo specific settings > Secrets and variables > Actions > Repository secrets

> > Note: Find Railway token in $HOME/.railway/config.json and only use payload
> > RAILWAY_TOKEN
> > rw...

## GitHub Actions Repo root package.json

```json // package.json
{
  "scripts": {
    "build:fs3-1": "cd projects/FS3-Challenge-1 && npm run build",
    "start:fs3-1": "cd projects/FS3-Challenge-1 && npm run start",
    "build:fs3-2": "cd projects/FS3-m046-Stock-Tracker && npm run build",
    "start:fs3-2": "cd projects/FS3-m046-Stock-Tracker && npm run start",
    "build": "npm run build:fs3-1",
    "start": "npm run start:fs3-1"
  }
}
```

Generic alternative build / start signals to specify the namespaced scripts.:

```json // package.json
{
  "scripts": {
    "build:fs3-1": "cd projects/FS3-Challenge-1 && npm run build",
    "start:fs3-1": "cd projects/FS3-Challenge-1 && npm run start",
    "build": "echo \"Specify a project: npm run build:fs3-1 or build:fs3-2\" && exit 1",
    "start": "echo \"Specify a project: npm run start:fs3-1 or start:fs3-2\" && exit 1"
  }
}
```

## GitHub Actions Repo root .github/workflows/deploy.yml

```yml
//.github/workflows/deploy.yml
name: Deploy to Railway

on:
  push:
    branches:
      - master
    paths-ignore:
      - '**/*.md'
      - '**/*.txt'
      - 'docs/**'
      - 'LICENSE'

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      # Checkout the repo
      - name: Checkout repository
        uses: actions/checkout@v3

      # Install dependencies
      - name: Install dependencies
        run: npm install

      # Build the project
      - name: Build project
        run: npm run build

      # Sanity check Railway token/project link
      - name: Verify Railway status
        run: npx railway status
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}

      # Deploy to Railway
      - name: Deploy with Railway
        run: npx railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
```
