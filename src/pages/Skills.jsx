function Skills() {
  return (
    <main className="page">

      <section className="skills-section">

        <div className="section-heading">
          <p>What I work with</p>
          <h1>Skills</h1>
        </div>


        <div className="skills-main-grid">

          {/* Frontend */}

          <div className="skill-category">

            <h2>Frontend Development</h2>

            <div className="skill-list">

              <div className="skill-item">
                <span>HTML</span>
              </div>

              <div className="skill-item">
                <span>CSS</span>
              </div>

              <div className="skill-item">
                <span>JavaScript</span>
              </div>

              <div className="skill-item">
                <span>React</span>
              </div>

            </div>

          </div>


          {/* Programming & Backend */}

          <div className="skill-category">

            <h2>Programming & Backend</h2>

            <div className="skill-list">

              <div className="skill-item">
                <span>Java</span>
              </div>

              <div className="skill-item">
                <span>Python</span>
              </div>

              <div className="skill-item">
                <span>MySQL</span>
              </div>

            </div>

          </div>

        </div>


        {/* Tools */}

        <div className="skill-category tools-category">

          <h2>Tools & Technologies</h2>

          <div className="tools-list">

            <div className="skill-item">
              <span>Git</span>
            </div>

            <div className="skill-item">
              <span>GitHub</span>
            </div>

            <div className="skill-item">
              <span>VS Code</span>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Skills;