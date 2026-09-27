function Navbar({ currentPage, setCurrentPage }) {
  const links = [
    { id: "home", label: "Home" },
    { id: "exercises", label: "Exercises" },
    { id: "planner", label: "My Plan" },
    { id: "history", label: "History" },
    { id: "calculator", label: "Calculator" }
  ];

  return (
    <nav className="navbar">
      <div
        className="logo"
        onClick={() => setCurrentPage("home")}
      >
        FIT<span>LOG</span>
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.id}
            className={currentPage === link.id ? "nav-link active" : "nav-link"}
            onClick={() => setCurrentPage(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>

      <button
        className="nav-start"
        onClick={() => setCurrentPage("exercises")}
      >
        Start Workout
      </button>
    </nav>
  );
}

export default Navbar;