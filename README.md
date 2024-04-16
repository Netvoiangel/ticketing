
# Ticketing Microservice

Ticketing is a microservice application that allows users to register, log in, and log out using a ticketing system. It utilizes the following technologies and frameworks:

## Technologies and Frameworks

- **Kubernetes**: Container orchestration platform for deploying and managing the application.
- **Docker**: Container platform for packaging and distributing the application.
- **Skaffold**: Tool for automating the development workflow, including building, pushing, and deploying the application.
- **TypeScript**: Programming language for the application.
- **React**: JavaScript library for building user interfaces.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **JSON Web Tokens (JWT)**: An open standard for securely transmitting information between parties as a JSON object.
- **Cookie-session**: Middleware for Express that stores session data in cookies.
- **Express**: Web application framework for Node.js.

## Authentication (auth) Microservice

The `auth` microservice is responsible for handling user registration, login, and logout functionality. It uses `jsonwebtoken` and `cookie-session` to manage user authentication and authorization.

### Running Tests

To run the tests for the `auth` microservice, use the following command:

```
npm run test
```

### Deploying the Application

To deploy the application using Skaffold, run the following command:

```
skaffold dev
```

This will build the Docker images, push them to a Docker registry, and deploy the application to the Kubernetes cluster.

## Testing

The following testing frameworks are used in the project:

- **Supertest**: For testing the HTTP API.
- **Jest**: JavaScript testing framework.
- **ts-jest**: TypeScript preprocessor for Jest.

## Contributing

If you would like to contribute to the Ticketing project, please follow the standard GitHub workflow:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Create a new pull request.

We welcome all contributions and appreciate your help in improving the Ticketing application.