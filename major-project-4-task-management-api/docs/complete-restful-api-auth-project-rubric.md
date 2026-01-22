# Major Project #4

# Complete RESTful API with Authentication - Assessment Rubric

## Project Overview

This rubric evaluates the Complete RESTful API with Authentication project based on user authentication, JSON Web Tokens, protected routes, role-based access control, and security best practices covered in modules 095-101.

### Project Options

**Option A: Task Management API**
Build a professional task management API where users can create, read, update, and delete tasks. Implement user authentication, protected routes, and role-based access control for team collaboration. Users can manage their own tasks, while admin users can view and manage all tasks across the system.

**Option B: Recipe Sharing API**
Build a community recipe sharing API where users can create, share, and save their favorite recipes. Implement user authentication, protected routes, and role-based access control for content moderation. Users can manage their own recipes, while moderator users can review and manage community content.

---

## **Project-Specific Requirements**

### **Option A - Task Management API Must Include:**

- [x] **Task CRUD** - Full CRUD operations for tasks with title, description, status, priority, dueDate
- [x] **Task Ownership** - Tasks belong to users, users can only manage their own tasks
- [x] **Admin Dashboard** - Admin endpoint to view/manage all tasks across users
- [x] **Status Updates** - Users can update task status (pending/in-progress/completed)

---

## **Must Have (Required for Passing):**

### **Files and Structure**

- [x] **Separate Folders** - routes/, controllers/, and middleware/ folders created with organized files
- [x] **Main Entry Point** - server.js or app.js as main application file
- [x] **Package Configuration** - package.json with all required dependencies listed

### **Security and Environment**

- [x] **Environment File** - .env file for secrets (JWT_SECRET, PORT, etc.) not committed to repo
- [x] **Environment Template** - .env.example file provided showing required variables
- [x] **Git Ignore** - .gitignore includes node_modules/ and .env

### **Authentication Implementation**

- [x] **User Registration** - POST /api/auth/register endpoint that hashes passwords with bcrypt and creates new users
- [x] **User Login** - POST /api/auth/login endpoint that verifies credentials and returns JWT token
- [x] **Password Hashing** - All passwords hashed with bcrypt using minimum 10 salt rounds
- [x] **JWT Token Generation** - Generate tokens with user id, email, and role in payload with 7-30 day expiration
- [x] **Input Validation** - Validate registration/login inputs (email format, password length, required fields)

### **Protected Routes and Middleware**

- [x] **Authentication Middleware** - Middleware function that extracts and verifies JWT from Authorization header
- [x] **Token Verification** - Verify tokens using jwt.verify() and attach user data to req.user
- [x] **Protected Endpoints** - Apply auth middleware to all routes requiring login
- [x] **Role-Based Middleware** - Middleware that checks user role matches required role for route access
- [x] **Error Responses** - Return 401 for invalid tokens, 403 for insufficient permissions

### **CRUD Operations with Authorization**

- [x] **Create Resource** - POST endpoint for creating resources, authenticated users only
- [x] **Read Resources** - GET endpoints to retrieve user's own resources
- [x] **Update Resource** - PUT/PATCH endpoint, only resource owner or admin can update
- [x] **Delete Resource** - DELETE endpoint, only resource owner or admin can delete
- [x] **Ownership Verification** - Verify resource belongs to user before allowing modifications
- [x] **CORS Configuration** - Configure CORS middleware properly for API access
- [x] **Helmet.js** - Use helmet.js for security headers
- [x] **Rate Limiting** - Implement rate limiting on auth endpoints
- [x] **Error Handling** - Consistent error format with appropriate HTTP status codes

---

## **Could Have (Bonus Points):**

### **Advanced Authentication**

- [ ] Refresh Tokens - Implement refresh token system for extended sessions
- [ ] Password Reset - Implement forgot password flow with email token
- [ ] Email Verification - Send verification email during registration

### **Enhanced Features**

- [ ] Pagination - Implement pagination for list endpoints
- [ ] Search and Filtering - Add query parameters to filter resources
- [ ] API Documentation - Postman collection or documented endpoints
- [ ] Automated Tests - Unit or integration tests for key endpoints

---

## Submission Requirements

### **Technical Requirements:**

- [x] **Authentication System** - Complete user registration, login, and JWT token management
- [x] **Protected API** - All resource endpoints protected with authentication middleware
- [x] **Role-Based Access** - Admin/moderator-only routes properly secured
- [x] **Security Measures** - Helmet, CORS, rate limiting, and input validation implemented

### **Project Structure Requirements:**

```
auth-api-project/
├── server.js or app.js
├── package.json
├── .env.example
├── routes/
│   ├── auth.js
│   └── [resources].js
├── controllers/
│   ├── authController.js
│   └── [resources]Controller.js
└── middleware/
    ├── auth.js
    └── errorHandler.js
```

### **API Interface Requirements:**

- [x] **RESTful Design** - Follows REST conventions for URLs and HTTP methods
- [x] **Consistent Responses** - All endpoints return JSON with consistent structure
- [x] **HTTP Status Codes** - Proper use of 200, 201, 400, 401, 403, 404, 500
- [x] **API Documentation** - README with endpoint descriptions and testing instructions

### **Required API Endpoints:**

**Authentication Routes:**

- `POST /api/auth/register` - Create new user account
- `POST /api/auth/login` - Authenticate user and return token
- `GET /api/auth/me` - Get current user info (protected)

**Resource Routes (Tasks or Recipes):**

- `GET /api/[resource]` - Get user's resources (protected)
- `GET /api/[resource]/:id` - Get specific resource (protected)
- `POST /api/[resource]` - Create new resource (protected)
- `PUT /api/[resource]/:id` - Update resource (protected, owner only)
- `DELETE /api/[resource]/:id` - Delete resource (protected, owner only)

**Admin/Moderator Routes:**

- `GET /api/admin/[resource]` - View all resources (admin/moderator only)
- `DELETE /api/admin/[resource]/:id` - Delete any resource (admin/moderator only)

### **Code Quality Requirements:**

- [x] **MVC Architecture** - Separate routes, controllers, and middleware
- [x] **Clean Code** - Readable code with consistent naming conventions
- [x] **Error Handling** - Try-catch blocks and error middleware for all async operations
- [x] **Git Commits** - Regular commits with descriptive messages

**Due Date:** Start of Week 24 at the latest. Ideally Week 23
**Submission Method:** Github Repo link on #projects channel
