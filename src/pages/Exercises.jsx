import { useMemo, useState } from "react";
import { exercises } from "../data/exercises";

function Exercises({ addToPlan }) {
  const [muscle, setMuscle] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [equipment, setEquipment] = useState("All");
  const [selectedId, setSelectedId] = useState("");
  const [sets, setSets] = useState(3);
  const [reps, setReps] = useState(10);
  const [message, setMessage] = useState("");

  const filteredExercises = useMemo(() => {
    return exercises.filter((exercise) => {
      const muscleMatch =
        muscle === "All" ||
        exercise.muscle === muscle;

      const difficultyMatch =
        difficulty === "All" ||
        exercise.difficulty === difficulty;

      const equipmentMatch =
        equipment === "All" ||
        exercise.equipment === equipment;

      return muscleMatch && difficultyMatch && equipmentMatch;
    });
  }, [muscle, difficulty, equipment]);

  const selectedExercise =
    exercises.find((exercise) => exercise.id === Number(selectedId));

  function handleAdd() {
    if (!selectedExercise) {
      setMessage("Please select an exercise first.");
      return;
    }

    addToPlan({
      ...selectedExercise,
      sets: Number(sets),
      reps: Number(reps)
    });

    setMessage(`${selectedExercise.name} added to your plan.`);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  return (
    <div className="page">

      <div className="page-header">
        <p className="eyebrow">EXERCISE LIBRARY</p>
        <h1>Build your workout.</h1>
        <p>
          Filter exercises and choose exactly what you want to add
          to your workout plan.
        </p>
      </div>

      <div className="filter-panel">

        <div className="filter-field">
          <label>Muscle Group</label>
          <select
            value={muscle}
            onChange={(e) => {
              setMuscle(e.target.value);
              setSelectedId("");
            }}
          >
            <option>All</option>
            <option>Chest</option>
            <option>Back</option>
            <option>Shoulders</option>
            <option>Arms</option>
            <option>Legs</option>
            <option>Core</option>
            <option>Cardio</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value);
              setSelectedId("");
            }}
          >
            <option>All</option>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Equipment</label>
          <select
            value={equipment}
            onChange={(e) => {
              setEquipment(e.target.value);
              setSelectedId("");
            }}
          >
            <option>All</option>
            <option>No Equipment</option>
            <option>Dumbbells</option>
            <option>Barbell</option>
            <option>Machine</option>
            <option>Cable</option>
          </select>
        </div>

      </div>

      <div className="exercise-builder">

        <div className="exercise-selection">
          <p className="eyebrow">SELECT EXERCISE</p>

          <h2>Choose an exercise</h2>

          <select
            className="large-select"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          >
            <option value="">
              Select an exercise
            </option>

            {filteredExercises.map((exercise) => (
              <option
                key={exercise.id}
                value={exercise.id}
              >
                {exercise.name}
              </option>
            ))}
          </select>

          {selectedExercise && (
            <div className="selected-exercise">

              <div>
                <span className="tag">
                  {selectedExercise.muscle}
                </span>

                <span className="tag">
                  {selectedExercise.difficulty}
                </span>

                <span className="tag">
                  {selectedExercise.equipment}
                </span>
              </div>

              <h3>{selectedExercise.name}</h3>

              <p>{selectedExercise.description}</p>

              <div className="sets-reps">

                <div>
                  <label>Sets</label>
                  <select
                    value={sets}
                    onChange={(e) => setSets(e.target.value)}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div>
                  <label>Reps</label>
                  <select
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}
                  >
                    <option value="5">5</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                  </select>
                </div>

              </div>

              <button
                className="primary-btn full-btn"
                onClick={handleAdd}
              >
                + Add to My Plan
              </button>

              {message && (
                <p className="success-message">
                  {message}
                </p>
              )}

            </div>
          )}

          {!selectedExercise && (
            <div className="empty-selection">
              <div className="selection-icon">+</div>
              <p>Select an exercise to see its details.</p>
            </div>
          )}

        </div>

        <div className="exercise-count">
          <span>{filteredExercises.length}</span>
          <p>Exercises available</p>
          <small>
            Use the filters above to narrow down your choices.
          </small>
        </div>

      </div>

    </div>
  );
}

export default Exercises;