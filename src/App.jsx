import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Exercises from "./pages/Exercises";
import WorkoutPlanner from "./pages/WorkoutPlanner";
import WorkoutHistory from "./pages/WorkoutHistory";
import Calculator from "./pages/Calculator";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const [workout, setWorkout] = useState(() => {
    const saved = localStorage.getItem("fitlog-workout");
    return saved ? JSON.parse(saved) : [];
  });

  const [history, setHistory] = useState(() => {
    const saved = localStorage.getItem("fitlog-history");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "fitlog-workout",
      JSON.stringify(workout)
    );
  }, [workout]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-history",
      JSON.stringify(history)
    );
  }, [history]);

  function addToPlan(exercise) {
    setWorkout((previous) => [
      ...previous,
      exercise
    ]);
  }

  function removeFromPlan(index) {
    setWorkout((previous) =>
      previous.filter((_, i) => i !== index)
    );
  }

  function clearPlan() {
    setWorkout([]);
  }

  function completeWorkout() {
    if (workout.length === 0) {
      return;
    }

    const newWorkout = {
      id: Date.now(),
      name: "Workout Session",
      exerciseCount: workout.length,
      date: new Date().toISOString()
    };

    setHistory((previous) => [
      newWorkout,
      ...previous
    ]);

    setWorkout([]);
    setCurrentPage("history");
  }

  function renderPage() {
    switch (currentPage) {
      case "home":
        return (
          <Home
            setCurrentPage={setCurrentPage}
          />
        );

      case "exercises":
        return (
          <Exercises
            addToPlan={addToPlan}
          />
        );

      case "planner":
        return (
          <WorkoutPlanner
            workout={workout}
            removeFromPlan={removeFromPlan}
            clearPlan={clearPlan}
            completeWorkout={completeWorkout}
            setCurrentPage={setCurrentPage}
          />
        );

      case "history":
        return (
          <WorkoutHistory
            history={history}
          />
        );

      case "calculator":
        return <Calculator />;

      default:
        return (
          <Home
            setCurrentPage={setCurrentPage}
          />
        );
    }
  }

  return (
    <div className="app">

      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <main>
        {renderPage()}
      </main>

      <footer className="footer">
        <div>
          <strong>FITLOG</strong>
          <span>Train smarter. Build stronger.</span>
        </div>

        <p>Fitness planning made simple.</p>
      </footer>

    </div>
  );
}

export default App;
