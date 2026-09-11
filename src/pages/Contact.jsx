import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("sending");

    emailjs
      .sendForm(
        "service_c5b9mwl",
        "template_huu5g6s",
        form.current,
        {
          publicKey: "kV6H9v4UQwmrM2ZgO",
        }
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setStatus("error");
        }
      );
  };

  return (
    <main className="page">

      <section className="contact-section">

        <div className="section-heading">
          <p>Get in touch</p>
          <h1>Contact Me</h1>
        </div>

        <div className="contact-content">

          {/* LEFT SIDE */}

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

            <div className="contact-links">

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


          {/* RIGHT SIDE - CONTACT FORM */}

          <div className="contact-form-container">

            <form ref={form} onSubmit={sendEmail} className="contact-form">

              <div className="form-group">
                <label htmlFor="name">
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="email">
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  required
                />
              </div>


              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Write your message..."
                  required
                ></textarea>
              </div>


              <button
                type="submit"
                className="send-button"
                disabled={status === "sending"}
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}

                {status !== "sending" && (
                  <span>→</span>
                )}
              </button>


              {status === "success" && (
                <p className="form-success">
                  Message sent successfully! Thank you for reaching out.
                </p>
              )}


              {status === "error" && (
                <p className="form-error">
                  Something went wrong. Please try again.
                </p>
              )}

            </form>

          </div>

        </div>

      </section>

    </main>
  );
}

export default Contact;