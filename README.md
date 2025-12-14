# Unified GSAP Animation Collection

A premium collection of high-performance web animations and interactive components built with **GSAP**, **Lenis Smooth Scroll**, and **Vite**. This project unifies multiple animation demos into a single, cohesive single-page application experience with seamless navigation.

## 🚀 Features

- **Unified Landing Page**: A sleek, minimal entry point with a dynamic glassmorphic navbar.
- **Shared Navigation**: Custom-built, floating glassmorphism navbar that persists across different demos.
- **Marquee Animation**: A continuous, infinite scrolling marquee effect featuring dark-themed illustrations.
- **Grid Card Spotlight**: An interactive grid layout with cursor-tracking spotlight effects and scroll-triggered animations.
- **Smooth Scrolling**: Integrated **Lenis** for buttery smooth scroll experiences across all pages.
- **Performance Optimized**: Powered by **Vite** for lightning-fast HMR and production builds.

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla JavaScript, CSS3
- **Animation**: [GSAP (GreenSock Animation Platform)](https://gsap.com/) & ScrollTrigger
- **Scrolling**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Bundler**: [Vite](https://vitejs.dev/)

## 📂 Project Structure

```
GsapAnimation/
├── index.html              # Main Landing Page
├── package.json            # Dependencies and scripts
├── vite.config.js          # Vite configuration for multi-page setup
├── src/
│   ├── shared/             # Shared components (Navbar)
│   ├── marquee/            # Marquee Animation Demo
│   └── gridcard/           # Grid Card Animation Demo
└── assets/                 # Global assets (images, fonts)
```

## ⚡ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samjoshua2002/GSAP.git
   cd GSAP
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Design Philosophy

The project follows a "dark mode" aesthetic with high contrast, subtle gradients, and premium motion design principles. The goal is to create a "wow" factor through fluid interactivity and refined visual polish.

## 📄 License

This project is licensed under the ISC License.
