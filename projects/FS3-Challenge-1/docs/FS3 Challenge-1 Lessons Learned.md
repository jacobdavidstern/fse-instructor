# FS3 Challenge-1, Vibe Player -- Lessons Learned

## Timeline

Starting late compressed the project into two days, underscoring the importance of planning ahead and leaving buffer time before deadlines.

## Challenges

- **Technical**:
  - Jamendo was the only reliable music API option. Registering for a developer account and securing a client ID required careful handling to keep it private in `.env.local`.
  - FontAwesome’s npm package conflicted with React/React-DOM, so switching to the CDN version provided stability.
- **Process**:
  - Managing environment variables across dev and prod.
  - Deploying while keeping secrets secure.

## 📚 Lessons Learned

- Allocate buffer time before deadlines.
- Evaluate API reliability and terms of use before coding.
- Maintain clear `.env` documentation and fallback strategies.
- Adapt quickly when packages conflict — CDN can be a pragmatic fallback.
- Stay focused under pressure; progress compounds even in short bursts.

## Deployment

Deployment required balancing security with reproducibility. Keeping the Jamendo client ID private in `.env.local`, combined with Express proxy testing (see _Troubleshooting Ports and Connectivity_), ensured the app could be hosted securely on Vercel.
