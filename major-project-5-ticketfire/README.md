# TicketFire 🔥

Ticketfire is a full-stack event ticketing platform designed to help organizations create, manage, and track ticketed events with a clear focus on usability, security, and maintainable architecture.

The application is built with a React frontend and an Express.js backend, using MongoDB for persistent data storage and a clear separation of concerns between the client and server. Ticketfire supports authenticated users, multi-page navigation, and full CRUD operations around events, providing a practical foundation for scalable ticketing workflows.

On the frontend, React is used to deliver a responsive, component-driven user interface with loading and error states, reusable layout components, and form-based event creation. The UI emphasizes clarity and lean design, prioritizing core workflows over unnecessary visual complexity.

On the backend, Express provides a RESTful API responsible for authentication, authorization boundaries, and data persistence. The server layer is structured to support future expansion, including role-based access control, reporting, and additional business logic, while keeping the MVP focused and reliable.

Ticketfire was built with an MVP mindset: solving a real problem first, while deliberately documenting and deferring non-essential features. The project demonstrates practical full-stack development skills, including API design, state management, authentication flows, and clean separation of concerns between frontend and backend.

## Future Enhancements

- Customer authentication and ticket access, allowing ticket buyers to securely view their purchased tickets online.
- Role-based access control (RBAC) to support multiple user roles, including read-only access for ticket validation and elevated permissions for account owners.
- Payment processing integration to support online ticket purchases.
- Expanded reporting and analytics for event organizers.

## Project Structure

```
ticketfire/
├── client/          # Frontend React application
└── server/          # Backend Express server
```

### Tech Stack

- Frontend: React, Vite
- Backend: Node.js, Express
- Database: MongoDB
- Auth: JWT-based authentication
- Tooling: npm

## Getting Started

### Installation

1. Clone the repository and navigate to the project directory

```sh
git clone https://github.com/jacobdavidstern/fse-instructor.git
cd major-project-5-ticketfire
```

2. Install dependencies for both client and server:

```sh
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

## Running the Application

You need to run both the frontend and backend servers independently in separate terminal windows.

### Starting the Backend Server

1. Open a terminal window
2. Navigate to the server directory:
```sh
cd server
```

3. Start the server:
```sh
# For development with auto-restart
npm run dev

# Or for production mode
npm start
```

The server will run on `http://localhost:3000` (or the port specified in your .env file)

### Starting the Frontend Client

1. Open a NEW terminal window (keep the backend running)
2. Navigate to the client directory:
```sh
cd client
```

3. Start the development server:
```sh
npm run dev
```

The client will run on `http://localhost:5173` (default Vite port)

## Environment Variables

### Server (.env file)

Create a `.env` file in the server directory, or copy `.env.example` to `.env`:

```env
PORT=3001
NODE_ENV=development
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
```

## Development Workflow

1. Start the backend server first (in one terminal)
2. Start the frontend client second (in another terminal)
3. Make changes to your code - both servers will auto-reload on file changes
4. Access the application at `http://localhost:5173`

## Available Scripts

### Client

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Server

- `npm run dev` - Start server with nodemon (auto-restart)
- `npm start` - Start server in production mode
