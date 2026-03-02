import React , { useEffect, useRef, useState } from "react";
import "./index.css";
import { FaGithub, FaCode, FaRobot, FaChartLine, FaNetworkWired, FaPaintBrush, FaCube, FaLaptopCode,   FaLinkedin, FaEnvelope, FaExternalLinkAlt, FaPython, FaDatabase, FaChartBar } from "react-icons/fa";
import { motion } from "framer-motion";

function App() {

const [status, setStatus] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);

  try {
    const response = await fetch("https://formspree.io/f/mjgepero", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("SUCCESS");
      form.reset();
    } else {
      setStatus("ERROR");
    }
  } catch (error) {
    setStatus("ERROR");
  }
};


const skillsRef = useRef(null);

const [skills, setSkills] = useState([
  { name: "Software Engineering", icon: <FaCode />, percentage: 80},
  { name: "Data Analytics", icon: <FaChartLine />, percentage: 88},
  { name: "UI/UX Design", icon: <FaLaptopCode />, percentage: 90},
  { name: "AI / ML", icon: <FaRobot />, percentage: 65},
  { name: "Frontend Development", icon: <FaCode />, percentage: 87},
  { name: "Graphic Design", icon: <FaPaintBrush />, percentage: 92},
  { name: "3D Animation", icon: <FaCube />, percentage: 78},
  { name: "Networking", icon: <FaNetworkWired />, percentage: 65}
]);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setSkills((prev) =>
          prev.map((skill) => ({
            ...skill,
            progress: skill.percentage
          }))
        );
      } else {
        setSkills((prev) =>
          prev.map((skill) => ({
            ...skill,
            progress: 0
          }))
        );
      }
    },
    { threshold: 0.3 }
  );

  const currentRef = skillsRef.current;

  if (currentRef) {
    observer.observe(currentRef);
  }

  return () => {
    if (currentRef) {
      observer.unobserve(currentRef);
    }
  };
}, []);

const certifications = [
  "Cisco Data Analytics  ",
  "Cisco Networking Essentials ",
  "Data Visualization with PromptBI ",
  "Postman API Fundamentals Student Expert",
  "Cisco Network Administration ",
  "KIEP-SKIES 3D Animation ",
  "Cisco Internet of Things (IoT) ",
];

const experience = [
  {
  title: "Data Analyst Intern",
  company: "Codveda Technologies",
  period: "February 2026 - March 2026",
  location: "Kenya",
  description:
    "Delivered data analysis and reporting solutions for small businesses and independent clients.",
  achievements: [
    "Built custom Excel and Power BI dashboards for sales and performance tracking",
    "Automated reporting workflows using Python scripts",
    "Performed data cleaning and transformation for structured reporting",
    "Provided actionable insights to support business decisions"
  ],
  tools: ["Python", "Tableau", "Power BI", "SQL"]
}
,
  {
  title: "Mount Kenya PromptBI Hackathon",
  company: "PromptBI",
  period: "November 2025",
  location: "Kenya",
  description:
    "Delivered data analysis and reporting solutions for small businesses and independent clients.",
  achievements: [
    "Built custom Excel and Power BI dashboards for sales and performance tracking",
    "Automated reporting workflows using Python scripts",
    "Performed data cleaning and transformation for structured reporting",
    "Provided actionable insights to support business decisions"
  ],
  tools: ["Python", "Tableau", "Power BI", "SQL"]
}
];

const projects = [
  {
  title: "Data Analytics",
  image: "/data.png",
  desc: "An interactive data analytics dashboard to monitor key business KPIs, performing data cleaning, transformation, and exploratory analysis using Python and SQL. Delivered actionable insights through dynamic visualizations, enabling data-driven decision-making and performance optimization.",
  skills: ["SQL", "Pandas", "Tableau", "Python", "Numpy"],
  role: "Data Analyst",
  link: "https://github.com/mwangi-kennedy/Titanic-Analysis"
},
  {
  title: "Website Development",
  image: "/web.png",
  desc: "Developed a responsive hotel website featuring room listings, booking functionality, and a photo gallery. Implemented a modern UI/UX with smooth navigation, ensuring users can easily explore services, make reservations, and contact the hotel. Optimized for both desktop and mobile devices for a seamless user experience.",
  skills: ["HTML", "CSS", "Javascript", "React"],
  role: "Frontend Developer",
  link: "https://kadeeh-luxury.vercel.app/"
},
  {
  title: "Mobile Application Development",
  image: "/app.png",
  desc: "An android AI-powered mobile application that offers \"power in the pocket\" by providing users with instant access to an AI tool designed for protest. The app features a user-friendly interface that allows users to easily navigate, including natural language processing, image recognition, and machine learning capabilities.",
  skills: ["Tensorflow", "ML Pipelines", "API Integration", "NLP", "Testing"],
  role: "Mobile Developer",
  link: "https://github.com/mwangi-kennedy/Bridgeforce"
},
  {
  title: "UI/UX Design",
  image: "/UI.png",
  desc: "Designed wireframes and high-fidelity prototypes in Figma for a multi-service tech platform, delivering a modern, scalable, and user-friendly interface for client onboarding and service navigation.",
  skills: ["Figma", "Wireframing", "Prototyping", "UI/UX Design"],
  role: "UI/UX Designer",
  link: "https://www.figma.com/design/OP5KLrUSRM8pJKJcUoSNQw/Ken-Media-UI?node-id=0-1&t=2FFSWu8liwycrm5j-1"
}
];


  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prev => prev + 1); 
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  return (
    
    <>
      <nav className="navbar">
        <div className="logo">Kennedy Mwangi</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <h1 className="hero-role">Kennedy Mwangi</h1>
          <h2 className="hero-name">Data Analyst | Exploring Networking & Building User-Focused Intelligent Software</h2>

          <div className="social-icons">
            <a href="https://github.com/mwangi-kennedy" target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kennedy-mwangi-tech/" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="mailto:kenmwangi273@gmail.com">
              <FaEnvelope />
            </a>
          </div>
          <a href="#contact" className="cv-btn"> Request My CV </a>
        </div>

        <div className="hero-right">
          <div className="hero-circle">
            <img src="/profile.png" alt="Profile" />
          </div>
          
        </div>
        
      </section>

      <section className="skills" id="skills">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => {
            const radius = 70;
            const circumference = 2 * Math.PI * radius;

            return (
              <div className="skill-card" key={index}>
                <div className="circle-wrapper">
                  <svg width="180" height="180">
                    <circle
                      className="bg"
                      cx="90"
                      cy="90"
                      r={radius}
                    />

                    <circle
                      className="progress"
                      cx="90"
                      cy="90"
                      r={radius}
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference}
                      style={{
                        "--target": circumference - (skill.percentage / 100) * circumference
                      }}
                    />
                  </svg>

                  <div className="inner-circle">
                    {skill.icon}
                  </div>
                </div>

                <h3>{skill.name}</h3>
                <span>{skill.percentage}%</span>
              </div>
            );
          })}
        </div>
      </section>

<section className="about" id="about">
  <div className="about-container">
    
    <div className="about-left">
      <div className="about-circle">
        <img
          src="/profile.png" alt="About"
        />
      </div>
    </div>

    <div className="about-right">
      <h2 className="section-title">About Me</h2>

      <p>
        I am a passionate <span>results-oriented Data Analyst and Software Engineer</span> with a background in Information Technology. Over the years, I have developed expertise in data visualization, statistical modeling, and business intelligence, transforming raw data into actionable insights that drive strategic decisions.</p>

      <p>
        Driven by curiosity and a focus on impact, I build smarter, user-centered software and leverage AI/ML to solve complex problems. My goal is to empower organizations to make data-driven decisions through clear storytelling, compelling visuals, and accurate, actionable analysis.</p>

      <p>
        I am continuously learning and exploring emerging technologies in networking, AI, and software development to create tools and solutions that not only work efficiently but also enhance the user experience. </p>

      <div className="about-highlights">
        <div>
          <h3>1+</h3>
          <span>Years Experience</span>
        </div>
        <div>
          <h3>7+</h3>
          <span>Projects Completed</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section-light certifications-section">
  <div className="certifications-container">
    <h2 className="section-title">
      <span className="icon"></span> Certifications & Training
    </h2>

    <div className="cert-grid">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="cert-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          viewport={{ once: true }}
        >
          <span className="badge">🏅</span>
          <p>{cert}</p>
        </motion.div>
      ))}
    </div>
  </div>
</section>

<section className="section-dark" id="experience">
  <h2 className="section-title">Experience</h2>

  <div className="experience-container">
    {experience.map((exp, index) => (
      <motion.div
        key={index}
        className="experience-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        viewport={{ once: true }}
      >
        <div className="experience-header">
          <div>
            <h3>{exp.title}</h3>
            <span className="company">
              {exp.company} • {exp.location}
            </span>
          </div>
          <span className="period">{exp.period}</span>
        </div>

        <p className="experience-description">{exp.description}</p>

        <ul className="experience">
          {exp.achievements?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <div className="tools-section">
          <strong>Tools & Technologies:</strong>
          <div className="tools-list">
            {exp.tools?.map((tool, i) => (
              <span key={i} className="tool-badge">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</section>

      <section className="section-light" id="projects">
        <h2 className="section-title">Featured Projects</h2>

        <div className="card-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <img src={project.image} alt={project.title} />
              <div className="project-body">
        <h3 className="project-title">{project.title}</h3>
  <p className="project-desc">{project.desc}</p>
  {project.role && (
    <p className="project-role">
      <strong>Role:</strong> {project.role}
    </p>
  )}

  {project.skills && project.skills.length > 0 && (
    <div className="project-skills">
      <strong>Skills:</strong>
      <div className="skills-badges">
        {project.skills.map((skill, i) => (
          <span key={i} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )}
  <a
    href={project.link}
    className="project-btn"
    target="_blank"
    rel="noopener noreferrer">
    View Project <FaExternalLinkAlt />
  </a>
</div>


            </motion.div>
          ))}
        </div>
      </section>

<section className="contact" id="contact">
  <div className="contact-container">
    <h2 className="section-title">Contact Me</h2>
    <p className="contact-subtitle">
      Let’s connect and build something impactful together.
    </p>

    <form className="contact-form" onSubmit={handleSubmit}>
      
      <div className="form-row">
        <input 
          type="text" 
          name="name"
          placeholder="Name" 
          required 
        />

        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          required 
        />
      </div>

      <div className="form-row">
        <input 
          type="text" 
          name="phone"
          placeholder="Phone Number" 
        />

        <select name="service" defaultValue="">
          <option value="" disabled>
            Service Of Interest
          </option>
          <option>Data Analysis</option>
          <option>Mobile Development</option>
          <option>Website Development</option>
          <option>UI/UX Design</option>
          <option>Frontend Development</option>
          <option>ML & AI</option>
          <option>IT Consultation</option>
        </select>
      </div>

      <div className="form-row">
        <input 
          type="text" 
          name="timeline"
          placeholder="Timeline" 
        />
      </div>
      <div className="form-row">
        <select name="requestCV" defaultValue="" required>
          <option value="" disabled>
            Do you want my CV?
          </option>
          <option value="Yes">Yes, send me your CV</option>
          <option value="No">No, just contacting</option>
        </select>
      </div>

      <textarea 
        name="message"
        placeholder="Project Details..." 
        rows="5"
        required
      ></textarea>

      <button type="submit" className="send-btn">
        Send
      </button>

      {status === "SUCCESS" && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Message sent successfully!
        </p>
      )}

      {status === "ERROR" && (
        <p style={{ color: "red", marginTop: "10px" }}>
          Something went wrong. Please try again.
        </p>
      )}
      
    </form>
  </div>
</section>

<footer className="footer">
  <div className="footer-links">
    <a href="#home">Home</a>
    <a href="#skills">Skills</a>
    <a href="#about">About</a>
    <a href="#experience">Experience</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  </div>

  <div className="footer-icons">
    <a href="mailto:kenmwangi273@gmail.com">
      <FaEnvelope />
    </a>

    <a href="tel:0790036399">
      📞
    </a>

    <a
      href="https://www.linkedin.com/in/kennedy-mwangi-tech/"
      target="_blank"
      rel="noreferrer"
    >
      <FaLinkedin />
    </a>
  </div>

  <div className="footer-contact">
    <p>
      <FaEnvelope /> kenmwangi273@gmail.com
    </p>
    <p>📞 0790036399</p>
  </div>

  <p className="footer-copy">
    © {new Date().getFullYear()} Kennedy Mwangi. Powered by Vercel.
  </p>
</footer>


    </>
  );
}

export default App;
