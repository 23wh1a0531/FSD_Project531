# Database Schema - College Fest Management System

## Collections

### 1. Users
- **name**: String (required)
- **email**: String (required, unique, indexed)
- **password**: String (required)
- **role**: String (enum: 'student', 'admin', default: 'student')
- **department**: String (required)
- **year**: Number (required)
- **timestamps**: createdAt, updatedAt

### 2. Events
- **eventName**: String (required)
- **category**: String (enum: 'Technical', 'Cultural', 'Sports', required, indexed)
- **description**: String (required)
- **date**: Date (required)
- **venue**: String (required)
- **registrationFee**: Number (default: 0)
- **createdBy**: ObjectId (ref: User, required)
- **timestamps**: createdAt, updatedAt

### 3. Registrations
- **studentId**: ObjectId (ref: User, required, indexed)
- **eventId**: ObjectId (ref: Event, required, indexed)
- **registrationDate**: Date (default: Date.now)
- **paymentStatus**: String (enum: 'Pending', 'Completed', default: 'Pending')
- **timestamps**: createdAt, updatedAt

### 4. Announcements
- **title**: String (required)
- **content**: String (required)
- **createdBy**: ObjectId (ref: User, required)
- **timestamps**: createdAt, updatedAt

## Indexes
- Users: email (unique)
- Events: category
- Registrations: studentId, eventId
