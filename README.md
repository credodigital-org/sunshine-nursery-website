# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# ☀️ Sunshine Nursery Website

Welcome to the **Sunshine Nursery** website project! This application was built using **React + Vite** as part of my onboarding task to implement a pixel-perfect, fully responsive web experience based on provided UI design specifications.

🚀 **[Live Demo Link](https://your-project-link.vercel.app)**  
📁 **[Figma/PDF Design Reference](Link_If_Applicable)**

---

## 🛠️ Features & Pages Implemented

- **Fully Responsive Architecture:** Pixel-perfect layouts tailored for Widescreen Monitors, Laptops, Tablets, and Mobile phones.
- **Dynamic Routing:** Seamless, fluid single-page application navigation.
- **Key Sections Included:**
  - ✨ Home (Hero section with custom optimization)
  - 🏫 About Us
  - 📚 Programs
  - 🖼️ Gallery
  - 💬 Testimonials
  - 📞 Contact Us & "Enroll Now" Call-To-Action
  - 📑 Footer

---

## 💻 Tech Stack & Tools

- **Frontend Framework:** React 
- **Build Tool:** Vite (for ultra-fast development and optimized production bundling)
- **Styling:** CSS3 / Modern Flexbox & Grid (Mobile-first responsive design)
- **Deployment:** Vercel

---

## 📂 Project Structure

```text
src/
├── assets/          # Standard images, icons, and logo placeholders
├── components/      # Reusable UI Elements (Navbar, Footer, Button, Card)
├── pages/           # Main page views (Home, About, Programs, Gallery, Contact)
├── context/         # App-wide state configurations (if applicable)
├── App.jsx          # Main application entry point & router setup
└── main.jsx         # Dom rendering configuration