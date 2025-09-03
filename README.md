# fse-instructor

## Overview

This repository contains projects built during the Codecademy Full-Stack Engineer Bootcamp (Instructor-Led) emphasizing hands-on development across web fundamentals, front-end and back-end technologies, and deployment best practices

### Bootcamp details

**Duration:** August 12, 2025 to February 13, 2026
**Live Sessions:** Tuesdays & Fridays at 9pm EDT
**Structure:** 27-week intensive, instructor-led, project-based

## Technologies

- HTML5, CSS3, Responsive Design, Bootstrap
- JavaScript (ES6+, DOM, Async, Fetch, API Integration)
- React (Hooks, Routing, State Management, Authentication)
- Node.js, Express, MongoDB, Mongoose
- RESTful APIs, JWT, Auth Flows
- Git & GitHub, SDLC, Agile Practices
- Deployment (Cloud Services, Environments)
- Interview Prep, Capstone Presentation

## Projects

- Personal Bio Page
- Styled Landing Page
- Interactive Portfolio or Hobby Showcase
- GitHub Portfolio & Calculator
- Todo List App (Vanilla JS + API)
- Stock Market or Recipe Finder App
- React Counter & Todo App
- Multi-page React App
- Personal Library or Mini Game (React + API)
- Express API Server
- Mongoose Practice
- Task Manager or AI Helper API
- JWT Authentication System
- Full Stack Auth Integration
- Final Capstone: Booking System or Blog Platform

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
