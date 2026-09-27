function Home({ setCurrentPage }) {
  const categories = [
    {
      title: "Full Body",
      text: "Train your entire body with balanced movements.",
      muscle: "Full Body"
    },
    {
      title: "Upper Body",
      text: "Build strength across your chest, back and arms.",
      muscle: "Upper Body"
    },
    {
      title: "Lower Body",
      text: "Train your legs and build lower-body strength.",
      muscle: "Legs"
    },
    {
      title: "Core",
      text: "Strengthen your core and improve stability.",
      muscle: "Core"
    }
  ];

  const goals = [
    "Build Muscle",
    "Lose Fat",
    "Build Strength",
    "Improve Fitness"
  ];

  return (
    <div className="home-page">

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">YOUR FITNESS. YOUR PLAN.</p>

          <h1>
            Train smarter.
            <br />
            <span>Build stronger.</span>
          </h1>

          <p className="hero-text">
            Create workouts, choose exercises based on your goals,
            track your completed sessions and keep everything organized
            in one place.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => setCurrentPage("exercises")}
            >
              Build My Workout
            </button>

            <button
              className="secondary-btn"
              onClick={() => setCurrentPage("planner")}
            >
              View My Plan
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle">
            <div className="hero-inner">
              <strong>FIT</strong>
              <span>LOG</span>
            </div>
          </div>

          <div className="floating-stat stat-one">
            <strong>18+</strong>
            <span>Exercises</span>
          </div>

          <div className="floating-stat stat-two">
            <strong>3</strong>
            <span>Difficulty levels</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">CHOOSE YOUR DIRECTION</p>
            <h2>What are you training for?</h2>
          </div>
        </div>

        <div className="goal-grid">
          {goals.map((goal) => (
            <button
              key={goal}
              className="goal-box"
              onClick={() => setCurrentPage("exercises")}
            >
              <span>{goal}</span>
              <b>→</b>
            </button>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">EXPLORE</p>
            <h2>Find your workout</h2>
          </div>

          <button
            className="text-btn"
            onClick={() => setCurrentPage("exercises")}
          >
            View all exercises →
          </button>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <div className="category-box" key={category.title}>
              <div className="category-number">0{categories.indexOf(category) + 1}</div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>

              <button
                onClick={() => setCurrentPage("exercises")}
                className="category-btn"
              >
                Explore →
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="feature-strip">
        <div>
          <span>01</span>
          <h3>Choose</h3>
          <p>Select exercises based on your muscle group, equipment and difficulty.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Build</h3>
          <p>Add exercises and customize your sets and repetitions.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Track</h3>
          <p>Complete workouts and maintain a record of your sessions.</p>
        </div>
      </section>

    </div>
  );
}

export default Home;