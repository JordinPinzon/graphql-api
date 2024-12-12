# GraphQL API - Node.js

This is a simple GraphQL API implemented in Node.js using Apollo Server. Provides a basic schema and resolvers for managing a list of students.

## Requirements

Before running the app, make sure you have the following installed:

- Node.js v14 or higher
- npm (Node Package Manager)
- Docker (optional, to run the application inside a container)

## Installation and Execution

### Option 1: Run Locally

#### Step 1: Clone the Repository

Clone this repository to your local machine:

```bash
https://github.com/JordinPinzon/graphql-api.git
cd graphql-api
```

#### Step 2: Install Dependencies

Run the following command to install the necessary dependencies:

```bash
npm install
```

#### Step 3: Run the Application

Start the GraphQL API server with the following command:

```bash
node app.js
```

The server will be available at `http://localhost:4000/`.

### Option 2: Run with Docker

#### Step 1: Build the Docker Image

Run the following command to build the Docker image:

```bash
docker build -t graphql-api .
```

#### Step 2: Run the Docker Container

Start a container from the created image:

```bash
docker run -p 4000:4000 graphql-api
```

The server will be available at `http://localhost:4000/`.

## GraphQL Schema
### Consultations Available

- **`students`**: Returns a list of all students.
- **`student(id: Int!)`**: Returns the details of a student by their ID.

### Student Type

```graphql
type Student {
  id: Int
  name: String
  age: Int
  roll: Boolean
}
```

## Important Files

- **`app.js`**: Contains the main logic of the Apollo server.
- **`Dockerfile`**: File used to build the Docker image of the application.
