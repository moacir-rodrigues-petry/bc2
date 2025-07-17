<img alt="Node.js" src="https://img.shields.io/badge/Node.js-brightgreen" target="_blank"> <img alt="Express.js" src="https://img.shields.io/badge/Express.js-brightgreen" target="_blank"> <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-brightgreen" target="_blank"> <img alt="React" src="https://img.shields.io/badge/React-brightgreen" target="_blank">

---

### Overview

This repo is split in a backend application and a frontend application. The backend is an Express.js API that serves user data, while the frontend is a React.js application that consumes this API and displays the data in a user-friendly format.

The **users-api** is a directory that contains the backend application, and the **users-frontend** is a directory that contains the frontend application.

> ⚠️ **Note:** The **users-api** and **users-frontend** directories do not exist yet. You will create these directories as you follow the steps outlined in the module instructions below.

### Requirements

- **Node.js**: Ensure you have Node.js installed on your machine.
- **TypeScript**: The backend and frontend applications are built using TypeScript.
- **Express.js**: The backend uses Express.js to create a RESTful API.
- **React.js**: The frontend is built using React.js.

---

#### Module 1 - create a backend API application

Atthach to the GitHub Copilot Agent Mode the following files to run this command below:

- `.github/instructions/root-path.instructions.md`
- `.github/instructions/backend-application.instructions.md`
- `.github/instructions/backend-structure.instructions.md`

`Create a backend API application using Express.js and TypeScript. Use the @faker-js/faker library to generate mock data and ts-node-dev to run the app. Implement a route at /api/users that responds with a JSON array of 10 fake users. Each user should have the following fields: id, name, username, email, and role. Organize the project using TypeScript best practices, including type definitions and modular structure. Use CORS middleware to allow requests from http://localhost:3001.`

---

##### Module 2 - create a frontend application

Atthach to the GitHub Copilot Agent Mode the following files to run this command below:

- `.github/instructions/root-path.instructions.md`
- `.github/instructions/frontend-application.instructions.md`

`Create a React.js frontend application using TypeScript that runs on port 3001 and fetches user data from http://localhost:3000/api/users. Define a User interface that reflects the backend data structure, and organize the project with a modular folder structure, including separate directories for components and types. Ensure the application includes proper error handling and loading states to deliver a smooth and reliable user experience. Use beautiful and modern CSS for styling to create a clean, responsive, and modern UI.`

---

#### Getting Help

🚨 **Note:** If you encounter any issues during the setup or development process, first review the instructions and ensure all required files are attached to the Copilot Agent Mode. If Copilot is not providing the expected results, try to clarify your request or provide additional context. For persistent problems, don't hesitate to reach out to the team for support.

---

##### Module 3 - Implementing Automated Test Coverage

TBD

##### Module 4 - Implementing GitHub Actions

TBD
