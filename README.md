# 🌱 EcoGoals - Habit Management Tracker

EcoGoals is a full-stack web application designed to help users build and maintain eco-friendly habits, featuring visual progress tracking and activity monitoring. This platform encourages sustainable living by gamifying daily actions, supporting streak maintenance, and visual habit analytics.

---

## 🔗 Live Demo

[Deployed on Vercel](https://eco-goal-platform.vercel.app/)  


---

## 📁 Folder Structure Overview
```
EcoGoal_Platform/
├── public/
│ └── loginBackground.jpg
├── src/
│ ├── assets/ # Contains green-themed images for visual appeal
│ ├── components/ # Reusable components (e.g., BottleProgressCircle)
│ ├── context/ # React Context API for global state management
│ ├── pages/ # Main application pages (Login, Dashboard, etc.)
│ ├── routes/ # App route definitions
│ ├── utils/ # Utility functions and helpers
│ ├── App.jsx # Main app structure with routing
│ ├── main.jsx # Entry point of the React app
│ ├── App.css # App-level styles
│ ├── index.css # Global styles
├── .env # Environment variables
├── vercel.json # Vercel deployment configuration
├── package.json # Project dependencies and scripts
├── vite.config.js # Vite bundler configuration
```


## 💡 Features

- 🔐 **Authentication & Authorization**
  - User login and session-based access
  - Protected routes based on login status

- 🧠 **Habit Logging & Tracking**
  - Users can add daily eco-friendly habits
  - Visual doughnut chart with a bottle-themed progress circle
  - Automatic streak maintenance and habit status updates

- 🌍 **Activity Visualization**
  - Habit completion and progress charts
  - Green-themed image assets for motivation

- ⚙️ **Modern Tech Stack**
  - **Frontend**: React, Context API, Vite
  - **Backend**: Node.js, Express, MongoDB (via hosted API)
  - **Deployment**: Vercel (frontend), Railway(backend)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/EcoGoal_Platform.git
cd EcoGoal_Platform
```
2. Install dependencies
```bash
Copy code
npm install
```
3. Run the app locally
```bash
Copy code
npm run dev
```
## 🌐 Environment Variables
Create a .env file in the root directory:

```bash
Copy code
VITE_API_BASE_URL=http://localhost:5000/api/logs
```
## 📦 Deployment
The project is configured to deploy on Vercel using vercel.json.

To deploy:

```bash
Copy code
vercel deploy
```
## 📸 UI Sneak Peek
Greenery-based UI assets from /src/assets

Responsive and clean layout

## 👩‍💻 Author
Sneha Nahak
