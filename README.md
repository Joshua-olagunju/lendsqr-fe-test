# Lendsqr Frontend Engineering Assessment

This project is a frontend implementation of the Lendsqr Admin Dashboard, built as part of the Lendsqr Frontend Engineering assessment.

The goal of this project is to replicate the provided Figma design with high visual accuracy while maintaining clean code structure, scalability, and best practices using modern frontend technologies.

---

## 🚀 Live Demo

🔗 https://<your-vercel-link>

---

## 🧰 Tech Stack

* React
* TypeScript
* Vite
* SCSS
* React Router DOM
* React Icons

---

## 📌 Features

* Login page UI
* Dashboard layout (Sidebar + Topbar)
* Users table with dynamic rendering
* Pagination with ellipsis support
* Action menu per user:

  * View Details
  * Blacklist User
  * Activate User
* User details page
* LocalStorage for user data persistence
* Responsive design (desktop, tablet, mobile)
* Mobile sidebar toggle (hamburger menu)
* Filter UI (visual implementation)

---

## 🧠 Key Implementation Decisions

### 1. Data Handling

User data is mocked and structured to simulate 500 records. This allows realistic pagination and UI behavior without relying on a live API.

### 2. State Management

Local component state was used for UI interactions such as:

* Pagination
* Dropdown actions
* Sidebar toggle
* Filter visibility

### 3. Navigation & Persistence

Selected user data is stored in `localStorage` and retrieved on the user details page to maintain state across navigation.

### 4. Pagination Logic

Pagination dynamically calculates visible pages and includes ellipsis (`...`) for better scalability with large datasets.

### 5. Component Structure

The app is broken into reusable components:

* Sidebar
* Topbar
* UsersTable
* ActionMenu

This improves maintainability and scalability.

### 6. Styling Approach

SCSS was used for modular styling with nested structures to maintain readability and consistency.

---

## 📁 Project Structure

src/
│
├── components/
│   ├── Sidebar/
│   ├── Topbar/
│   ├── UsersTable/
│
├── pages/
│   ├── Login/
│   ├── Users/
│   ├── UserDetails/
│
├── data/
├── styles/
├── utils/
└── App.tsx

---

## 📱 Responsiveness

The application is responsive across:

* Desktop
* Tablet
* Mobile

Mobile-specific improvements include:

* Collapsible sidebar
* Hidden search input
* Optimized layout spacing

---

## ⚠️ Notes

* Filter functionality is implemented as a UI component but not connected to data logic.
* Data is mocked for demonstration purposes.

---

## ▶️ Getting Started

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

---

## 👨‍💻 Author

Joshua Olagunju
Frontend Developer
