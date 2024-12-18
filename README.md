# Home Screen

The home screen component of the restaurant order management system. This application serves as the central hub for managing orders.

## Features
- Electron-based desktop application with React frontend
- Real-time order management using RTI Connext DDS
- Integration with the restaurant order system

## Setup
1. Install dependencies:
```bash
npm install

2. Start the development environment:
# Start both server and application
npm run start:all

# Or start individually:
npm run start:server  # Starts DDS server
npm run start:app     # Starts Electron app
```

## Building
```bash
# Build for current platform
npm run build

# Platform specific builds
npm run build:win    # Windows
npm run build:mac    # macOS
npm run build:linux  # Linux
```
