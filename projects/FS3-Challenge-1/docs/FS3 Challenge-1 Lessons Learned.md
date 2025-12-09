# FS3 Challenge-1, Vibe Player, Lessons Learned

## I began this project on the due date and completed it the following day.

## The main challenges I resolved were:

- I wanted to use a music API; Jamendo was the only reliable option, and I needed to abide by its TOU. This required registering for a developer account, securing a unique client ID, and keeping it private by storing it in a local `.env` file rather than committing it to version control.
- FontAwesome’s npm package conflicted with React/React‑DOM, so I switched to the CDN version for stability.

## 📚 Lessons Learned

- Start earlier — deadlines arrive faster than expected.
- Plan API usage in advance to avoid reliability issues.
- Document environment variables and fallbacks clearly for reproducibility.
- Be flexible with tooling — when npm packages fail, simple CDN solutions can save time.
- Persistence matters: even under pressure, you can deliver more than you think.

## Deployment

Deployment proved to be the most challenging aspect of the project. While the player worked reliably in local development, hosting introduced a Hobson’s choice between reproducibility and security: exposing the API key for ease of use versus keeping credentials private. I experimented with environment variables, fallbacks, and proxy setups, but platform constraints limited success. The key lesson was that deployment is not just about pushing code live — it requires balancing accessibility with responsible handling of secrets, and documenting those trade‑offs clearly for others who may run the project.

## v2

Two versions of the code were explored: one that worked locally with Vite‑exposed environment variables, and another that attempted a proxy for secure deployment but remained incomplete and never ran reliably. The proxy approach, archived in a v2/ folder, used api/jamendo.js with a different environment variable (JAMENDO_CLIENT_ID) and an adapted useEffect block in AudioLogic.jsx. While this version is unfinished, it documents a possible path toward secure deployment, and future iterations could refine the proxy or explore serverless functions to better balance reproducibility with credential security.
