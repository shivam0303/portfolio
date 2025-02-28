import React, { useState } from "react";
import { useEffect } from "react";
// import bgimage from "./components/rose-petals.svg"
import Typewriter from "typewriter-effect";
import project1 from "./img/project-1.png";
import project2 from "./img/project-2.png";
import project3 from "./img/project-3.png";
import { isMobile } from "react-device-detect";

function App() {
  const [loading, setLoading] = useState(true);

  function handleClick() {
    let btn = document.getElementById("mobile-toggle");
    if (btn.className === "mobile-nav-active") {
      btn.setAttribute("class", "");
    } else {
      btn.setAttribute("class", "mobile-nav-active");
      // btn.setAttribute("style",'{{ width: "0%" }}')
      // btn2.setAttribute("style",'{{ width: "100%" }}')
    }
  }

  useEffect(() => {
    // simulate loading data from an API
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="App">
      <div className="intro" style={{ display: "flex" }}>
        <div
          id="mobile-toggle"
          style={{ width: isMobile ? "0%" : "20%" }}
          className=""
        >
          <i
            className="bi bi-list mobile-nav-toggle d-xl-none"
            onClick={handleClick}
          ></i>
          <header id="header" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <div className="d-flex flex-column">
              <div className="profile">
                <img
                  src="assets/profile-img.png"
                  alt=""
                  className="img-fluid rounded-circle"
                />
                <h1 className="text-light">
                  <a href="index.html">Shivam Verma</a>
                </h1>
                <div className="social-links mt-3 text-center">
                  <a href="https://github.com/shivam0303" className="facebook">
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/x.shiVam.07"
                    className="facebook"
                  >
                    <i className="bx bxl-facebook"></i>
                  </a>
                  <a
                    href="https://join.skype.com/invite/q7wqE8LcLSk2"
                    className="google-plus"
                  >
                    <i className="bx bxl-skype"></i>
                  </a>
                  <a
                    di
                    href="https://www.linkedin.com/in/shivam0303/"
                    className="linkedin"
                  >
                    <i className="bx bxl-linkedin"></i>
                  </a>
                </div>
              </div>

              <nav id="navbar" className="nav-menu navbar">
                <ul>
                  <li>
                    <a href="#hero" className="nav-link scrollto active">
                      <i className="bx bx-home"></i> <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a href="#about" className="nav-link scrollto">
                      <i className="bx bx-user"></i> <span>About</span>
                    </a>
                  </li>
                  <li>
                    <a href="#skills" className="nav-link scrollto">
                      <i className="bx bx-code-alt"></i> <span>Skills</span>
                    </a>
                  </li>
                  <li>
                    <a href="#project" className="nav-link scrollto">
                      <i className="bx bx-book-content"></i>{" "}
                      <span>Projects</span>
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="nav-link scrollto">
                      <i className="bx bx-envelope"></i> <span>Contact</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1OYBPYM01eJfgTVW4j299ZbPuORuOFjt4/view?usp=sharing"
                      className="nav-link scrollto"
                    >
                      <i className="bx bx-file-blank"></i> <span>Resume</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>

        {loading ? (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div style={{ width: isMobile ? "100%" : "80%" }}>
            <section
              id="hero"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div className="hero-container">
                <h1>Shivam Verma</h1>
                <p>
                  I'm a
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer",
                        "Associate Software Engineer",
                        "API Developer",
                        "End-to-End Developer",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </p>
              </div>
            </section>
            <hr />

            {/* ABOUT  */}

            <section id="about">
              <div className="container">
                <div className="section-title">
                  <h2>About</h2>
                  <p>
                    Associate Software Engineer at Persuit specializing in
                    full-stack development and API integration. Recent graduate
                    (2024) from IIT Jodhpur with a proven track record in
                    building scalable web applications and microservices.
                    Passionate about creating efficient, user-centric solutions
                    using modern technologies and best practices in software
                    development.
                  </p>
                </div>
              </div>
            </section>
            <hr />

            {/* SKILLS */}
            <section id="skills">
              <div className="container">
                <div className="section-title">
                  <h2>Technical Skills</h2>
                  <div
                    className="row"
                    style={{ fontSize: "16px", gap: "20px" }}
                  >
                    <div className="col-lg-12">
                      <div
                        className="skill-categories"
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "20px",
                        }}
                      >
                        <div
                          className="skill-category"
                          style={{
                            flex: "1",
                            minWidth: "250px",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            padding: "20px",
                            borderRadius: "8px",
                          }}
                        >
                          <h4
                            style={{ color: "#149ddd", marginBottom: "15px" }}
                          >
                            Core Technologies
                          </h4>
                          <ul
                            className="skill-list"
                            style={{ listStyle: "none", padding: 0 }}
                          >
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              Next.js & React.js
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              Express.js & Node.js
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              GraphQL & REST APIs
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              MongoDB, SQL & PostgreSQL
                            </li>
                          </ul>
                        </div>

                        <div
                          className="skill-category"
                          style={{
                            flex: "1",
                            minWidth: "250px",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            padding: "20px",
                            borderRadius: "8px",
                          }}
                        >
                          <h4
                            style={{ color: "#149ddd", marginBottom: "15px" }}
                          >
                            Specializations
                          </h4>
                          <ul
                            className="skill-list"
                            style={{ listStyle: "none", padding: 0 }}
                          >
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              API Design & OpenAPI Specs
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              Microservices Architecture
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              Full Stack Development
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              System Design
                            </li>
                          </ul>
                        </div>

                        <div
                          className="skill-category"
                          style={{
                            flex: "1",
                            minWidth: "250px",
                            backgroundColor: "rgba(0,0,0,0.7)",
                            padding: "20px",
                            borderRadius: "8px",
                          }}
                        >
                          <h4
                            style={{ color: "#149ddd", marginBottom: "15px" }}
                          >
                            Tools & Practices
                          </h4>
                          <ul
                            className="skill-list"
                            style={{ listStyle: "none", padding: 0 }}
                          >
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              Git & Version Control
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              CI/CD Pipelines
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              Agile Development
                            </li>
                            <li style={{ marginBottom: "10px" }}>
                              <i
                                className="bx bx-check"
                                style={{ color: "#149ddd" }}
                              ></i>{" "}
                              Testing & Documentation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr />

            {/* PROJECTS  */}

            <section id="project">
              <div className="container">
                <div className="section-title">
                  <h2>Featured Projects</h2>

                  <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          src={project3}
                          className="d-block w-100"
                          alt="bomb.money"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={project1}
                          className="d-block w-100"
                          alt="todo list"
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          src={project2}
                          className="d-block w-100"
                          alt="keeper app"
                        />
                      </div>
                    </div>
                    <button
                      className="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="prev"
                    >
                      <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                      className="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide="next"
                    >
                      <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div
                  className="container"
                  style={{ display: "flex", padding: "0px" }}
                >
                  <div
                    className="card text-white bg-dark mb-3"
                    style={{ width: "33%", marginRight: "5px" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Tailor's portfolio</h5>
                      <hr />
                      <p className="card-text" style={{ fontSize: "16px" }}>
                        Portfolio feature for tailors using React, Redux,
                        Bootstrap, and other utility functions
                      </p>
                    </div>
                  </div>

                  <div
                    className="card text-white bg-dark mb-3"
                    style={{ width: "33%", marginRight: "5px" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Bomb.money dashboard</h5>
                      <hr />
                      <p className="card-text" style={{ fontSize: "16px" }}>
                        Web3 platform created using React, material UI, and
                        integrating metamask wallet
                      </p>
                    </div>
                  </div>

                  <div
                    className="card text-white bg-dark mb-3"
                    style={{ width: "33%" }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Lens.ai user's account</h5>
                      <hr />
                      <p className="card-text" style={{ fontSize: "16px" }}>
                        Web app using React, fetching data from apis for a user
                        and providing sorting options
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </section>
            {/* <div style={{opacity:"0.5"}}>visit <a href="https://github.com/shivam0303">github</a> for code implementation</div> */}
            <hr />

            {/* CONTACT  */}

            <section id="contact">
              <div className="container">
                <div className="section-title" style={{ paddingBottom: "5%" }}>
                  <h2>Contact</h2>
                  <p>
                    Thank you for taking the time to visit my portfolio! I am
                    always open to new opportunities and would love to hear from
                    you. If you are interested in working together, or just want
                    to chat about a project or opportunity, please don't
                    hesitate to reach out. You can contact me through the
                    following channels:
                  </p>
                </div>

                <div className="row">
                  <div
                    className="col-lg-12 d-flex"
                    style={{ fontSize: "18px" }}
                  >
                    <div className="address" style={{ width: "33%" }}>
                      <i className="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <div>New Delhi, India</div>
                    </div>

                    <div className="email" style={{ width: "33%" }}>
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <div>verma.32@iitj.ac.in</div>
                    </div>

                    <div className="phone" style={{ width: "33%" }}>
                      <i className="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <div>+91 9267927226</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
