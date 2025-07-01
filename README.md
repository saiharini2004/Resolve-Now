# 🛠️ ResolveNow: Your Platform for Online Complaints

ResolveNow is a full-stack web application that streamlines the process of lodging, tracking, and resolving complaints online. It offers a modern interface for users, agents, and admins, built with the MERN stack and powered by real-time features.

## 🚀 Demo
🎥 Watch the full video demo here: ➡️ [📂 View Demo on Google Drive](https://drive.google.com/file/d/1G2cTf2BuxorpKTX_ecIaIy-bQIfHEkAd/view?usp=sharing)

🔗 **Source Code**: ➡️ [GitHub Repository](https://github.com/saiharini2004/Resolve-Now)

## 📚 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Installation](#-installation)
- [Application Flow](#-application-flow)
- [Database](#-database-schema)
- [Architecture](#-architecture-overview)
- [Demo Highlights](#-demo-highlights)

## ✅ Features
### 👤 User
- Register & Login
- Submit complaints with attachments
- Track complaint status in real time
- Chat with the assigned agent
- Manage profile

### 🧑‍💼 Agent
- View assigned complaints
- Update complaint status
- Communicate with users

### 👨‍💼 Admin
- Assign complaints to agents
- Monitor user and agent activity
- Manage platform data and policies

## 🧰 Tech Stack

| Layer       | Technology                               |
|------------|-------------------------------------------|
| Frontend    | React.js, Bootstrap, Material UI, AOS     |
| Backend     | Node.js, Express.js                       |
| Database    | MongoDB, Mongoose                         |
| Real-time   | Socket.io, WebRTC (planned)               |
| Versioning  | Git, GitHub                               |

## 🛠️ Getting Started
### 📦 Prerequisites
- Node.js & npm
- MongoDB
- Git

## 🧑‍💻 Installation

```bash
git clone https://github.com/saiharini2004/Resolve-Now.git

# Backend
cd backend
npm install
npm start

# Frontend
cd ../frontend
npm install
npm start

```

## 🔄 Application Flow

👥 Customer:
- Register/Login
- Submit complaint
- Track status
- Chat with agent
- View updates

🧑‍💼 Agent:
- Login
- View assigned complaints
- Chat with users
- Update status

👨‍💼 Admin:
- Monitor all complaints
- Assign complaints
- Manage users & agents



## 🧾 Database Schema


🧍 User Schema:
name, email, password, phone, userType

📮 Complaint Schema:
userId, name, address, city, comment, status

📌 Assigned Complaint Schema:
agentId, complaintId, status

💬 Message Schema:
name, message, complaintId

📷 ER Diagram is available in the /database/ER-Diagram.jpg


## 🏗️ Architecture Overview


- Frontend: React + Axios for API calls
- Backend: Express.js handles routes & logic
- Database: MongoDB with Mongoose ODM
- Real-Time: Socket.io + WebRTC (upcoming)
- Architecture: Client-server architecture with RESTful APIs


## 🎯 Demo Highlights


✔️ Full authentication system  
✔️ Dynamic complaint submission & status tracking  
✔️ Real-time agent interaction (coming soon)  
✔️ Admin dashboard for complaint routing  
✔️ Clean UI with animations and responsive design




