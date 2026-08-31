function Contact() {
  return (
    <main className="page">

      <section className="contact-section">

        <div className="section-heading">
          <p>Get in touch</p>
          <h1>Contact me</h1>
        </div>

        <div className="contact-content">

          <div className="contact-text">

            <h2>Let's Connect</h2>

            <p>
              I'm always open to discussing new projects,
              opportunities, and interesting ideas.
            </p>

            <p>
              Whether you have a project in mind or simply
              want to connect, feel free to reach out.
            </p>

          </div>


          <div className="contact-links">

            {/* Gmail */}

            <a
              href="mailto:ddeveshdadi@gmail.com"
              className="contact-card"
            >
              <span className="contact-icon">✉</span>

              <div>
                <h3>Email</h3>
                <p>ddeveshdadi@gmail.com</p>
              </div>
            </a>


            {/* GitHub */}

            <a
              href="https://github.com/deveshdadi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">◉</span>

              <div>
                <h3>GitHub</h3>
                <p>github.com/deveshdadi</p>
              </div>
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/devesh-dadi"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <span className="contact-icon">in</span>

              <div>
                <h3>LinkedIn</h3>
                <p>linkedin.com/in/devesh-dadi</p>
              </div>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;