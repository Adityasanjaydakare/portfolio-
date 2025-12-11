# PowerShell script to start both frontend and backend servers
# Run this script from the root directory: .\start-dev.ps1

Write-Host "🚀 Starting Radiant DevOps Portfolio..." -ForegroundColor Cyan
Write-Host ""

# Check if server node_modules exists
if (-not (Test-Path "server\node_modules")) {
    Write-Host "📦 Installing backend dependencies..." -ForegroundColor Yellow
    Set-Location server
    npm install
    Set-Location ..
}

# Start backend server in new window
Write-Host "🔧 Starting backend server on http://localhost:3001..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd server; npm run dev"

# Wait a moment for backend to start
Start-Sleep -Seconds 2

# Start frontend server
Write-Host "⚡ Starting frontend server on http://localhost:8080..." -ForegroundColor Green
Write-Host ""
Write-Host "✅ Both servers are starting!" -ForegroundColor Cyan
Write-Host "   Frontend: http://localhost:8080" -ForegroundColor White
Write-Host "   Backend:  http://localhost:3001" -ForegroundColor White
Write-Host ""
Write-Host "Press Ctrl+C to stop the frontend server" -ForegroundColor Yellow

npm run dev

