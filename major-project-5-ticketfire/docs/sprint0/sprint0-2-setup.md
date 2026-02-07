# sprint-0-setup-chore-1-github-repository-step-by-step.md
# Chore 12: Create GitHub Repository & Project Structure

ESTIMATED TIME: 15 minutes

## Overview
In this task, you will create a new GitHub repository, clone it to your local machine, and set up the basic folder structure for your full-stack application.

---

## Step 1: Create a New GitHub Repository

### 1.1 Navigate to GitHub
- Open your web browser and go to https://github.com
- Log in to your GitHub account

### 1.2 Create the Repository
- Click the green "New" button or the "+" icon in the top-right corner
- Select "New repository"

### 1.3 Configure Repository Settings
- Repository name: Choose a descriptive name (example: "task-manager-app")
- Description: Add a brief description (optional but recommended)
- Visibility: Select "Public"
- Check the box "Add a README file" (recommended)
- Check the box "Add .gitignore"
  - From the dropdown, select "Node"
- Leave "Choose a license" as None (or select one if you prefer)

### 1.4 Create the Repository
- Click the green "Create repository" button
- You should now see your new repository page

![Github Repo Setup](repo-screenshot.png)

---

## Step 2: Clone Repository to Local Machine

### 2.1 Open the Repository in GitHub Desktop
- On your repository page, click the green "Code" button
- Select "Open with GitHub Desktop"
- Your browser may ask for permission to open GitHub Desktop - click "Allow" or "Open"

![Clone Repo](open-in-git-hub-desktop.png)

### 2.2 Choose Local Path in GitHub Desktop
- GitHub Desktop will open with a dialog box
- Choose where to save your project on your computer
  - Recommended: Create a dedicated folder for your projects (example: Documents/Projects/)
- Click "Clone"
- Wait for the cloning process to complete

![Clone Repo in GH Desktop](clone-in-gh-desktop.png)

### 2.3 Open in VS Code
- In GitHub Desktop, click "Open in Visual Studio Code" button
- OR click "Repository" menu, then "Open in Visual Studio Code"
- VS Code should open with your project folder

![Open in VS Code](open-in-vs-code.png)

---

## Step 3: Verify Git Configuration

### 3.1 Open Terminal in VS Code
- In VS Code, open the integrated terminal:
  - Mac: Press `Ctrl + ~` or go to Terminal > New Terminal
  - Windows: Press `Ctrl + ~` or go to Terminal > New Terminal

### 3.2 Check Your Current Directory
- In the terminal, type:
```bash
pwd
```

**Expected Output:** You should see the full path to your project folder
```
/Users/yourname/Documents/Projects/task-manager-app
```

### 3.3 Verify Git is Working
- In the terminal, type:
```bash
git status
```

**Expected Output:** You should see something like:
```
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean
```

If you see this message, Git is working correctly.

---

## Step 4: Update .gitignore File

### 4.1 Open .gitignore
- In VS Code, locate and open the `.gitignore` file in your project root

### 4.2 Verify Required Entries
- Check that the file includes these important entries:
  - `node_modules/` (should already be there from Node template)
  - `.env`
  - `.DS_Store` (for Mac users)

### 4.3 Add Missing Entries if Needed
- If `.env` is not in the file, add it on a new line
- If `.DS_Store` is not in the file, add it on a new line
- Save the file (Cmd+S on Mac, Ctrl+S on Windows)

---

## Step 5: Create Project Folder Structure

### 5.1 Create client Folder
- In the terminal, make sure you are in the project root directory
- Type:
```bash
mkdir client
```

### 5.2 Create server Folder
- In the terminal, type:
```bash
mkdir server
```

### 5.3 Verify Folders Were Created
- In the terminal, type:
```bash
ls
```

**Expected Output:** You should see:
```
README.md
client
server
```

You can also see these folders in the VS Code file explorer on the left side.

---

## Step 6: Commit and Push Your Changes

### 6.1 Check Git Status
- In the terminal, type:
```bash
git status
```

**Expected Output:** You should see the modified or new files listed in red

### 6.2 Stage All Changes
- In the terminal, type:
```bash
git add .
```

### 6.3 Commit Your Changes
- In the terminal, type:
```bash
git commit -m "Initialize project structure with client and server folders"
```

**Expected Output:** You should see a confirmation message about files changed

### 6.4 Push to GitHub
- In the terminal, type:
```bash
git push
```

**Expected Output:** You should see messages about pushing to the remote repository

### 6.5 Verify on GitHub
- Go back to your repository page on GitHub in your browser
- Refresh the page
- You should now see the `client/` and `server/` folders

---

## Acceptance Criteria Checklist

Check off each item as you complete it:

- [x] Repository exists on GitHub
- [x] Local clone is working on your computer
- [x] .gitignore includes `node_modules/`, `.env`, and `.DS_Store`
- [x] `client/` folder created in project root
- [x] `server/` folder created in project root
- [x] Changes committed and pushed to GitHub
- [x] `git status` shows "working tree clean"

---

## Project Structure

After completing this task, your project should look like this:

```
your-project/
├── client/         (React frontend)
├── server/         (Express backend)
├── .gitignore
└── README.md
```

---

## Next Steps

Once you have completed all the acceptance criteria, you are ready to move on to Setup Chore 2: Initialize React Frontend.

# sprint-0-setup-chore-2-initialize-react-frontend-step-by-step.md
# Chore 13: Initialize React Frontend

ESTIMATED TIME: 15-20 minutes

## Overview
In this task, you will set up a React application with Vite, install routing and HTTP client libraries, set up your chosen styling framework and icons, and create a professional folder structure.

---

## Step 1: Verify You Are in the Correct Directory

### 1.1 Open Terminal in VS Code
- Make sure VS Code is open with your project
- Open the integrated terminal (Ctrl + ~ or Terminal > New Terminal)

### 1.2 Check Current Directory
- In the terminal, type:
```bash
pwd
```

**Expected Output:** You should see the path to your project root
```
/Users/yourname/Documents/Projects/task-manager-app
```

**Important:** You should be in the project ROOT, not inside client or server folders yet.

### 1.3 Verify Folder Structure
- In the terminal, type:
```bash
ls
```

**Expected Output:** You should see:
```
README.md
client
server
```

---

## Step 2: Create React Application with Vite

### 2.1 Run Vite Create Command
- In the terminal (while still in project root), type:
```bash
npm create vite@latest client -- --template react
```

**What this does:** Creates a new React project using Vite in the client folder

**Expected Output:**
```
Scaffolding project in /path/to/project/client...

Done. Now run:

  cd client
  npm install
  npm run dev
```

### 2.2 Navigate to Client Folder
- In the terminal, type:
```bash
cd client
```

### 2.3 Install Dependencies
- In the terminal, type:
```bash
npm install
```

**What this does:** Installs all the default React dependencies

**Expected Output:**
```
added XXX packages, and audited XXX packages in XXs
```

This may take 30-60 seconds.

---

## Step 3: Install Core Dependencies

### 3.1 Install React Router and Axios
- In the terminal (in client folder), type:
```bash
npm install react-router
```

**What each package does:**
- `react-router` - Handles client-side routing (navigation between pages)

**Expected Output:**
```
added 1 package, and audited XXX packages in XXs
```

---

## Step 4: Install Styling Framework and Icons (from Planning Chore 6)

### 4.1 Install Your Chosen UI Framework
Based on your decision in Planning Chore 6, follow the installation instructions:

- **React Bootstrap:** https://react-bootstrap.github.io/docs/getting-started/introduction
  - npm install react-bootstrap bootstrap
- **Tailwind CSS:** https://tailwindcss.com/docs/guides/vite
- **DaisyUI:** https://daisyui.com/docs/install/
- **Ant Design:** https://ant.design/docs/react/introduce

**Note:** Follow the official documentation for your chosen framework. Each has specific setup steps for Vite.

### 4.2 Install Your Chosen Icon Library (if needed)
If you chose an icon library in Planning Chore 6, follow the installation instructions:

- **React Icons:** https://react-icons.github.io/react-icons/
- **Font Awesome:** https://docs.fontawesome.com/web/use-with/react/

---

## Step 5: Add Google Fonts (from Planning Chore 5)

### 5.1 Get Google Fonts Link (if using)
If you chose Google Fonts in Planning Chore 5:
- Go to https://fonts.google.com/
- Find your chosen font(s)
- Click "Select this style" for the weights you need
- Copy the `<link>` tag provided

### 5.2 Add to index.html
- In VS Code, open `client/index.html`
- Find the `<head>` section
- Paste the Google Fonts `<link>` tag before the closing `</head>` tag

Example:
```html
<head>
  <meta charset="UTF-8" />
  <link rel="icon" type="image/svg+xml" href="/vite.svg" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Vite + React</title>

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Your+Font+Name:wght@400;700&display=swap" rel="stylesheet">
</head>
```

### 5.3 Update CSS with Font Family
- Open `client/src/index.css`
- Add your font family at the top:

```css
body {
  font-family: 'Your Font Name', sans-serif;
}
```

Save the file (Cmd+S on Mac, Ctrl+S on Windows)

---

## Step 6: Create Folder Structure

### 6.1 Navigate to src Folder
- In the terminal, type:
```bash
cd src
```

### 6.2 Create Project Folders
- In the terminal, type:
```bash
mkdir components pages hooks context utils
```

**What these folders are for:**
- `components/` - Reusable UI components
- `pages/` - Route-level page components
- `hooks/` - Custom React hooks
- `context/` - React Context for state management
- `utils/` - Helper functions

### 6.3 Verify Folders Were Created
- In the terminal, type:
```bash
ls
```

**Expected Output:** You should see:
```
App.css
App.jsx
assets
components
context
hooks
index.css
main.jsx
pages
utils
```

---

## Step 7: Test Your Setup

### 7.1 Navigate Back to Client Folder
- In the terminal, type:
```bash
cd ..
```

You should now be in the client folder.

### 7.2 Start the Development Server
- In the terminal, type:
```bash
npm run dev
```

**Expected Output:**
```
  VITE v5.0.0  ready in XXX ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

### 7.3 Test in Browser
- Open your web browser
- Go to: `http://localhost:5173`

**Expected Result:** You should see the default Vite + React page with the Vite and React logos

### 7.4 Stop the Development Server
- Go back to the terminal
- Press `Ctrl + C` (works on both Mac and Windows)

**Expected Output:**
```
^C
```

The server should stop and you'll see your command prompt again.

---

## Folder Structure

After completing this task, your client folder should look like this:

```
client/
├── node_modules/
├── public/
├── src/
│   ├── components/    (Reusable UI components)
│   ├── pages/         (Route-level page components)
│   ├── hooks/         (Custom React hooks)
│   ├── context/       (React Context for state management)
│   ├── utils/         (Helper functions)
│   ├── assets/        (Images, icons, etc.)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## Acceptance Criteria Checklist

Check off each item as you complete it:

- [x] React app created successfully with Vite
- [x] react-router installed
- [x] Styling framework/library installed (from Planning Chore 6)
- [x] Icon library installed (if chosen in Planning Chore 6)
- [x] Google Fonts added (if chosen in Planning Chore 5)
- [x] All folders created (components, pages, hooks, context, utils)
- [x] App runs without errors
- [x] Default React page displays in browser at http://localhost:5173

## Next Steps

Once you have completed all the acceptance criteria, you are ready to move on to Setup Chore 3: Initialize Express Backend.

# sprint-0-setup-chore-3-initialize-express-backend-step-by-step.md
# Chore 14: Initialize Express Backend with Folder Structure

ESTIMATED TIME: 15 minutes

## Overview
In this task, you will set up an Express server, install all necessary dependencies, create the folder structure, configure environment variables, and test your server with a basic route.

---

## Step 1: Navigate to Server Folder

### 1.1 Check Current Directory
- Open terminal in VS Code
- Type:
```bash
pwd
```

**If you are in the client folder**, you will see:
```
/Users/yourname/Documents/Projects/task-manager-app/client
```

**If you are in the client folder**, you need to go back to the project root:
```bash
cd ..
```

### 1.2 Verify You Are in Project Root
- Type:
```bash
pwd
```

**Expected Output:**
```
/Users/yourname/Documents/Projects/task-manager-app
```

### 1.3 Navigate to Server Folder
- Type:
```bash
cd server
```

### 1.4 Confirm You Are in Server Folder
- Type:
```bash
pwd
```

**Expected Output:**
```
/Users/yourname/Documents/Projects/task-manager-app/server
```

The path should end with `/server`

---

## Step 2: Initialize npm Project

### 2.1 Create package.json
- In the terminal (in server folder), type:
```bash
npm init -y
```

**What this does:** Creates a `package.json` file with default settings

**Expected Output:**
```
Wrote to /path/to/project/server/package.json:

{
  "name": "server",
  "version": "1.0.0",
  ...
}
```

### 2.2 Verify package.json Was Created
- Type:
```bash
ls
```

**Expected Output:** You should see:
```
package.json
```

---

## Step 3: Install Core Backend Dependencies

### 3.1 Install Main Dependencies
- In the terminal, type:
```bash
npm install express dotenv cors bcrypt jsonwebtoken
```

**What each package does:**
- `express` - Web framework for building the server
- `dotenv` - Loads environment variables from .env file
- `cors` - Enables Cross-Origin Resource Sharing (allows frontend to talk to backend)
- `bcrypt` - Hashes passwords securely
- `jsonwebtoken` - Creates and verifies authentication tokens

**Expected Output:** Installation progress, then:
```
added XX packages, and audited XX packages in XXs
```

This may take 30-60 seconds.

---

## Step 4: Install Security Dependencies

### 4.1 Install Security Packages
- In the terminal, type:
```bash
npm install helmet express-rate-limit
```

**What each package does:**
- `helmet` - Sets secure HTTP headers
- `express-rate-limit` - Prevents brute-force attacks by limiting requests

**Expected Output:**
```
added 2 packages, and audited XX packages in XXs
```

---

## Step 5: Install Database Dependency

### 5.1 Choose Your Database
For this course, we will use MongoDB with Mongoose.

### 5.2 Install Mongoose
- In the terminal, type:
```bash
npm install mongoose
```

**What this does:** Installs Mongoose, which helps us work with MongoDB

**Expected Output:**
```
added XX packages, and audited XX packages in XXs
```

**Note:** If you want to use PostgreSQL or MySQL instead, refer to the alternative installation commands in the original chore document.

---

## Step 6: Install Development Dependencies

### 6.1 Install Nodemon
- In the terminal, type:
```bash
npm install --save-dev nodemon
```

**What this does:** Installs nodemon as a development dependency. Nodemon automatically restarts your server when you make code changes.

**Expected Output:**
```
added 1 package, and audited XX packages in XXs
```

---

## Step 7: Update package.json Scripts

### 7.1 Open package.json
- In VS Code, open `server/package.json`

### 7.2 Find the Scripts Section
- Locate the `"scripts"` section (around line 6)
- It currently looks like:
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

### 7.3 Add Start and Dev Scripts
- Replace the scripts section with:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js",
  "test": "echo \"Error: no test specified\" && exit 1"
},
```

**What these scripts do:**
- `start` - Runs the server normally (for production)
- `dev` - Runs the server with nodemon (for development)

### 7.4 Save the File
- Press Cmd+S (Mac) or Ctrl+S (Windows)

---

## Step 8: Create Folder Structure

### 8.1 Create Required Folders
- In the terminal (still in server folder), type:
```bash
mkdir models routes middleware config controllers utils
```

**What this creates:** Six folders for organizing your code
- `models/` - Database schemas/models
- `controllers/` - Business logic for routes
- `routes/` - API route handlers
- `middleware/` - Authentication, validation, error handling
- `config/` - Database connection, config files
- `utils/` - Helper functions, validators, token generators

### 8.2 Verify Folders Were Created
- Type:
```bash
ls
```

**Expected Output:**
```
config
controllers
middleware
models
node_modules
package-lock.json
package.json
routes
utils
```

---

## Step 9: Create Environment Variables File

### 9.1 Create .env File
- In the terminal, type:
```bash
touch .env
```

### 9.2 Open .env File
- In VS Code, open `server/.env`

### 9.3 Add Environment Variables
- Add the following content:
```
PORT=3001
NODE_ENV=development
DATABASE_URL=temporary_placeholder
JWT_SECRET=temporary_placeholder
```

**Important:** These are temporary placeholder values. You will update them later when you set up your actual database and authentication.

### 9.4 Save the File
- Press Cmd+S (Mac) or Ctrl+S (Windows)

---

## Step 10: Create .env.example File

### 10.1 Create .env.example File
- In the terminal, type:
```bash
touch .env.example
```

### 10.2 Open .env.example File
- In VS Code, open `server/.env.example`

### 10.3 Add Template Content
- Add the following content (notice there are NO actual values, just placeholders):
```
PORT=3001
NODE_ENV=development
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
```

**What this file is for:** This is a template showing what environment variables are needed. It gets committed to Git (unlike .env which stays private).

### 10.4 Save the File
- Press Cmd+S (Mac) or Ctrl+S (Windows)

---

## Step 11: Create server.js with Test Route

### 11.1 Create server.js File
- In the terminal, type:
```bash
touch server.js
```

### 11.2 Open server.js File
- In VS Code, open `server/server.js`

### 11.3 Add Basic Server Code
- Copy and paste the following code:

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

### 11.4 Save the File
- Press Cmd+S (Mac) or Ctrl+S (Windows)

---

## Step 12: Test Your Server

### 12.1 Start the Development Server
- In the terminal (in server folder), type:
```bash
npm run dev
```

**Expected Output:**
```
[nodemon] 3.1.11
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node server.js`
Server running on port 3001
```

If you see this, your server is running successfully!

### 12.2 Test the Route in Browser
- Open your web browser
- Go to: `http://localhost:3001/api/test`

**Expected Result:** You should see JSON output like:
```json
{
  "message": "Backend is working!"
}
```

### 12.3 Test the Route in Terminal (Alternative)
- Open a NEW terminal window (keep the server running in the first one)
- Type:
```bash
curl http://localhost:3001/api/test
```

**Expected Output:** Same JSON response as above

---

## Step 13: Stop the Development Server

### 13.1 Stop the Server
- Go back to the terminal where the server is running
- Press `Ctrl + C` (works on both Mac and Windows)

**Expected Output:**
```
[nodemon] clean exit - waiting for changes before restart
^C
```

The server should stop and you'll see your command prompt again.

---

## Acceptance Criteria Checklist

Check off each item as you complete it:

- [x] package.json created in server folder
- [x] All core dependencies installed (express, dotenv, cors, bcrypt, jsonwebtoken)
- [x] All security dependencies installed (helmet, express-rate-limit)
- [x] Database ORM installed (mongoose)
- [x] nodemon installed as dev dependency
- [x] Scripts added to package.json (start and dev)
- [x] All folders created (models, controllers, routes, middleware, config, utils)
- [x] .env file created with PORT, NODE_ENV, DATABASE_URL, JWT_SECRET
- [x] .env.example file created with template values
- [x] server.js created with test route
- [x] Server runs successfully on port 3001 (npm run dev works)
- [x] Test route returns JSON response at http://localhost:3001/api/test
- [x] Server stops correctly with Ctrl+C

## Understanding Your Server Structure

After completing this task, your server folder should look like this:

```
server/
├── node_modules/          # All installed packages
├── config/                # Configuration files (empty for now)
├── controllers/           # Business logic for routes (empty for now)
├── middleware/            # Custom middleware (empty for now)
├── models/                # Database models (empty for now)
├── routes/                # API routes (empty for now)
├── utils/                 # Helper functions (empty for now)
├── .env                   # Environment variables (SECRET - not in Git)
├── .env.example           # Environment template (safe for Git)
├── package.json           # Project configuration
├── package-lock.json      # Dependency lock file
└── server.js              # Main server file
```

---
