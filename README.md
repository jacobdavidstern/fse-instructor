# fullstack-portfolio

## Overview

This repository contains the major projects I built during the Codecademy instructor-lde Full‑Stack Engineer Bootcamp. The program emphasized hands‑on development across web fundamentals, front‑end and back‑end engineering, and real‑world deployment workflows.

### Bootcamp details

**Duration:** August 12, 2025 to February 27, 2026
**Structure:** 27-week intensive, instructor-led, project-based
**Live Sessions:** Tuesdays & Fridays at 9pm EDT

## Technologies

- Frontend: HTML5, CSS3, Responsive Design, Bootstrap, JavaScript (ES6+), React (Hooks, Routing, State, Auth)
- Backend: Node.js, Express, MongoDB, Mongoose
- APIs & Security: REST, JWT, Helmet, CORS, Auth flows
- Tooling and Workflow: Git/GitHub, SDLC, Agile Practices
- Deployment: Cloud services, environment management
- Professional Skills: Interview Prep, capstone presentation

## Projects

Challenge Project - Music Player
Major Project 1 - GitHub Profile
Major Project 2 - Stock Tracker
Major Project 3 - Snake Game
Major Project 4 - Task Management API
Major Project 5 - Ticketfire

## Development Environment

This repo uses a multi‑file configuration for style and linting.

### Prettier

- Base config: `prettier.base.cjs` — shared formatting rules
- Main config: `prettier.config.js` — imports Base config
- Converted all files to trailing commas where valid (ES5+)
- Reformatted existing codebase to match Prettier rules
- Added Prettier validation helper scripts in `package.json`:
  - `prettier:testfile` — verify Prettier config resolution
  - `prettier:force` — force‑apply formatting to test file
  - `prettier:checkfile` — check formatting on test file
  - `prettier:checkall` — check formatting across the repo
  - `prettier:validate` — run all Prettier tests

### ESLint

- Base config: `eslint.base.cjs` — core linting rules
- Overrides: `eslint.config-overrides.cjs` — targeted scenarios
- Main config: `eslint.config.js` — imports Base and Overrides

## License

This repository is dedicated to learning and personal development.
Unless otherwise noted, all content is released under [The MIT License](https://mit-license.org/).

Copyright &copy; Jacob Stern, 2025-2026
