# Lendsqr Frontend Test (React + TypeScript + Vite)

This project is a frontend implementation of the Lendsqr Admin Dashboard as part of the Lendsqr Engineering Assessment.

It focuses on building a pixel-close UI based on Figma, with reusable components, clean architecture, and responsive design.

---

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- SCSS
- React Router DOM
- React Icons

---

## 📌 Features Implemented

- Login Page UI
- Dashboard Layout (Sidebar + Topbar)
- Users Table with dynamic data rendering
- Pagination with ellipsis support
- Action Menu (View Details, Blacklist User, Activate User)
- User Details Page (via navigation + localStorage)
- Responsive design (desktop + tablet + mobile support)
- Component-based architecture

---

## 📁 Project Structure

src/
│
├── components/
│ ├── Sidebar/
│ ├── Topbar/
│ ├── UsersTable/
│  
│
├── pages/
│ ├── Login/
│ ├── Users/
│ ├── UserDetails/
│
├── data/
├── styles/
├── utils/
└── App.tsx

---

## 🧠 Key Implementation Details

- User data is currently mocked (500 records simulation ready)
- Selected user is stored using `localStorage`
- Pagination dynamically calculates pages and supports ellipsis
- Action menu opens upward or downward based on viewport space
- SCSS used for modular and maintainable styling

---

## 🎯 Assessment Focus Areas

- UI pixel accuracy to Figma
- Clean React + TypeScript structure
- Component reusability
- Pagination logic
- Responsive design
- Code readability and organization

---

## ▶️ Getting Started

### Install dependencies

```bash
npm install
Run development server
npm run dev
📦 Build for production
npm run build
👨‍💻 Author

Joshua Olagunju - Frontend Developer


---

```
