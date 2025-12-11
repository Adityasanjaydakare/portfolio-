# Backend API Server

Express.js backend server for the Radiant DevOps Portfolio.

## Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

## Running the Server

### Development Mode (with auto-reload):
```bash
npm run dev
```

### Production Mode:
```bash
npm start
```

The server will start on `http://localhost:3001` by default.

## API Endpoints

### Health Check
- **GET** `/api/health`
  - Returns server status and timestamp

### Portfolio Data
- **GET** `/api/portfolio`
  - Returns portfolio owner information

### Projects
- **GET** `/api/projects`
  - Returns list of all projects

### Skills
- **GET** `/api/skills`
  - Returns skills categories

### Contact Form
- **POST** `/api/contact`
  - Body: `{ name: string, email: string, message: string }`
  - Returns success confirmation

## Environment Variables

- `PORT` - Server port (default: 3001)

## CORS

The server is configured to accept requests from any origin. In production, you should configure CORS to only allow requests from your frontend domain.

