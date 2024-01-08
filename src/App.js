import React, { useState } from 'react';
import { useEffect } from 'react';
// import bgimage from "./components/rose-petals.svg"
import Typewriter from "typewriter-effect";
import project1 from "./img/project-1.png"
import project2 from "./img/project-2.png"
import project3 from "./img/project-3.png"
import { isMobile } from 'react-device-detect';


function App() {
  const [loading, setLoading] = useState(true);

  function handleClick() {
    let btn = document.getElementById("mobile-toggle");
    if (btn.className === "mobile-nav-active") {
      btn.setAttribute("class", "");

    }
    else {
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


      <div className='intro' style={{ display: "flex" }}>
        <div id='mobile-toggle' style={{ width: isMobile ? "0%" : "20%" }} className="">
          <i className="bi bi-list mobile-nav-toggle d-xl-none" onClick={handleClick}></i>
          <header id="header" style={{ backgroundColor: "rgba(0,0,0,0.7)" }}>
            <div className="d-flex flex-column">

              <div className="profile">
                <img src="assets/profile-img.png" alt="" className="img-fluid rounded-circle" />
                <h1 className="text-light"><a href="index.html">Shivam Verma</a></h1>
                <div className="social-links mt-3 text-center">
                  <a href="https://github.com/shivam0303" className="facebook"><i className="bx bxl-github"></i></a>
                  <a href="https://www.facebook.com/x.shiVam.07" className="facebook"><i className="bx bxl-facebook"></i></a>
                  <a href="https://join.skype.com/invite/q7wqE8LcLSk2" className="google-plus"><i className="bx bxl-skype"></i></a>
                  <a di href="https://www.linkedin.com/in/shivam0303/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                </div>
              </div>

              <nav id="navbar" className="nav-menu navbar">
                <ul>
                  <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                  <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                  <li><a href="#project" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Projects</span></a></li>
                  <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
                  <li><a href="https://drive.google.com/file/d/1OYBPYM01eJfgTVW4j299ZbPuORuOFjt4/view?usp=sharing" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
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
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
              <div className="hero-container" >
                <h1>Shivam Verma</h1>
                <p>I'm a
                  <Typewriter
                    options={{
                      strings: ['Full Stack Web Developer', 'Tech Enthusiast', 'Freelancer', 'Blockchain Developer'],
                      autoStart: true,
                      loop: true,
                    }} />
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
                    Hi! I am  a final-year B.Tech student majoring in Mechanical Engineering at IIT Jodhpur. I've diligently developed my skills as a full stack developer. I have a diverse skill set, including experience with various programming languages such as C, C++, Python, Java, JavaScript, and Motoka. I am constantly looking to expand my knowledge.
                  </p><br /><p>
                    I have diligently honed my skills in web development, and undertaken several internships to built my expertise. My experiences with working at Willings and Darzee have equipped me with a comprehensive skillset and ability to work in a team. I'm well-versed in agile development methodologies, version control using git and familiar with Web3 and blockchain technologies.
                  </p><br /><p>
                    I'm a creative problem solver, and I have a knack for thinking outside the box. I'm always on the lookout for new and efficient ways to solve problems and improve processes. I'm excited to take the next step in my career and to contribute to a company using my skills and interests. I'm looking forward to opportunities to learn and grow as a Full Stack Developer.
                  </p>
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
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={project3} className="d-block w-100" alt="bomb.money" />
                      </div>
                      <div className="carousel-item">
                        <img src={project1} className="d-block w-100" alt="todo list" />

                      </div>
                      <div className="carousel-item">
                        <img src={project2} className="d-block w-100" alt="keeper app" />

                      </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
                <div className="container" style={{ display: "flex", padding:"0px" }}>


                  <div className="card text-white bg-dark mb-3" style={{ width: "33%", marginRight: "5px" }}>
                    <div className="card-body">
                      <h5 className="card-title">Tailor's portfolio</h5>
                      <hr />
                      <p className="card-text" style={{ fontSize: "16px" }}>
                        Portfolio feature for tailors using React, Redux, Bootstrap, and other utility functions
                      </p>
                    </div>
                  </div>

                  <div className="card text-white bg-dark mb-3" style={{ width: "33%", marginRight: "5px" }}>
                    <div className="card-body">
                      <h5 className="card-title">Bomb.money dashboard</h5>
                      <hr />
                      <p className="card-text" style={{ fontSize: "16px" }}>
                        Web3 platform created using React, material UI, and integrating metamask wallet
                      </p>

                    </div>
                  </div>



                  <div className="card text-white bg-dark mb-3" style={{ width: "33%" }}>
                    <div className="card-body">
                      <h5 className="card-title">Lens.ai user's account</h5>
                      <hr />
                      <p className="card-text" style={{ fontSize: "16px" }}>
                        Web app using React, fetching data from apis for a user and providing sorting options
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
              </div>
            </section>
            {/* <div style={{opacity:"0.5"}}>visit <a href="https://github.com/shivam0303">github</a> for code implementation</div> */}
            <hr />

            {/* CONTACT  */}


            <section id='contact' >
              <div className="container">

                <div className="section-title" style={{ paddingBottom: "5%" }}>
                  <h2>Contact</h2>
                  <p>
                    Thank you for taking the time to visit my portfolio! I am always open to new opportunities and would love to hear from you. If you are interested in working together, or just want to chat about a project or opportunity, please don't hesitate to reach out.
                    You can contact me through the following channels:
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-12 d-flex" style={{fontSize: "18px" }}>


                    <div className="address" style={{ width: "33%" }}>
                      <i className="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <div>B-1 hostel, IIT JODHPUR</div>
                    </div>

                    <div className="email" style={{ width: "33%" }}>
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <div>verma.32@ iitj.ac.in</div>
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


