function Projects() {
  return (
    <main className="page">

      <section className="projects-section">

        <div className="section-heading">
          <p>My Work</p>
          <h1>Projects</h1>
        </div>


        <div className="projects-grid">


          {/* Portfolio Website */}

          <div className="project-card">

            <div className="project-image">
              <span>React Portfolio</span>
            </div>

            <div className="project-content">

              <h2>Personal Portfolio</h2>

              <p>
                A modern responsive portfolio website built with
                React, JavaScript and CSS to showcase my skills,
                experience and development journey.
              </p>

              <div className="project-tech">
                <span>React</span>
                <span>JavaScript</span>
                <span>CSS</span>
              </div>

              <div className="project-links">

                <a
                  href="https://github.com/deveshdadi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-button"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>


          {/* Smart Home Automation */}

          <div className="project-card">

            <div className="project-image">
              <span>Smart Home Automation</span>
            </div>

            <div className="project-content">

              <h2>Smart Home Automation</h2>

              <p>
                Arduino-based smart home automation system for
                controlling devices and improving convenience.
              </p>

              <div className="project-tech">
                <span>Arduino</span>
                <span>IoT</span>
                <span>C/C++</span>
              </div>

              <div className="project-links">

                <span className="project-button">
                  Details Coming Soon
                </span>

              </div>

            </div>

          </div>


          {/* Coming Soon */}

          <div className="project-card coming-soon">

            <div className="project-image">
              <span>Coming Soon</span>
            </div>

            <div className="project-content">

              <h2>More Projects</h2>

              <p>
                New projects will be added here as I continue
                learning and building new solutions.
              </p>

              <div className="project-links">

                <span className="project-button">
                  Future
                </span>
              </div>

            </div>

          </div>


        </div>

      </section>

    </main>
  );
}

export default Projects;
