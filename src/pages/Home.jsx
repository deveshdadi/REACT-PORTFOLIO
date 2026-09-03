import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";

function Home() {

  const roles = [
    "Full Stack Developer",
    "AI Engineer"
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {

    const currentRole = roles[roleIndex];

    let speed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      speed = 1500;
    }

    if (isDeleting && displayText === "") {

      setIsDeleting(false);

      setRoleIndex(
        (prev) => (prev + 1) % roles.length
      );

      return;
    }

    const timer = setTimeout(() => {

      if (isDeleting) {

        setDisplayText(
          currentRole.substring(
            0,
            displayText.length - 1
          )
        );

      } else {

        setDisplayText(
          currentRole.substring(
            0,
            displayText.length + 1
          )
        );

      }

    }, speed);


    return () => clearTimeout(timer);

  }, [displayText, isDeleting, roleIndex]);


  return (
    <main className="home">

      <section className="hero">


        {/* LEFT SIDE */}

        <div className="hero-content">

          <p className="greeting">
            Hi, I'm
          </p>

          <h1>
            Devesh Dadi
          </h1>


          {/* Typing Animation */}

          <div className="role-container">

            <span className="typing-role">
              {displayText}
            </span>

            <span className="cursor">
              |
            </span>

          </div>


          {/* Description */}

          <p className="hero-description">
            I build modern web applications and intelligent
            solutions using technologies that solve
            real-world problems.
          </p>


          {/* Buttons */}

          <div className="hero-buttons">

            <Link
              to="/projects"
              className="primary-button"
            >
              View My Projects
              <span>→</span>
            </Link>


           <a
  href="https://drive.google.com/file/d/1Sq5ZZYrMVfGS3LJfh_yBCVYy7K7bHhZH/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  className="secondary-button"
>
  View My Resume
  <span>↗</span>
</a>

          </div>


          {/* SOCIAL LINKS */}

          <div className="social-links">

            {/* GitHub */}

            <a
              href="https://github.com/deveshdadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>


            {/* LinkedIn */}

            <a
              href="https://www.linkedin.com/in/devesh-dadi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>


            {/* Instagram */}

            <a
              href="https://www.instagram.com/deveshdadi_/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>


            {/* Email */}

            <a
              href="mailto:ddeveshdadi@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE - PROFILE */}

        <div className="hero-image-container">

          <div className="glow-circle"></div>

          <div className="profile-image">

            <img
              src="/profile.png"
              alt="Devesh Dadi"
            />

          </div>

        </div>

      </section>

    </main>
  );
}

export default Home;