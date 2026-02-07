# sprint-0-chore-04-define-core-features

# Chore 4: Define Core Features and MVP

**Estimated Time:** 1-2 hours

## Task
Identify MVP features, prioritize them, and write clear MVP description

## Steps

### Part 1: Core Features (MVP vs Nice-to-Have)
- [x] Brainstorm ALL possible features you could build
- [x] For EACH feature, ask: "If this feature was missing, would my users still get value from the app?"
  - If YES → Nice-to-Have
  - If NO → MVP Feature
- [x] Confirm **MVP Features** (must have for launch)
- [x] Document final MVP + **Nice-to-Have** feature list
- [x] Create features list in a document or README with clear labels

**Example:**
```
MVP Features (Must Have):
- User registration and login
- Create new task
- View task list
- Mark task as complete
- Delete task

Nice-to-Have Features (Future):
- Task categories/tags
- Due dates and reminders
- Task priority levels
- Share tasks with other users
- Dark mode
```

### Part 2: Define MVP
- [x] Write 2-3 sentence MVP description
- [x] "1. TicketFire internally can view global revenue. 2 Event organizers can login, create and delete events, view their ticket sales. 3. Lower priority for MVP sprint: Ticket buyers can view their tickets."
- [x] Verify: "Can a user get value from JUST these core features?" (Must be YES)
- [x] Document MVP in README or planning doc

## Acceptance Criteria

- [x] Complete feature list created with clear labels
- [x] 3-5 core MVP features identified and labeled as "MVP Features"
- [x] Non-essential features clearly labeled as "Nice-to-Have"
- [x] Each feature passes the test: "Would users still get value without this?"
- [x] MVP features are realistic for 2-3 week timeline
- [x] MVP description written (2-3 sentences)
- [x] MVP provides clear user value
- [x] Scope is realistic for 2-3 weeks

# sprint-0-chore-05-create-mockups-wireframes

# Chore 5: Create Mockups Wireframes Colors and Fonts

**Estimated Time:** 1-2 hours

## Task
Design basic layout for all 5 required pages and select design system (colors and fonts)

## Steps

### Part 1: Mockups and Wireframes
- [x] Choose tool: Figma or Google Stitch
- [x] Sketch/wireframe 5(+1) required pages:
  - Landing page
  - TicketFire Dashboard (read-only)
  - Client Login page
  - Client Event Creation page
  - Client Events Dashboard page
  - Customer Tickets page (optional)
- [x] Focus on layout and user flow, not pixel-perfect design
- [x] Show navigation between pages
- [x] Identify where CRUD operations happen
- [x] Save mockups (photo, export, or screenshot)

### Part 2: Color Palette
- [x] Choose color palette (4-6 colors) using:
  - Coolors.co - https://coolors.co/
  - Tailwind Color Generator - https://uicolors.app/create
- [x] Select 2-3 primary colors (red/orange, dark gray, lime green), 3-4 neutrals (white, light gray, medium gray), 4 semantic colors (success green, error red, warning amber, info blue)
- [x] Document color hex codes

```sh
    *-primary changes the color to blue #007bff.
    *-info changes the color to teal #17a2b8.
    *-success changes the color to green #28a745.
    *-warning changes the color to yellow #ffc107.
    *-danger changes the color to red #dc3545.
    *-dark changes the color to dark gray #343a40.
    *-secondary changes the color to gray #6c757d.
    *-light changes the color to light gray #f8f9fa.
    *-white changes the color to white #ffffff.
```

### Part 3: Font Selection
- [x] Choose font option:
  - System fonts (fastest, no setup)
  - Google Fonts (1-2 fonts max) - https://fonts.google.com/
- [x] If using Google Fonts, select:
  - 1 font for headings: Roboto Flex, 700
  - 1 font for body text: Roboto Flex, 400
- [x] Document font names and weights: https://fonts.google.com/specimen/Roboto?preview.text=TicketFire

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Name</title>
    <!-- Font Awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.1.0/css/all.min.css"
      integrity="sha512-..."
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght,XOPQ,XTRA,YOPQ,YTDE,YTFI,YTLC,YTUC@8..144,100..1000,96,468,79,-203,738,514,712&display=swap"
      rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

## 4. Add Google font to index.css

```css
/* client/src/index.css */

:root {
  /* Global typography baseline */
  font-family: "Roboto Flex", system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  line-height: 1.5;

  /* Color + theme defaults */
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  /* Rendering improvements */
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Optional: semantic weight helpers */
.roboto-regular {
  font-weight: 400;
}

.roboto-medium {
  font-weight: 500;
}

.roboto-bold {
  font-weight: 700;
}

/* Global reset */
body {
  margin: 0;
}

/* Links (optional) */
a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

/* Buttons */
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}
```

## Acceptance Criteria

- [x] All 5 pages have mockups/wireframes
- [x] Navigation flow is clear
- [x] Main features are visible in designs
- [x] Mockups saved and accessible
- [x] Color palette selected (4-6 colors with hex codes)
- [x] Font selection documented

# sprint-0-chore-06-ui-design-system

# Chore 6: Choose UI Framework and Icons

**Estimated Time:** 30-45 minutes

## Task
Choose UI component library and icon library for consistent design

## Steps

- [x] Choose ONE component library or CSS framework:
  - React Bootstrap - https://react-bootstrap.github.io/
- [x] Document your choice and reasoning: React Bootstrap for development velocity
- [x] Choose icon library (if needed): FontAwesome for development velocity
  - React Icons - https://react-icons.github.io/react-icons/
  - Font Awesome - https://fontawesome.com/
- [x] Document all UI choices in README or DESIGN.md
- [x] List installation commands for later reference

https://fontawesome.com/search?q=hive&ic=free-collection

## Acceptance Criteria

- [x] Component library/framework chosen and documented
- [x] Icon library chosen (if needed)
- [x] Installation commands listed
- [x] All UI choices documented in README or DESIGN.md

# sprint-0-chore-07-component-architecture

# Chore 7: Plan Component Architecture (Simplified)

Chore 07: Component Architecture

Description

Estimated Time: 1-2 hours

Task
Design React component hierarchy and identify state management needs

Acceptance Criteria
  Component tree drawn for all 5 pages
  Reusable components identified (minimum 5)
  Authentication state management planned
  Global vs local state decisions documented
  Component responsibilities clearly defined
  State management approach chosen (Context API recommended)
  Component plan saved and accessible

Steps

- [x] Review your mockups from Planning Chore 5
- [x] Identify reusable components for each page
- [x] Draw component tree showing parent-child relationships
- [x] Identify what data each component needs (props vs state)
- [x] Determine authentication state management
- [x] Plan application state: global vs local data
- [x] Identify shared state needs: loading error and form states
- [x] Choose state management approach (Context API recommended)
  - Context API only for Auth
  - No overuse of Context for page data
- [x] Document your component plan

Acceptance Criteria

- [x] Component tree drawn for all 5 pages
- [x] Reusable components identified (minimum 5)
  Reusable (shared) components across pages include:
  - AppLayout
  - Sidebar
  - Header
  - StatGrid
  - StatCard
  - SchoolCard
  - EventsList
  - EventCard
  - EventForm
  - Input components (TextInput, SelectInput, etc.)
- [x] Authentication state management planned
  - AuthContext + route guards + login redirect logic are clearly defined.
- [x] Global vs local state decisions documented
- [x] Component responsibilities clearly defined
  - Each page has a Purpose section, and responsibilities are non-overlapping.
- [x] State management approach chosen (Context API recommended)
- [x] Component plan saved and accessible

# sprint-0-chore-10-sprint-planning

# Chore 10: Sprint Planning

**Estimated Time:** 30 minutes

## Task
Group user stories into Sprint 1 and Sprint 2

## Steps

- [x] Review all user stories
- [x] Group into Sprint 1 (Backend/Database/Auth):
  - Database models (based on schema design from Planning Chore 10)
  - Authentication routes
  - CRUD API routes
  - Security implementation
- [x] Group into Sprint 2 (Frontend/Integration):
  - React component architecture (based on Planning Chore 7)
  - React pages and routing
  - Authentication UI and state management
  - CRUD operations UI
  - Styling and responsive design (based on Planning Chore 5 & 6)
- [x] Verify Sprint 1: 15-20 hours, Sprint 2: 18-25 hours
- [x] Document sprint backlog

## Acceptance Criteria

- [x] All stories assigned to Sprint 1 or Sprint 2
- [x] Sprint 1 focuses on backend
- [x] Sprint 2 focuses on frontend
- [x] Time estimates are balanced

# sprint-0-chore-12-initialize-react-frontend

# Chore 12: Initialize React Frontend

**Estimated Time:** 15-20 minutes

## Task
Set up React application with routing, HTTP client, and proper folder structure

## Steps

### Part 1: Create React App
- [x] Navigate to project root
- [x] Run: `npm create vite@latest client -- --template react`
- [x] Navigate to client folder: `cd client`
- [x] Install dependencies: `npm install`

### Part 2: Install Core Dependencies
- [x] (removed axios dependency)

### Part 3: Install Styling Framework and Icons (from Planning Chore 6)
- [x] Follow installation instructions based on your Planning Chore 6 decision:
  - **React Bootstrap:** https://react-bootstrap.github.io/docs/getting-started/introduction
- [x] Follow icon library installation instructions (if chosen in Planning Chore 6):
  - **React Icons:** https://react-icons.github.io/react-icons/
  - **Font Awesome:** https://docs.fontawesome.com/web/use-with/react/

### Part 4: Add Google Fonts (from Planning Chore 5)
- [x] If using Google Fonts, follow the instructions at: https://fonts.google.com/
- [x] Add the `<link>` tag to `index.html` in `<head>` section
- [x] Update `src/index.css` with your chosen font-family

### Part 5: Create Folder Structure
- [x] Navigate to `src` folder: `cd src`
- [x] Create project folders:
  ```bash
  mkdir components pages hooks context (utils?)
  ```
- [x] Folder structure should look like:
  ```
  src/
  ├── components/    (Reusable UI components)
  ├── context/       (React Context for state management)
  ├── hooks/         (Custom React hooks)
  ├── pages/         (Route-level page components)
  ├── utils/         (Helper functions, if needed)
  ├── App.css
  ├── App.jsx
  ├── index.css
  └── main.jsx
  ```

### Part 6: Test Setup
- [x] Navigate back to client folder: `cd ..`
- [x] Test: `npm run dev`
- [x] Verify React app opens in browser at http://localhost:5173
- [x] Stop the dev server (Ctrl+C)

## Acceptance Criteria

- [x] React app created successfully with Vite
- [x] react-router installed
- [x] Styling framework/library installed (from Planning Chore 6)
- [x] Icon library installed (if chosen in Planning Chore 6)
- [x] Google Fonts added (if chosen in Planning Chore 5)
- [x] All folders created (components, pages, hooks, context, utils)
- [x] App runs without errors
- [x] Default React page displays in browser at http://localhost:5173

# sprint-0-chore-13-initialize-express-backend

# Chore 13: Initialize Express Backend with Folder Structure

**Estimated Time:** 15 minutes

## Task
Set up Express server, install dependencies, create folder structure, and add a test route

## Steps

- [x] Navigate to server folder: `cd server`
- [x] Initialize npm: `npm init -y`
- [x] Install backend dependencies:
  ```bash
  npm install express dotenv cors bcrypt jsonwebtoken
  ```
- [x] Install security dependencies:
  ```bash
  npm install helmet express-rate-limit
  ```
- [x] Install database dependency (choose one):
  ```bash
  # For MongoDB:
  npm install mongoose

  # For PostgreSQL/MySQL:
  npm install sequelize pg
  # OR
  npm install sequelize mysql2
  ```
- [x] Install dev dependencies:
  ```bash
  npm install --save-dev nodemon
  ```
- [x] Update package.json scripts:
  ```json
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
  ```
- [x] Create folder structure:
  ```bash
  mkdir config controllers middleware models routes utils
  ```
- [x] Create `.env` file in server folder with:
  ```
  PORT=3001
  NODE_ENV=development
  DATABASE_URL=temporary_placeholder
  JWT_SECRET=temporary_placeholder
  ```
- [x] Create `.env.example` file in server folder:
  ```
  PORT=3001
  NODE_ENV=development
  DATABASE_URL=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_here
  ```
- [x] Create `server.js` file with basic Express setup and test route:
  ```javascript
  require('dotenv').config();
  const express = require('express');
  const cors = require('cors');
  const helmet = require('helmet');

  const app = express();

  // Middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  // Test route
  app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  ```
- [x] Test server: `npm run dev`
- [x] Verify server starts without errors
- [x] Test route in browser: http://localhost:3001/api/test
- [x] Stop the dev server (Ctrl+C)

## Folder Structure

```
server/
├── config/         (Database connection, config files)
├── controllers/    (Business logic for routes)
├── middleware/     (Authentication, validation, error handling)
├── models/         (Database schemas/models)
├── routes/         (API route handlers)
├── utils/          (Helper functions, validators, token generators)
├── .env            (Environment variables - NOT committed)
├── .env.example    (Example env file - committed)
├── package.json
└── server.js       (Main server file)
```

## Acceptance Criteria

- [x] package.json created in server folder
- [x] All core dependencies installed (express, dotenv, cors, bcrypt, jsonwebtoken)
- [x] All security dependencies installed (helmet, express-rate-limit)
- [x] Database ORM installed (mongoose OR sequelize)
- [x] nodemon installed as dev dependency
- [x] Scripts added to package.json
- [x] All folders created (models, controllers, routes, middleware, config, utils)
- [x] .env and .env.example files created
- [x] server.js created with test route
- [x] Server runs successfully on port 3001
- [x] Test route returns JSON response

# sprint-0-chore-14-database-setup

# Chore 14: Set Up Database and Test Connection

**Estimated Time:** 20-30 minutes

## Task
Create database instance, configure environment variables, and verify connection

## For MongoDB Atlas

- [x] Sign up for MongoDB Atlas (https://www.mongodb.com/cloud/atlas)
- [x] Create new cluster (free tier)
- [x] Create database user with username/password
- [x] Get connection string
- [x] Update `.env` file with actual connection string:
  ```
  DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/your-database-name
  ```
- [x] Generate strong JWT secret (random string, 32+ characters)
- Generate a random, cryptographically strong, 128 (32+) character secret
-  node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
- [x] Securely update `.env` file with JWT secret *** DO NOT STORE THIS ANYWHERE ELSE ***:
  ```
  JWT_SECRET=your_actual_random_secret_here
  ```
- [x] Create `config/db.js` file:
  ```javascript
  const mongoose = require('mongoose');

  const connectDB = async () => {
    try {
      await mongoose.connect(process.env.DATABASE_URL);
      console.log('MongoDB connected successfully');
    } catch (error) {
      console.error('MongoDB connection error:', error.message);
      process.exit(1);
    }
  };

  module.exports = connectDB;
  ```
- [x] Update `server.js` to connect to database:
  ```javascript
  require('dotenv').config();
  const express = require('express');
  const connectDB = require('./config/db');
  const cors = require('cors');
  const helmet = require('helmet');

  const app = express();

  // Middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  // Test route
  app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is working!' });
  });

  // Start server after DB connects
  const startServer = async () => {
    try {
      await connectDB(); // Wait for DB connection
      const PORT = process.env.PORT || 3001;
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    } catch (err) {
      console.error('Failed to start server:', err.message);
      process.exit(1);
    }
  };

  startServer();
  ```
- [x] Test database connection: `npm run dev`
- [x] Verify console shows "MongoDB connected successfully"
- [x] Stop the dev server (Ctrl+C)

## Acceptance Criteria

- [x] Database instance created (MongoDB Atlas or local)
- [x] .env file updated with actual DATABASE_URL
- [x] .env file updated with strong JWT_SECRET (32+ characters)
- [x] config/db.js created with connection logic
- [x] server.js updated to connect to database
- [x] Server starts successfully and connects to database
- [x] Console shows successful connection message
- [x] All files committed (except .env)
- [x] .env is NOT in Git
- [x] .env.example IS in Git *** without passwords or secrets ***
- [x] Commit pushed to GitHub

# NOTE: *** Following is an Out-Of-Order Replacement for Trello Chore 7 ***
# Chore 7 ** Replaced in Trello **

## Replaced with it's Trello counterpart. Original markdown version follows:

**Estimated Time:** 45 minutes - 1 hour (TIME-BOXED)

## Task
Break down your UI into components and plan state management strategy

## Recommended Reading
**Before starting, review:** Thinking in React - https://react.dev/learn/thinking-in-react

## Steps

### Part 1: Identify Components (20 minutes - TIME-BOXED)
- [x] Review your mockups from Planning Chore 5
- [x] Name each component (Navigation, TaskCard, LoginForm, etc.)
- [x] Identify which components can be reused across pages
- [x] List 5-8 main components with brief description
- [x] Stop after 20 minutes - you can refine during coding

**Quick Component Checklist:**
- Navigation/Header
- Form components (Login, Register, Create/Edit)
- List/Card components (display your main resource)
- Button components
- Any modals or dialogs

### Part 2: Plan State Location (15 minutes - TIME-BOXED)
- [x] For each component, ask: "What data does this need?"
- [x] Identify where state should live:
  - **Local state:** Form inputs, toggles, component-specific data
  - **Shared state:** User authentication, data shown across multiple components
- [x] Mark which components will fetch data from API
- [x] Stop after 15 minutes - you can adjust during coding

### Part 3: Choose State Management Strategy (10 minutes)

**State Management Guidelines:**

**Use Props Drilling when:**
- Passing data 2-3 levels deep maximum
- Simple, straightforward data flow
- WARNING: Can create tightly coupled components if overused

**Use Context API (useContext) when:**
- State needed across most or all of your app
- Examples: AuthContext (user login state), ThemeContext (dark mode)
- Good for: Authentication, user preferences, theme

**Use Custom Hooks when:**
- Reusing stateful logic across components
- Examples: useFetch, useAuth, useLocalStorage
- Keeps components clean and logic reusable

**Decision:**
- [x] Document which approach you'll use for authentication
- [x] Document which approach you'll use for your main resource data
- [x] Keep it simple - you can always refactor later

## Example Component Plan

```
Pages and Components:

1. Home Page
   - Navigation (shared component)
   - HeroSection
   - FeatureList

2. Login Page
   - Navigation (shared component)
   - LoginForm (local state: email, password)

3. Dashboard Page
   - Navigation (shared component)
   - TaskList (fetches tasks from API)
   - TaskCard (receives task as prop)
   - CreateTaskButton

State Management:
- AuthContext: User login state (global - used in Navigation, Dashboard)
- Local state: Form inputs, individual component toggles
- API calls: Dashboard fetches tasks, stores in local state
```

## Acceptance Criteria

- [x] 5-8 main components identified and named
- [x] Reusable components marked (used on multiple pages)
- [x] State location decided (local vs shared)
- [x] State management strategy chosen for:
  - Authentication state
  - Main resource data
- [x] Component plan documented (can be simple list or sketch)
- [x] TIME-BOXED: Stopped after 45 minutes to 1 hour

## Important Note

This is a PLANNING exercise, not final architecture. You will refine and adjust as you code. The goal is to think through the basics so you can start coding with direction, not to create a perfect plan. Keep it simple and move forward.
