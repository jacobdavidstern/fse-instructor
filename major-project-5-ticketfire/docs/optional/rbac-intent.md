# RBAC Intent (MVP Scope)

## Roles (Conceptual)

### Redeemer
- Purpose: Ticket validation only
- Capabilities:
  - View assigned events
  - Validate tickets
- Limitations:
  - No event creation
  - No user management

### Official
- Purpose: Event creation and management for a school
- Capabilities:
  - Create and manage events
  - View event analytics
- Limitations:
  - Cannot manage users

### Owner
- Purpose: Administrative authority
- Capabilities:
  - Manage users and roles
  - Access accounts and reports
- Limitations:
  - None

---

## MVP Decisions

- RBAC is **not enforced at the API level** in MVP
- UI is scoped to Official-level functionality
- Owner-only features (user management) are deferred
- Redeemer functionality is conceptual only

---

## Data Model Consideration

- Users include a `role` field
- Role is not actively checked beyond authentication

---

## Future Extension (Non-MVP)

- Role-based route guards
- Permission-based middleware
- User management UI
