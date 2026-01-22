# FS3 Challenge-1, Vibe Player -- Lessons Learned

## Challenges

API Key Management

- The public music API key became inactive just before frontend completion.
- This forced a pivot from a frontend‑only app to full‑stack with an Express backend.

Stale Code & Caching

- Aggressive caching during development and deployment repeatedly surfaced outdated code.
- Vite’s build cache and browser network cache frustrated debugging.

Full‑Stack Deployment

- Adding an Express backend introduced new build requirements:
  - Packaging both frontend and backend into a single Rollup bundle.
  - Deploying to a hosting service with an always‑on Express server.

## 📚 Lessons Learned

Project Management & Workflow

- Allocate buffer time before deadlines to reduce stress and protect scope.
- Prioritize MVP to avoid scope creep.
- Stay focused under pressure; progress compounds even in short bursts.

Technical Practices

- Evaluate API availability and Terms Of Use before committing to integration.
- Maintain clear dotenv documentation and fallback strategies for environment variables.
- Validate deployment compatibility across platforms and hosting environments.

Frontend Development

- Mock props early to clarify component contracts and default values.
- Design components deliberately: separate display from control logic and isolate reusable UI elements.

Debugging & Deployment

- Adapt quickly when packages conflict — a FontAwesome CDN is a viable fallback.
- Defeat aggressive caching: disable browser cache during debugging, add file hashes in Vite Rollup config, and clear build artifacts (rm -rf dist node_modules/.vite).
- Route API calls through an Express proxy to keep credentials private and unify local/production testing.
- Package frontend + backend together (e.g., Rollup bundle) to ensure consistent runtime behavior across environments.
