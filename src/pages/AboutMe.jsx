import './AboutMe.css';


function AboutMe(){
    return(
        <section className = "about-hero">
            <div className = "about-sign">
                <span> About Me </span>
            </div>

            <div className = "about-main">
                <div className = "about-info">
                    <h3> hi, im navini!</h3>
                    <p> I am currently in my Penultimate year of Software Engineering at the University of Auckland, with experience in Web design/development, quality assurance testing and app development. I really enjoy learning new things and aquiring new skills, as well as any chance to exercise my problem solving skills!
                        </p>
                        <p> Outside of Software Engineering, I am a member of the Orbital Operations team, at the Auckland Programme of Space Systems (APSS). I am an avid reader (I really enjoy fantasy and mystery), and I really enjoy exploring new places</p>
                        <p> I am always available to say hello! </p>
            <div className="about-icons-wrapper">
            <a href="mailto:email@gmail.com" className="about-icons" aria-label="Email">
              <i className="fa-solid fa-envelope"></i>
            </a>
            <a href="https://www.linkedin.com/in/navini-ariyasinghe-173349223/" className="about-icons" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
            </div>
            </div>
        </section>
        )
    }

export default AboutMe;