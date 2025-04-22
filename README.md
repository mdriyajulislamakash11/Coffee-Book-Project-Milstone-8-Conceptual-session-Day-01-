# ☕ Coffee Lover - A Coffee Management Application

Live Site: [Click to Visit](https://glittery-cannoli-98cc64.netlify.app/)

## 🚀 Overview

**Coffee Lover** is a sleek and responsive web application built with React that allows users to explore various coffee types, their ratings, origins, and more. Admins can also manage the coffee list through the dashboard.

---

## ✨ Features

### ✅ Home Page
- Coffee cards with image, name, category, type, origin, rating, and popularity.
- Responsive card design with hover effect.
- Click on a card to see full details.

### ✅ Coffee Detail Page
- Displays full details of the selected coffee.
- Dynamic routing using React Router.
  
### ✅ Dashboard Page
- Lists all added coffees.
- Includes a `Delete` button to remove coffee (visible only in `/dashboard`).
- Dynamic UI based on route (e.g. Delete button shows only on dashboard).

### ✅ Routing
- React Router DOM is used to handle multiple routes like:
  - `/` for Home
  - `/coffee/:id` for Coffee Details
  - `/dashboard` for Admin View

---

## 🔧 Technologies Used

- **React** (Functional Components)
- **React Router DOM**
- **Tailwind CSS** for modern styling
- **Custom CSS utility classes**
- **Netlify** for deployment

---

## 📁 Folder Structure

