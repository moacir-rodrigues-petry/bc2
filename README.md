<img alt="Node.js" src="https://img.shields.io/badge/Node.js-brightgreen" target="_blank"> <img alt="Express.js" src="https://img.shields.io/badge/Express.js-brightgreen" target="_blank"> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-brightgreen" target="_blank"> <img alt="React" src="https://img.shields.io/badge/React-brightgreen" target="_blank">

---

### Overview

This repo is split in a backend application and a frontend application. The backend is an Express.js API that serves user data, while the frontend is a React.js application that consumes this API and displays the data in a user-friendly format.

The **users-api** is a directory that contains the backend application, and the **users-frontend** is a directory that contains the frontend application.

### Requirements

- **Node.js**: Ensure you have Node.js installed on your machine.
- **TypeScript**: The backend and frontend applications are built using TypeScript.
- **Express.js**: The backend uses Express.js to create a RESTful API.
- **React.js**: The frontend is built using React.js.

#### Module 1

Atthach to the GitHub Copilot Agent Mode the following files to run this command below:

- `.github/instructions/root-path.instructions.md`
- `.github/instructions/backend-application.instructions.md`
- `.github/instructions/backend-structure.instructions.md`

`Create a backend API application using Express.js and TypeScript. Use the @faker-js/faker library to generate mock data and ts-node-dev to run the app. Implement a route at /api/users that responds with a JSON array of 10 fake users. Each user should have the following fields: id, name, username, email, and role. Organize the project using TypeScript best practices, including type definitions and modular structure. Use CORS middleware to allow requests from http://localhost:3001.`

##### Module 2

Atthach to the GitHub Copilot Agent Mode the following files to run this command below:

- `.github/instructions/root-path.instructions.md`
- `.github/instructions/frontend-application.instructions.md`

`Create a React.js frontend application using TypeScript that runs on port 3001 and fetches user data from http://localhost:3000/api/users. Define a User interface that reflects the backend data structure, and organize the project with a modular folder structure, including separate directories for components and types. Ensure the application includes proper error handling and loading states to deliver a smooth and reliable user experience. Use beautiful and modern CSS for styling to create a clean, responsive, and modern UI.`

---

🚨 **Note:** Facing any issues during the process, try to understand what Copilot is struggling with and provide it with the necessary context. If you are still facing issues, please reach out to the team for assistance.

---
