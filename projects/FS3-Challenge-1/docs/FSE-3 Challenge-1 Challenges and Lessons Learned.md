# Challenges and Lessons Learned

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
