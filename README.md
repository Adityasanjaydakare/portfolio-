# Radiant DevOps Portfolio

A modern, beautiful portfolio website showcasing DevOps expertise with a solid, attractive color scheme.

## Features

- 🎨 Modern, attractive solid color scheme
- 🚀 Fully functional backend API
- ⚡ Fast React frontend with Vite
- 🎭 Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎯 Clean, professional UI

## Tech Stack

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- shadcn/ui components

### Backend
- Express.js
- Node.js
- CORS enabled

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd radiant-devops-portfolio-main
```

2. Install frontend dependencies:
```bash
npm install
```

3. Install backend dependencies:
```bash
cd server
npm install
cd ..
```

## Running the Application

### Option 1: Run Frontend and Backend Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```
Frontend will run on `http://localhost:8080`

**Terminal 2 - Backend:**
```bash
cd server
npm run dev
```
Backend will run on `http://localhost:3001`

### Option 2: Run Both Together (Windows PowerShell)
```powershell
# Start backend in background
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm run dev"

# Start frontend
npm run dev
```

## Color Scheme

The portfolio uses a modern, attractive solid color palette:

- **Primary**: Vibrant Blue (`#4A90E2`)
- **Secondary**: Rich Purple (`#9B59B6`)
- **Accent**: Electric Blue (`#3498DB`)
- **Background**: Deep Blue (`#0F172A`)
- **Cards**: Dark Blue with subtle tint (`#1E293B`)

Additional accent colors:
- Cyan, Green, Orange, Pink, Red, Indigo

## API Endpoints

The backend provides the following endpoints:

- `GET /api/health` - Health check
- `GET /api/portfolio` - Portfolio information
- `GET /api/projects` - List of projects
- `GET /api/skills` - Skills categories
- `POST /api/contact` - Contact form submission

See `server/README.md` for detailed API documentation.

## Building for Production

### Frontend
```bash
npm run build
```

### Backend
The backend runs directly with Node.js. For production, consider using PM2 or similar process managers.

## Deployment

### Frontend
The frontend can be deployed to any static hosting service (Vercel, Netlify, etc.) or served via the Dockerfile.

### Backend
Deploy the backend to any Node.js hosting service (Heroku, Railway, Render, etc.).

## Project Structure

```
radiant-devops-portfolio-main/
├── src/                 # Frontend source code
│   ├── components/     # React components
│   ├── pages/         # Page components
│   └── index.css      # Global styles with color scheme
├── server/             # Backend API server
│   ├── index.js       # Express server
│   └── package.json   # Backend dependencies
├── public/            # Static assets
└── package.json       # Frontend dependencies
```

## License

MIT
