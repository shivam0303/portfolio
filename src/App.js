import React, { useState } from 'react';
import { useEffect } from 'react';
// import bgimage from "./components/rose-petals.svg"
import Typewriter from "typewriter-effect";
import project1 from "./img/project-1.png"
import project2 from "./img/project-2.png"
import project3 from "./img/project-3.png"
import {isMobile} from 'react-device-detect';


function App() {
  const [loading, setLoading] = useState(true);

  function handleClick(){
    let btn = document.getElementById("mobile-toggle");
    if(btn.className==="mobile-nav-active"){
      btn.setAttribute( "class", "" ); 
      
    }
    else{
      btn.setAttribute( "class", "mobile-nav-active" ); 
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
                  <li><a href="https://drive.google.com/file/d/1Raf_QtxcU4BGrH5kAvRoMJhmYQUgdTgV/view?usp=sharing" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
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
          <div style={{ width: isMobile ? "100%" : "80%"}}>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
              <div className="hero-container" >
                <h1>Shivam Verma</h1>
                <p>I'm
                  <Typewriter
                    options={{
                      strings: ['Full Stack Web Developer', 'Tech Enthusiast', 'Freelancer', 'Welcomes You'],
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
                    Hi there! My name is Shivam Verma and I am a driven and passionate software developer. I am currently a third year student studying mechanical engineering at Indian Institute of Technology, Jodhpur and I have a strong interest in frontend and backend development using MERN stack. I have a diverse skill set, including experience with various programming languages such as C, C++, Python, Java, JavaScript, and Motoka. I am constantly looking to expand my knowledge.
                  </p><br /><p>
                    I have completed several projects that demonstrate my technical skills and ability to work in a team. My notable projects include creating dashboard for bomb.money which is a web3 driven trading platform, Keeper-app, To-Do list, De-Fi app where I applied my skills to develop innovative solutions. I'm well-versed in agile development methodologies, version control using git and familiar with Web3 and blockchain technologies.
                  </p><br /><p>
                    I'm a creative problem solver, and I have a knack for thinking outside the box. I'm always on the lookout for new and efficient ways to solve problems and improve processes. I'm excited to take the next step in my career and to contribute to a company using my skills and interests. I'm looking forward to the opportunity to learn and grow as a software development intern.
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
                          <img src={project1} className="d-block w-100" alt="bomb.money" />
                        </div>
                        <div className="carousel-item">
                          <img src={project3} className="d-block w-100" alt="todo list" />
                          
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
                  <div className="container" style={{display:"flex"}}>
                    
                    <div className="card text-white bg-dark mb-3" style={{ width: "30%",marginRight:"5%" }}>
                      <div className="card-body">
                        <h5 className="card-title">BOMB.MONEY DASHBOARD</h5>
                        <hr/>
                        <p className="card-text"  style={{fontSize:"18px"}}>
                          Web3 platform created using React, material UI, and other utility functions
                        </p>
                
                      </div>
                    </div>

                    <div className="card text-white bg-dark mb-3" style={{ width: "30%",marginRight:"5%" }}>
                      <div className="card-body">
                        <h5 className="card-title">TO-DO LIST</h5>
                        <hr/>
                        <p className="card-text" style={{fontSize:"18px"}}>
                          Web application created using NodeJS, ExpressJS, React, and MongoDB
                        </p>
                      </div>
                    </div>

                    <div className="card text-white bg-dark mb-3" style={{ width: "30%" }}>
                      <div className="card-body">
                        <h5 className="card-title">KEEPER APP</h5>
                        <hr/>
                        <p className="card-text"  style={{fontSize:"18px"}}>
                          Web app using React and Bootstrap implementing CRUD operations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
    </div>
            </section>
            {/* <div style={{opacity:"0.5"}}>visit <a href="https://github.com/shivam0303">github</a> for code implementation</div> */}
            <hr/>

            {/* CONTACT  */}
            
            
            <section id='contact' >
              <div className="container">

                <div className="section-title" style={{paddingBottom:"5%"}}>
                  <h2>Contact</h2>
                  <p>
                  Thank you for taking the time to visit my portfolio! I am always open to new opportunities and would love to hear from you. If you are interested in working together, or just want to chat about a project or opportunity, please don't hesitate to reach out.
                    You can contact me through the following channels:
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-12 d-flex">


                    <div className="address" style={{ width: "33%" }}>
                      <i className="bi bi-geo-alt"></i>
                      <h4>Location:</h4>
                      <p>B-1 hostel, IIT JODHPUR</p>
                    </div>

                    <div className="email" style={{ width: "33%" }}>
                      <i className="bi bi-envelope"></i>
                      <h4>Email:</h4>
                      <p>verma.32@iitj.ac.in</p>
                    </div>

                    <div className="phone" style={{ width: "33%" }}>
                      <i className="bi bi-phone"></i>
                      <h4>Call:</h4>
                      <p>+91 9267927226</p>
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


