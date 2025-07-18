# User Management Frontend

A modern React application with TypeScript for managing users.

## Features

- Display a list of users from the backend API
- Clean and responsive UI
- Error handling and loading states
- React Router for navigation
- TypeScript for type safety

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server on port 3001
npm run dev
```

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
users-frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components
│   ├── services/        # API services
│   ├── styles/          # CSS styles
│   ├── types/           # TypeScript type definitions
│   ├── App.tsx          # Application entry component
│   └── main.tsx         # Application entry point
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration
```

## Dependencies

- React - UI library
- React Router - Navigation
- Axios - HTTP client
- TypeScript - Type checking
- Vite - Build tool

## API Integration

The application communicates with a backend API at `http://localhost:3000/api/users` to fetch user data.
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

````

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
````
