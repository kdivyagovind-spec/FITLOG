function WorkoutHistory({ history }) {
  return (
    <div className="page">

      <div className="page-header">
        <p className="eyebrow">YOUR ACTIVITY</p>
        <h1>Workout history.</h1>
        <p>
          Keep track of the workouts you've completed.
        </p>
      </div>

      {history.length === 0 ? (

        <div className="empty-plan">

          <div className="empty-icon">01</div>

          <h2>No workouts completed yet</h2>

          <p>
            Complete your first workout and it will appear here.
          </p>

        </div>

      ) : (

        <div className="history-list">

          {history.map((item) => (

            <div
              className="history-card"
              key={item.id}
            >

              <div className="history-number">
                {item.id.toString().padStart(2, "0")}
              </div>

              <div className="history-info">
                <h3>{item.name}</h3>

                <p>
                  {item.exerciseCount} exercises
                </p>
              </div>

              <div className="history-date">
                <strong>
                  {new Date(item.date).toLocaleDateString()}
                </strong>

                <span>
                  {new Date(item.date).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit"
                  })}
                </span>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default WorkoutHistory;