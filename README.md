# College Fest Management System

A full-stack MERN application for managing college fest activities with role-based access control.

## Project Structure

```
FSD_Project531/
├── backend/          # Node.js + Express backend
├── frontend/         # React frontend
└── models/           # Database schema definitions
```

## Branches

- **main** - Complete integrated project
- **db_schema** - MongoDB schema models only
- **backend** - Backend API server
- **frontend** - React application

## Features

- JWT-based authentication
- Role-based access (Student & Admin)
- Event management (CRUD)
- Student event registration
- Announcements system
- User profile management

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

**Frontend:**
- React
- React Router
- Axios
- Context API

## Setup Instructions

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## API Endpoints

- `POST /api/v1/auth/register` - Register user
- `POST /api/v1/auth/login` - Login user
- `GET /api/v1/events` - View events
- `POST /api/v1/events` - Create event (Admin)
- `POST /api/v1/registrations` - Register for event
- `GET /api/v1/announcements` - View announcements
- `POST /api/v1/announcements` - Create announcement (Admin)

## Author

Leighna (23wh1a0531@bvrithyderabad.edu.in)