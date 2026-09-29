function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h2>DevOps Lab</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main id="home" className="hero">
        <p className="tagline">BUILD • DEPLOY • REPEAT</p>

        <h1>
          Welcome to <span>DevOps Lab</span>
        </h1>

        <p className="description">
          A simple React homepage built, version-controlled with Git,
          and deployed to the web.
        </p>

        <button>Get Started</button>
      </main>

      <section id="about" className="about">
        <h2>About This Project</h2>
        <p>
          This project demonstrates a simple workflow from React development
          to GitHub and Netlify deployment.
        </p>
      </section>

      <footer id="contact">
        <p>Built with React • 2026</p>
      </footer>
    </div>
  );
}

export default App;