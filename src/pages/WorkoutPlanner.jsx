function WorkoutPlanner({
  workout,
  removeFromPlan,
  clearPlan,
  completeWorkout,
  setCurrentPage
}) {
  const totalExercises = workout.length;

  return (
    <div className="page">

      <div className="page-header planner-header">
        <div>
          <p className="eyebrow">MY WORKOUT</p>
          <h1>Your plan.</h1>
          <p>
            Everything you've selected for your current workout.
          </p>
        </div>

        <div className="plan-count">
          <strong>{totalExercises}</strong>
          <span>Exercises</span>
        </div>
      </div>

      {workout.length === 0 ? (

        <div className="empty-plan">

          <div className="empty-icon">+</div>

          <h2>Your workout is empty</h2>

          <p>
            Choose exercises from the exercise library
            and build your workout.
          </p>

          <button
            className="primary-btn"
            onClick={() => setCurrentPage("exercises")}
          >
            Browse Exercises
          </button>

        </div>

      ) : (

        <>

          <div className="workout-list">

            {workout.map((exercise, index) => (

              <div
                className="workout-row"
                key={`${exercise.id}-${index}`}
              >

                <div className="workout-index">
                  {(index + 1).toString().padStart(2, "0")}
                </div>

                <div className="workout-info">
                  <h3>{exercise.name}</h3>

                  <div>
                    <span>{exercise.muscle}</span>
                    <span>{exercise.equipment}</span>
                  </div>
                </div>

                <div className="workout-sets">
                  <strong>{exercise.sets}</strong>
                  <span>sets</span>
                </div>

                <div className="workout-reps">
                  <strong>{exercise.reps}</strong>
                  <span>reps</span>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromPlan(index)}
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          <div className="planner-actions">

            <button
              className="secondary-btn"
              onClick={() => setCurrentPage("exercises")}
            >
              + Add Exercise
            </button>

            <button
              className="danger-btn"
              onClick={clearPlan}
            >
              Clear Plan
            </button>

            <button
              className="primary-btn"
              onClick={completeWorkout}
            >
              Complete Workout
            </button>

          </div>

        </>

      )}

    </div>
  );
}

export default WorkoutPlanner;