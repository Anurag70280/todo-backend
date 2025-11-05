# Todo Backend (Node.js + Express + MongoDB)

This is the backend API for the Todo web application.  
It provides endpoints for user authentication and task management using JWT authentication.

---

## Features

- User authentication (signup, login, JWT-based)
- CRUD operations for tasks
- Search and filter support for tasks
- Each user can only access their own tasks
- Secure password handling using bcrypt
- MongoDB with Mongoose for data persistence

---

## Tech Stack

- **Node.js** and **Express.js** for the server
- **MongoDB** and **Mongoose** for the database
- **JWT (JSON Web Token)** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment configuration
- **CORS** for frontend-backend communication

---

## API Endpoints

### Authentication Routes
| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| POST   | `/api/auth/signup` | Register a new user  |
| POST   | `/api/auth/login`  | Login existing user  |

### Task Routes (Protected)
| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/tasks`          | Get all tasks for the user   |
| POST   | `/api/tasks`          | Add a new task               |
| PUT    | `/api/tasks/:id`      | Update a task (title/status) |
| DELETE | `/api/tasks/:id`      | Delete a task                |

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Anurag70280/todo-backend.git
cd todo-backend
