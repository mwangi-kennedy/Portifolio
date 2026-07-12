import React , { useEffect, useRef, useState } from "react";
import "./index.css";
import { FaGithub,FaCode,FaRobot,FaChartLine,FaNetworkWired,FaPaintBrush,FaCube,FaLaptopCode,FaLinkedin,FaEnvelope,FaExternalLinkAlt,FaPython,FaDatabase,FaChartBar,FaWhatsapp,FaTwitter} from "react-icons/fa";
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
  { name: "AI / ML", icon: <FaRobot />, percentage: 85, description: "Machine Learning Models, Data Science, Python, Predictive Analytics & AI Integration" },
  { name: "Data Engineering", icon: <FaChartLine />, percentage: 80, description: "Data Cleaning, Visualization, Dashboard Development, Business Intelligence, Tableau, SQL, Python, Power BI & Excel" },
  { name: "UI/UX Design", icon: <FaLaptopCode />, percentage: 77, description: "Wireframing, Prototyping, User Research, Figma & User-Centered Design Principles" },
  { name: "Software Engineering", icon: <FaCode />, percentage: 75, description: "Mobile & Web Application Development, REST APIs, Database Design & System Architecture" },
  { name: "Graphic Design", icon: <FaPaintBrush />, percentage: 70, description: "Brand Identity, Visual Communication, Typography, Illustrations & Digital Media Design" },
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
  "AWS AI Practitioner Challenge ",
  "Google Sheets for Data Analysis by Google Cloud ",
  "Cisco Internet of Things (IoT) ",
];

const testimonials = [
  {
    name: "Patrick N. Gitonga",
    role: "Head of Department",
    company: "DeKUT Film, Animation and Gaming Hub",
    text: "Mr. Kiruri completed his industrial attachment at the DeKUT Film Hub, gaining hands-on experience in digital media production and animation. He demonstrated strong teamwork, effective communication, and contributed valuable ideas during projects. Beyond his technical abilities, he proved disciplined, respectful, and reliable, with integrity and a strong willingness to learn. Based on his skills, character, and work ethic, I confidently recommend Mr. Kiruri for professional, academic, or training opportunities where he can continue to grow and contribute meaningfully.",
  },
  {
    name: "Madam Liz Wahome",
    role: "Guild Code Community Lead",
    company: "Guild Code",
    text: "Kennedy is a natural leader with a strong ability to inspire and guide teams towards achieving common goals. He possesses excellent communication skills, fostering collaboration and creating a positive team environment. Kennedy's leadership style is inclusive and empowering, allowing team members to thrive and contribute their best work. He consistently demonstrates integrity, accountability, and a commitment to excellence in his leadership approach.",
    image: "/testimonial2.jpg"
  },
  {
    name: "Alex N. Mwangi",
    role: "MUKUSA Chairperson",
    company: "Murang'a Kimathi University Students Association",
    text: "A highly motivated professional with strong problem-solving skills. As a Graphic Designer, Kennedy consistently delivered high-quality work, respected deadlines, and collaborated effectively with team members. Later, as Treasurer of the Association, he demonstrated trustworthiness, strong leadership, effective communication, and integrity in managing responsibilities.",
    image: "/testimonial3.jpg"
  }
];

const experience = [
  {
  title: "Team Lead - Climate-Tech Team",
  company: "Guild Code Community",
  period: "March 2026 - May 2026",
  location: "Remote, Kenya",
  description:
    "Lead a multidiscplinary team in the design and development of a digital climate-tech solution aimed at addressing climate challenges in Africa through data-driven insights and modern web technologies.",
  achievements: [
    "Led a 7-member cross-functional team through the full product development lifecycle from problem discovery to MVP development.",
    "Coordinated research to identify real climate challenges and data sources relevant to African communities.",
    "Designed the system architecture and guided integration between frontend interfaces and backend services.",
    "Facilitated weekly planning meetings and milestone tracking to ensure steady progress across the project timeline.",
    "Collaborated with developers and designers to build a functional climate-tech digital product."
  ],
  tools: ["Project Leadership", "Team Coordination", "Collaboration", "Data-Driven Decision Making", "Version Control", "Data Analysis"]
  },
  {
  "title": "AI Coding Trainer (Volunteer)",
  "company": "International Olympiad in Artificial Intelligence (IOAI)",
  "period": "April 2026",
  "location": "Kazakhstan (Remote)",
  "description": "Volunteered to train international students competing in the global artificial intelligence olympiad.",
  "achievements": [
    "Designed a comprehensive training curriculum to teach image classification from scratch.",
    "Developed production-ready codebase and materials for online instructional sessions.",
    "Mentored students in Kazakhstan on core computer vision architectures and machine learning pipelines."
  ],
  "tools": ["Python", "Computer Vision", "Deep Learning", "Image Classification"]
},
  {
  title: "Data Analyst Intern",
  company: "Codveda Technologies",
  period: "February 2026 - March 2026",
  location: "Kenya",
  description:
    "Delivered data analysis and reporting solutions for small businesses and independent clients.",
  achievements: [
    "Built custom Excel and Power BI dashboards for sales and performance tracking.",
    "Automated reporting workflows using Python scripts.",
    "Performed data cleaning and transformation for structured reporting.",
    "Provided actionable insights to support business decisions."
  ],
  tools: ["Data Visualization", "Tableau", "Power BI", "SQL"]
}
,
  {
  title: "Mount Kenya PromptBI Hackathon",
  company: "PromptBI",
  period: "November 2025",
  location: "Kenya",
  description:
    "Analyzed business data and delivered structured reports to help small businesses and independent clients improve performance and make informed decisions.",
  achievements: [
    "Developed interactive dashboards in Excel and Power BI to monitor sales trends and operational performance.",
    "Streamlined reporting processes by creating automated data workflows using Python.",
    "Cleaned, structured, and transformed raw datasets to ensure accurate and reliable analysis.",
    "Generated data-driven insights to support informed business and strategic decision-making."
  ],
  tools: ["Dashboard Development", "Data Reporting", "Data Interpretation", "Exploratory Data Analysis (EDA )"]
}
];

const projects = [
  {
  title: "Route Weather AI Optimizer",
  image: "/weather-optimizer.png",
  problem: "Traditional weather tools use point-to-point lookups, failing to account for severe localized hazards, micro-climates, and crosswinds that occur simultaneously along critical highway corridors.",
  solution: "Built a corridor-based risk panel using React and Node.js. Overhauled backend middleware to support 10MB data stream buffers for large GIS polyline payloads, engineered an asynchronous coordinate downsampling filter, and implemented a staggered sleep multiplier loop to bypass upstream API rate limits.",
  result: "Automated real-time safety tracking for long-distance cyclists and transit fleets, flagging active atmospheric risks like wind shear (>15 kph) and heavy precipitation using a dynamic visual state machine.",
  skills: ["Node.js", "Express.js", "React.js", "Leaflet", "REST APIs", "GIS Processing"],
  role: "Full Stack Engineer",
  summary: "A high-capacity transit telemetry and meteorological risk panel tracking localized highway hazards in real time.",
  link: "https://route-weather-ai-optimizer-qczp-py5zc85sc-kennedy-projects.vercel.app/" 
},

{
  title: "Image-to-Text Recognition System",
  image: "/optic-nerve.png",
  problem: "Natural scene images often suffer from uneven lighting, background noise, and overlapping duplicate bounding boxes, which heavily degrade text extraction accuracy in deep learning OCR systems.",
  solution: "Engineered an end-to-end computer vision pipeline. Built a 4-stage image pre-processing routine utilizing Adaptive Thresholding and Morphological Dilation with OpenCV. Integrated EasyOCR (CRAFT + CRNN models) and implemented a custom Non-Maximum Suppression (NMS) algorithm matching an IoU threshold of ≤ 0.30 to eliminate redundant detections.",
  result: "Successfully isolated text fields out of complex environments and produced clean, annotated outputs using Softmax-derived confidence filtering (≥ 0.60) to maintain an optimized precision-recall balance.",
  skills: ["Python", "EasyOCR", "OpenCV", "NumPy", "Computer Vision", "Deep Learning"],
  role: "ML Engineer",
  summary: "A production-quality computer vision pipeline using deep learning and image conditioning to extract text from natural scene images.",
  link: "https://github.com/mwangi-kennedy/natural-scene-ocr"
},
{
  title: "Skill-to-Role Matching Engine",
  image: "/recommender.png",
  problem: "Standard text search and distance-based matching algorithms fail to properly weight niche versus generic skills, often miscalculating career alignment due to vector size disparities.",
  solution: "Engineered a content-based filtering recommendation engine using Python and Scikit-Learn. Built a 4-step pipeline that ingests user skill profiles, transforms inputs using TF-IDF weighting to penalize common keywords, and applies mathematical Cosine Similarity scoring against an extended tech job role matrix.",
  result: "Eliminated vector magnitude bias to deliver a highly accurate Top-3 career recommendation system with dynamic match percentages and instant processing speeds.",
  skills: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Machine Learning", "Mathematical Modeling"],
  role: "AI Engine Developer",
  summary: "An AI-powered content-based filtering recommendation engine tracking mathematical career alignment using TF-IDF and Cosine Similarity.",
  link: "https://github.com/mwangi-kennedy/skill-to-role-matching-engine"
},
  {
  title: "Data Analytics Dashboard",
  image: "/data.png",
  problem: "Businesses often struggle to monitor key performance indicators due to fragmented datasets and lack of centralized analytics tools.",
  solution: "Developed an interactive analytics dashboard using Python and SQL to clean, transform, and analyze data. Implemented dynamic visualizations in Tableau to allow users to explore KPIs and uncover trends easily.",
  result: "Provided clear, actionable insights that improved visibility into business performance and supported more informed data-driven decision-making.",
  skills: ["SQL", "Pandas", "Tableau", "Python", "NumPy"],
  role: "Data Analyst",
  summary: "Interactive dashboard for monitoring business KPIs and enabling data-driven decisions.",
  link: "https://github.com/mwangi-kennedy/Titanic-Analysis"
},
  {
  title: "Hotel Website Development",
  image: "/web.png",
  problem: "Hotels need an online presence where potential guests can easily explore rooms, view amenities, and make reservations. Many small hotel websites lack modern design, responsiveness, and smooth navigation.",
  solution: "Developed a responsive hotel website using HTML, CSS, JavaScript, and React. Implemented room listings, a booking interface, and a photo gallery with a modern UI/UX to ensure smooth navigation and easy access to hotel services.",
  result: "Created a user-friendly platform that allows visitors to explore rooms, view services, and make reservations seamlessly across desktop and mobile devices.",
  skills: ["HTML", "CSS", "JavaScript", "React"],
  role: "Frontend Developer",
  summary: "Responsive hotel website with room listings, booking interface, and modern UI/UX.",
  link: "https://kadeeh-luxury.vercel.app/"
},
  {
  title: "AI-Powered Mobile Application",
  image: "/app.png",
  problem: "Accessing AI-powered tools for real-time assistance and information can be difficult for users who rely primarily on mobile devices.",
  solution: "Developed an Android AI-powered mobile application that brings 'power in the pocket' by integrating machine learning capabilities such as natural language processing, image recognition, and API-based AI services. Designed a user-friendly interface to allow seamless interaction with the AI features.",
  result: "Delivered a mobile platform that enables users to access intelligent tools directly from their phones, making AI-driven insights and assistance easily available in real time.",
  skills: ["TensorFlow", "ML Pipelines", "API Integration", "NLP", "Testing"],
  role: "Mobile Developer",
  summary: "Android AI-powered mobile application integrating NLP, image recognition, and machine learning tools.",
  link: "https://github.com/mwangi-kennedy/Bridgeforce"
},
  {
  title: "UI/UX Design",
  image: "/UI.png",
  problem: "Cluttered interfaces make onboarding slow and navigation frustrating for users.",
  solution: "Designed clean wireframes and high-fidelity Figma prototypes for a multi-service platform, prioritizing structured layouts and intuitive user flows.",
  result: "A streamlined, scalable UI concept that cuts onboarding friction and simplifies service discovery.",
  skills: ["Figma", "Wireframing", "Prototyping", "UI/UX Design"],
  role: "UI/UX Designer",
  summary: "Figma-based UI/UX design for a multi-service tech platform focusing on intuitive navigation and modern user experience.",
  link: "https://www.figma.com/team_invite/redeem/bMO4keGwjiAUzhXP5y0l9T?t=CMerMR7NXr2Q3Rke-21"
},
{
  title: "Graphic Design",
  image: "/moneyversation.jpg",
  problem: "Brands often struggle to communicate messages clearly and consistently across digital platforms without strong visual identity and engaging design.",
  solution: "Created visually engaging graphics and digital assets using Adobe Photoshop and Illustrator. Focused on modern layouts, strong typography, and balanced color schemes to ensure clear communication and brand consistency across web and social media platforms.",
  result: "Delivered visually compelling designs that enhance brand presentation, improve audience engagement, and maintain a consistent visual identity across digital channels.",
  skills: ["Adobe Photoshop", "Adobe Illustrator", "Typography", "Color Theory"],
  role: "Graphic Designer",
  summary: "Digital graphic designs focused on strong visual hierarchy, branding consistency, and engaging social media content.",
  link: "https://drive.google.com/drive/folders/1VR6JpCj0RMhwKMA_QAh-1dqs_EYwKNDz?usp=sharing"
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
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-left">
          <h1 className="hero-role">Kennedy Mwangi</h1>
          <h2 className="hero-name">AI & ML Specialist, Software Engineer & Data Scientist | Building Intelligent, Data-Driven & User-Focused Digital Solutions.</h2>
          <p className="hero-desc"> I sit at the intersection of AI, software engineering, and data science. From building intelligent systems and analyzing complex datasets to crafting responsive interfaces, I bring a full-spectrum approach to solving problems across Africa and beyond.</p>

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
                <p className="skill-description">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </section>

<section className="about" id="about">
  <div className="about-container">
    
  

    <div className="about-right">
      <h2 className="section-title">About Me</h2>

     <p> I am an <span>AI & ML Specialist, Software Engineer and Data Scientist</span> with a background in Information Technology. I build intelligent systems, write scalable code and analyze complex datasets to turn raw numbers into clear, actionable strategies.</p>

      <p> Focused on building high-impact solutions, I design user-centered software and deploy machine learning models to solve complex problems. My goal is to empower organizations through reliable engineering, clear data storytelling and robust tools.</p>

      <p> By combining full-stack engineering, advanced analytics and AI, I create efficient systems that optimize performance and deliver great user experiences.</p>
      <div className="about-highlights">
        <div>
          <h3>2.5+</h3>
          <span>Years Experience</span>
        </div>
        <div>
          <h3>10+</h3>
          <span>Projects Completed</span>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="section-light certifications-section">
  <div className="certifications-container">
    <h2 className="section-title">
      <span className="icon"></span> Certifications & Badges
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
          <strong>Tools, Technologies and Skills Gained:</strong>
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
          {project.summary && <p className="project-desc">{project.summary}</p>}
          {project.problem && (
            <p className="project-desc">
              <strong>Problem:</strong> {project.problem}
            </p>
          )}
          {project.solution && (
            <p className="project-desc">
              <strong>Solution:</strong> {project.solution}
            </p>
          )}
          {project.result && (
            <p className="project-desc">
              <strong>Result:</strong> {project.result}
            </p>
          )}
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
                  <span key={i} className="skill-badge">{skill}</span>
                ))}
              </div>
            </div>
          )}
          <a
            href={project.link}
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project <FaExternalLinkAlt />
          </a>
        </div>
      </motion.div>
    ))}
  </div>
</section>

<section className="section-dark" id="testimonials">
  <h2 className="section-title">Testimonials</h2>
  <p className="section-subtitle">What People Say About Me</p>

  <div className="testimonials-container">
    {testimonials.map((item, index) => (
      <motion.div
        key={index}
        className="testimonial-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 }}
        viewport={{ once: true }}
      >
        <div className="testimonial-header">
          <div>
            <h3>{item.name}</h3>
            <span>
              {item.role} • {item.company}
            </span>
          </div>
          <div className="testimonial-stars" style={{ display: 'flex', gap: '2px', fontSize: '1.2rem' }}>
            <span style={{ color: '#ff7a00 ' }}>★</span>
            <span style={{ color: '#ff7a00  ' }}>★</span>
            <span style={{ color: '#ff7a00  ' }}>★</span>
            <span style={{ color: '#ff7a00 ' }}>★</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient id="half-grad">
                  <stop offset="50%" stopColor="#ff7a00 " />
                  <stop offset="50%" stopColor="#ccc" />
                </linearGradient>
              </defs>
              <path
                fill="url(#half-grad)"
                d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.78 1.402 8.175L12 18.896l-7.336 3.86 1.402-8.175L.132 9.21l8.2-1.192L12 .587z"
              />
            </svg>
          </div>
        </div>

        <p className="testimonial-text">"{item.text}"</p>
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
          <option>Data Engineering</option>
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

      <div className="footer-container">
        <div className="footer-about">
          <h2>Kennedy Mwangi</h2>
          <p>
            Multidisciplinary professional skilled in Data Analytics, Software Engineering, UI/UX Design, Machine Learning, Frontend Development and Graphic Design. Builds data-driven solutions, interactive dashboards, and engaging designs that help businesses make informed decisions.
          </p>
        </div>
        <div className="footer-column">
          <h3>Navigation</h3>
          <a href="#home">Home</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <p>Data Engineering</p>
          <p>SoftwareDevelopment</p>
          <p>UI/UX Design</p>
          <p>Machine Learning</p>
          <p>Graphic Design</p>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>

          <p>
            <FaEnvelope /> kenmwangi273@gmail.com
          </p>

          <p>
            <FaWhatsapp /> 0790036399
          </p>

          <div className="footer-icons">

            <a
              href="https://github.com/mwangi-kennedy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/kennedy-mwangi-tech/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/dev_mwangy"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a href="mailto:kenmwangi273@gmail.com">
              <FaEnvelope />
            </a>

            <a
              href="https://wa.me/254790036399"
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>

          </div>
          <a href="#home" className="back-top">↑</a>
        </div>

      </div>
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Kennedy Mwangi. All rights reserved.
        </p>

        <p className="footer-status">
          <span className="status-dot"></span>
          Available for new projects
        </p>

        <p>Nairobi, Kenya • Powered by Vercel</p>

      </div>

    </footer>


    </>
  );
}

export default App;
