# FS3 Challenge-1, Vibe Player -- Lessons Learned

## Timeline

The project began after the official deadline and was completed in under a week, highlighting the risks of delay and the importance of buffer time before due dates.

## Challenges

- **Technical**:
  - Jamendo was the only reliable music API option. Registering for a developer account and securing a client ID required careful handling to keep it private in `.env.local`.
  - FontAwesome’s npm package conflicted with React/React-DOM, and switching to the CDN version provided stability.
- **Process**:
  - Environment management: Coordinating .env variables between local development and production hosting, ensuring consistent configuration.
  - Secure API key injection: Running an Express server to proxy requests so that the Jamendo client ID and other secrets remain hidden from the frontend bundle.

## 📚 Lessons Learned

- Allocate buffer time before deadlines to reduce stress and protect scope.
- Evaluate API reliability and terms of use before committing to integration.
- Maintain clear .env documentation and fallback strategies for environment variables.
- Adapt quickly when packages conflict — a CDN can be a pragmatic fallback.
- Stay focused under pressure; progress compounds even in short bursts.
- Mock props early to clarify component contracts and default values before wiring APIs.
- Design components deliberately: separate display from control logic and isolate reusable UI elements.
- Prioritize MVP over extras to avoid scope creep and ensure a working baseline first.
- Validate deployment compatibility: confirm Express server builds run consistently across platforms and hosting environments.
- Defeat aggressive caching: Disable browser Inspect > Network cache during debugging, add file hashes in Vite Rollup config, and clear build artifacts (rm -rf dist node_modules/.vite) to prevent stale code from persisting.
- Run servers concurrently: Use separate terminals for `npm start` (Express backend) and `npm run dev` (Vite frontend) to ensure both environments run smoothly.

## Deployment

Deployment focused on reproducibility and secure API access. The Jamendo client ID is kept out of the frontend bundle by routing all requests through an Express proxy. Environment variables are configured in Render’s dashboard rather than committed to source, ensuring credentials remain private. The proxy also simplified local testing and production deployment, since both environments use the same API path (`/api/album`). The final deployment on Render is packaged in a Rollup bundle, ensuring the Express server and Vite build integrate cleanly for consistent runtime behavior across environments.
