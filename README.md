# 🎉 College Fest Management System  
### Full-Stack Student Project
---

## 1. Introduction

### 1.1 Purpose
The purpose of this project is to design and develop a College Fest Management System that simplifies the process of managing events, registrations, and announcements in a college fest.
This project addresses the need for a centralized platform where students can easily explore and register for events, while administrators can efficiently manage fest activities.
It is developed as a Full Stack Development project, providing hands-on experience in building scalable web applications using modern technologies.

### 1.2 Target Audience
- 🎓 Students participating in college fests
- 🛠️ Admin/Organizers managing events and participants
- 💻 Developers learning full-stack application development

### 1.3 Learning Outcomes
- Full-stack development using React, Node.js, and Express.js
- MongoDB schema design using Mongoose
- REST API design and integration
- Authentication and role-based access control (RBAC)
- CRUD operations implementation
- Frontend-backend integration
- Version control using GitHub

---

## 2. System Overview

### 2.1 User Roles

| Role  | Description                                      |
|-------|--------------------------------------------------|
| Student | Registers, views events, participates |
| Admin   | Manages events, users, and announcements |


### 2.2 Core Features

- 🔐 User Authentication (Login/Register)  
- 📅 Event Management System (Create, Read, Update, Delete)  
- 📝 Event Registration System  
- 📢 Announcements Module  
- 📊 Admin Dashboard  
- 🔍 View and browse events  
- 🔒 Role-Based Access Control  
- 🔄 Dynamic updates using React 

---

## 3. High-Level Architecture

```
  [ React Frontend ]
          |
|------ REST API ------|
          |
[ Node.js + Express ]
          |
     [ MongoDB ]

```

**Key Principle:** Single backend with a dynamic frontend interface  

---

## 4. Database Design (DB-First Approach)

### 4.1 Database
- **MongoDB**
- **Mongoose ODM**

### 4.2 Collections

#### 4.2.1 users
```javascript
{
  "_id": "ObjectId",
  "name": "string",
  "email": "string",
  "password": "string",
  "role": "student | admin",
  "createdAt": "Date"
}
```
**Indexes:** 
- `email` (unique)

#### 4.2.2 Events
```json
{
  "_id": "ObjectId",
  "title": "string",
  "description": "string",
  "date": "Date",
  "time": "string",
  "venue": "string",
  "createdBy": "ObjectId",
  "createdAt": "Date"
}
```
#### 4.2.3 Registrations
```json
{
  "_id": "ObjectId",
  "userId": "ObjectId (ref Users)",
  "eventId": "ObjectId (ref Events)",
  "registeredAt": "Date"
}
```
**Indexes:**
- `userId`
- `eventId`
---
#### 4.2.4 Announcements
```json
{
  "_id": "ObjectId",
  "title": "string",
  "message": "string",
  "createdBy": "ObjectId",
  "createdAt": "Date"
}
```

## 5. Backend Design (Node.js + Express)

### 5.1 Technology Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication

### 5.2 Backend Folder Structure
```
backend/
│── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│   └── app.js
│── package.json

```

### 5.3 Authentication Flow
1. User registers or logs in
2. Credentials are validated
3. JWT token is generated
4. Protected routes require authentication
5. Role-based access is enforced

### 5.4 API Endpoints

#### Auth & User APIs
| Method | Endpoint       | Description          |
|--------|----------------|----------------------|
| POST   | /auth/register | Register user        | 
| POST   | /auth/login    | Login user           | 

#### User APIs
| Method | Endpoint       | Description              | 
|--------|----------------|--------------------------|
| GET    | /users/profile | Get profile              | 
| PUT    | /users/profile | Update celebration       |

#### Event APIs
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| GET    | /events        | Get all events        | 
| POST   | /events        | Create event (admin)  |
| PUT    | /events/:id    | Update event (admin)  |
| DELETE | /events/:id    | Delete event (admin)  |

#### Registration APIs
| Method | Endpoint          | Description              | 
|--------|-------------------|--------------------------|
| POST   | /register         | Register for event       | 
| GET    | /my-registrations | User registrations       |

#### Announcement APIs
| Method | Endpoint          | Description             | 
|--------|-------------------|-------------------------|
| GET    | /announcements    | Get announcements       |
| POST   | /announcements    | Create (admin only)     | 

### 5.5 Role-Based Access Control
- Middleware validates user role
- Admin-only routes are protected
- Students have restricted access
---

## 6. Frontend Design (React)

### 6.1 Tech Stack
- React
- React Router
- Axios (HTTP Client)

### 6.2 Folder Structure
```
src/
├── components/
├── pages/
├── context/
├── services/
└── App.jsx
```

### 6.3 Key Pages
- **Login/Register:** User authentication using secure credentials
- **Dashboard:** Displays user-specific information and quick access to features
- **Events Page:** Browse all available fest events with details
- **Event Registration:** Register for selected events
- **Announcements:** View latest updates and notifications from admin
- **Admin Dashboard:** Manage events, users, and announcements
- **Event Management (Admin):** Create, update, and delete events
- **User Management (Admin):** View and manage registered users

---
### 7. GitHub Workflow

- Version control using GitHub
- Regular commits and updates
- Organized project structure

## 8. Security Considerations

- JWT-based authentication
- Password encryption
- Role-based authorization
- Input validation

---

## 9. Future Enhancements

- 💳 Payment integration
- 📱 Responsive UI
- 📊 Analytics dashboard
- 📧 Email notifications
- 🌐 Deployment

---

## 10. Conclusion

The College Fest Management System provides a structured and efficient solution for managing fest activities digitally. It reduces manual effort, improves accessibility, and enhances the overall user experience for both students and organizers.
From a development perspective, the project demonstrates strong understanding of full-stack architecture, including frontend-backend integration, database design, authentication, and role-based control, making it a comprehensive real-world application.
