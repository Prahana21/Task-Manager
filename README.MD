
A robust RESTful API built with *Node.js* and *Express, using **MongoDB* for data persistence. This project demonstrates clean back-end architecture, CRUD operations, and cloud database integration.

Features
- *Full CRUD Functionality*: Create, Read, Update, and Delete tasks.
- *Data Validation*: Schema-based validation using Mongoose.
- *Async/Await*: Clean asynchronous code for database operations.
- *Environment Security*: Sensitive credentials managed via Environment Variables.
- *RESTful Design*: Follows standard HTTP method conventions.

Tech Stack
- *Backend*: Node.js, Express.js
- *Database*: MongoDB Atlas (Cloud)
- *Object Modeling*: Mongoose
- *Security*: Dotenv (Environment Variable management)

 API Endpoints

| Method | Endpoint | Description |

| GET | /api/v1/tasks | Get all tasks |
| POST | /api/v1/tasks | Create a new task |
| GET | /api/v1/tasks/:id | Get a single task |
| PATCH | /api/v1/tasks/:id | Update a task |
| DELETE | /api/v1/tasks/:id | Delete a task |
