# Users API

A simple Express.js API built with TypeScript that provides mock user data.

## Features

- Express.js with TypeScript
- Fake data generation using @faker-js/faker
- CORS support for cross-origin requests
- RESTful API endpoint for fetching users
- Comprehensive test suite with Jest and Supertest

## Project Structure

```
users-api/
├── src/
│ ├── types/ # TypeScript type definitions
│ ├── services/ # Business logic (UserService)
│ ├── controllers/ # Request handlers (UserController)
│ ├── routes/ # Route definitions
│ ├── __tests__/ # Test files
│ │   ├── unit/ # Unit tests
│ │   ├── integration/ # Integration tests
│ │   └── helpers/ # Test utilities
│ ├── app.ts # Express app configuration
│ └── index.ts # Application entry point
├── package.json # Dependencies and scripts
├── tsconfig.json # TypeScript configuration
├── jest.config.js # Jest configuration
├── TESTING.md # Testing documentation
└── README.md # Documentation
```

## Getting Started

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm start
   ```

3. Access the API at:
   ```
   http://localhost:3000/api/users
   ```

## API Endpoints

- `GET /api/users` - Returns a list of 10 fake users with id, name, username, email, and role fields.

## Testing

The application includes a comprehensive test suite using Jest and Supertest:

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

For detailed information about the testing setup, please refer to [TESTING.md](./TESTING.md).

## Dependencies

- Express.js - Web framework
- TypeScript - Type support
- @faker-js/faker - Fake data generation
- CORS - Cross-Origin Resource Sharing
- ts-node-dev - TypeScript development server

# Topic to be defined

TBD
