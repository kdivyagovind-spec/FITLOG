# FITLOG

**FITLOG** is a React-based fitness and workout planner designed to make creating and tracking workout sessions simple.

It lets users explore exercises, filter them by muscle group, difficulty, and equipment, customize sets and repetitions, build a workout plan, complete sessions, view workout history, and calculate basic fitness metrics.

## ✨ Features

- **Exercise Library** — Browse a curated set of exercises.
- **Smart Filtering** — Filter exercises by muscle group, difficulty, and equipment.
- **Workout Builder** — Select exercises and customize sets and repetitions.
- **Workout Planner** — Review, add, remove, clear, and complete exercises in a session.
- **Workout History** — Keep a record of completed workout sessions.
- **Fitness Calculator** — Calculate BMI and estimated BMR from entered details.
- **Local Persistence** — Current workout plans and workout history are stored in the browser using `localStorage`.
- **Responsive UI** — Dark, focused interface built with custom CSS.

## 🛠️ Tech Stack

- React
- Vite
- JavaScript (ES6+)
- CSS3
- Browser `localStorage`
- Supabase client setup is included for the project's database layer.

## 🧭 How It Works

### 1. Explore
Start from the exercise library and narrow the available exercises using filters.

### 2. Build
Choose an exercise, set the number of sets and repetitions, and add it to your plan.

### 3. Organize
Open **My Plan** to review your selected exercises, remove individual exercises, or clear the plan.

### 4. Track
Complete a workout session and it is added to **History** with the session date and exercise count.

### 5. Calculate
Use the **Calculator** to estimate BMI and BMR from basic inputs.

## 📁 Project Structure

```text
FITLOG/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── data/
│   │   └── exercises.js
│   ├── pages/
│   │   ├── Calculator.jsx
│   │   ├── Exercises.jsx
│   │   ├── Home.jsx
│   │   ├── WorkoutHistory.jsx
│   │   └── WorkoutPlanner.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── Supabase.js
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## 🚀 Run Locally

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/kdivyagovind-spec/FITLOG.git
cd FITLOG
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local URL shown by Vite.

### Create a production build

```bash
npm run build
```

### Run ESLint

```bash
npm run lint
```

## 📌 Project Notes

FITLOG was built as a hands-on React project to practice component-based UI development, state management, filtering, browser persistence, and multi-page application flow.

The current implementation keeps workout plans and history in browser `localStorage`. The Supabase client configuration is present in the project for the database layer but is not required for the core local workflow.

## 🔮 Possible Future Improvements

- User authentication
- Cloud-synced workout history
- Persistent user profiles
- Progress statistics and charts
- More detailed exercise information
- Workout templates
- Improved accessibility and validation

## 👩‍💻 Author

**K Divya**  
B.Tech CSE (AI & ML) student

GitHub: `https://github.com/kdivyagovind-spec`

---

**FITLOG — Train smarter. Build stronger.**
