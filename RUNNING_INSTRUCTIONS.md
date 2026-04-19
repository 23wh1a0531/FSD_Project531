# College Fest Management System - Running Instructions

## Prerequisites

### 1. MongoDB Setup
You need MongoDB running. Choose one option:

**Option A: Install MongoDB locally**
```bash
# Ubuntu/Debian
sudo apt-get install mongodb

# Start MongoDB
sudo systemctl start mongod
```

**Option B: Use MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free account
3. Create cluster
4. Get connection string
5. Update `backend/.env` with your connection string

### 2. Backend Setup

```bash
cd backend
npm install
# Edit .env file with your MongoDB URI
npm start
```

Backend will run on: http://localhost:5000

### 3. Frontend Setup

Open a new terminal:
```bash
cd frontend
npm install
npm start
```

Frontend will run on: http://localhost:3000

## Current Status

✅ Dependencies installed:
- Backend: 141 packages installed
- Frontend: 1304 packages installed

✅ Configuration:
- Backend .env created
- Default MongoDB URI: mongodb://localhost:27017/college_fest

⚠️ MongoDB Required:
- Install MongoDB locally OR
- Use MongoDB Atlas cloud database

## Testing the Application

1. Start backend server (needs MongoDB)
2. Start frontend server
3. Open browser: http://localhost:3000
4. Register a new user
5. Login and test features

## API Endpoints Available

- POST /api/v1/auth/register - Register user
- POST /api/v1/auth/login - Login user
- GET /api/v1/events - View events
- POST /api/v1/events - Create event (Admin)
- POST /api/v1/registrations - Register for event
- GET /api/v1/announcements - View announcements

## Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check MONGO_URI in backend/.env

**Port Already in Use:**
- Backend: Change PORT in .env
- Frontend: It will prompt for different port

**Module Not Found:**
- Run `npm install` in respective directory
