# 🎓 LMS Web Application – Learning Management System

[![Made with MERN](https://img.shields.io/badge/Made%20with-MERN-blue)]()
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)]()
[![Cloudinary](https://img.shields.io/badge/Media-Cloudinary-orange)]()
[![Stripe](https://img.shields.io/badge/Payments-Stripe-purple)]()
[![Redux Toolkit](https://img.shields.io/badge/State%20Management-Redux%20Toolkit-red)]()

**LMS Web Application** is a full-stack MERN Learning Management System designed for both **students** and **admins**.  
Students can register, purchase courses, access video lectures, and track their progress, while admins can manage courses and lectures through a dedicated dashboard.

---

## 📌 Problem Statement

Many online learning platforms either lack **real-time progress tracking**, **secure payment integration**, or **role-based dashboards**. This leads to:

- 📝 Students unable to track progress accurately  
- 💻 Admins struggling to manage courses and lectures efficiently  
- 🔒 Payment and media handling being insecure or slow  

**Goal:** Build a scalable LMS that supports:  
- Secure authentication and role-based access  
- Course purchase with Stripe payments  
- Real-time lecture tracking  
- Video/image upload via Cloudinary  
- Responsive and intuitive UI  

---

## 🏗️ Tech Stack

**Frontend:**  
- React + Redux Toolkit + RTK Query  
- Tailwind CSS + ShadCN UI  
- Responsive design for desktop & mobile  

**Backend:**  
- Node.js + Express.js  
- MongoDB + Mongoose  
- JWT Authentication + Protected Routes  
- Cloudinary (media uploads)  
- Stripe (secure payments)  

---

## 📂 Project Structure

```text
lms-webapp/
├── server/
│   ├── controllers/      # Auth, Course, Lecture controllers
│   ├── models/           # MongoDB models (User, Course, Lecture)
│   ├── routes/           # API routes
│   ├── middleware/       # Auth, payment verification
│   └── config/           # DB, Cloudinary, Stripe setup
│
├── client/
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── features/     # Redux slices (auth, courses)
│   │   ├── pages/        # Dashboard, Courses, Lecture player, Auth
│   │   └── utils/        # API helpers, payment utils
│
├── package.json
└── README.md
```

## ⚡ Key Features

- 🔐 **Authentication & Authorization**  
  Secure login and role-based access using **JWT** and **protected routes** for students and admins.

- 🏢 **Admin Dashboard**  
  Create, edit, and manage **courses** and **lectures** with a dedicated admin interface.

- 🖼️ **Cloudinary Integration**  
  Upload **images** and **video lectures** directly to Cloudinary for efficient storage and streaming.

- 💳 **Stripe Integration**  
  Secure and seamless **payment system** for course purchases.

- 🎥 **Lecture Tracking**  
  Real-time **progress tracking** for students as they complete lectures.

- 🖥️ **Responsive UI**  
  Modern and fully responsive interface built with **ShadCN UI** and **Tailwind CSS**.

- 📊 **Role-based Access**  
  Separate dashboards for **students** and **admins**, tailored to their needs.
