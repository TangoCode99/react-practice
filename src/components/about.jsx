import React from "react";
import { useRef } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AngularLogo from "../icons/angular.svg";
import ReactLogo from "../icons/react.svg";
import CSSLogo from "../icons/css3.svg";
import GithubLogo from "../icons/github.svg";
import Git from "../icons/git.svg";
import HTMLLogo from "../icons/html5.svg";
import JSLogo from "../icons/javascript.svg";
import MUILogo from "../icons/mui.svg";
import EmailIcon from "../icons/email.svg";
import LinkedinLogo from "../icons/linkedin.svg";
import { GradPhoto, Profile, UGA } from "../assets";
import "./about.css";

const aboutMe = "Hi! I'm Tango, a frontend developer with a passion for creating seamless and engaging user " +
    "experiences. With two-three years of experience in the corporate world, I specialize in building modern, " +
    "responsive websites using React, Material UI, and HTML/CSS. I love collaborating with teams, sharing " +
    "ideas, and working through variety of challenges to deliver impactful solutions. Outside of the computer world, " +
    "I love to travel and document my adventures through the camera lens. Admiring the beauty and what nature has to offer.";

const icons = [
    { src: JSLogo, alt: "Javascript Icon", title: "Javascript" },
    { src: ReactLogo, alt: "React Icon", title: "React.JS" },
    { src: MUILogo, alt: "MUI Icon", title: "MUI" },
    { src: HTMLLogo, alt: "HTML Icon", title: "HTML5" },
    { src: CSSLogo, alt: "CSS Icon", title: "CSS3" },
    { src: Git, alt: "Git Icon", title: "Git" },
    { src: AngularLogo, alt: "Angular Icon", title: "Angular" }
]

const projects = [
    { title: "Basic Calculator", desc: "Description", repo: "Link to Repo" },
    { title: "To-Do List", desc: "Description", repo: "Link to Repo" },
    { title: "Random Quote Generator", desc: "Description", repo: "Link to Repo" }
]

const SkillIcons = () => {
    return (
        <div className="skills-section">
            <div className="skills">
                {icons.map((icon, index) => {
                    return (
                        <div className="skill" key={index}>
                            <img src={icon.src} alt={icon.alt} />
                            <p>{icon.title}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    return (
        <div className="projects">
            <div className="projects-title"><h1>Projects</h1></div>
            <div className="projects-body">
                {projects.map((project, index) => {
                    return (
                        <div className="project-wrapper" key={index}>
                            <div className="temp-img">Coming Soon!</div>
                            <h3>{project.title}</h3>
                            <div className="project-desc">{project.desc}</div>
                            <div className="project-repo">{project.repo}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default function About() {
    const aboutMeRef = useRef(null);
    const experiencesRef = useRef(null);
    const educationRef = useRef(null);
    return (
        <div className="about-wrapper">
            <div className="about-header">
                <h2>Welcome! I'm <div className="name">Tango</div>.</h2>
                <h2 className="about-title">I'm a Front-End Software Developer.</h2>
                <button className="about-me-btn" onClick={() => { aboutMeRef.current.scrollIntoView({ block: "start", behavior: "smooth" }); }}>About Me <ArrowDownwardIcon className="bounce" /></button>
            </div>
            <div className="waves-background">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
            <div className="about-body" ref={aboutMeRef}>
                <div className="left-side">
                    <div className="body-header">About</div>
                    <p>{aboutMe}</p>
                    <button className="education-btn" onClick={() => { educationRef.current.scrollIntoView({ bloc: "start", behavior: "smooth" }); }}>Education <ArrowDownwardIcon className="bounce" /></button>
                </div>
                <div className="right-side">
                    <div className="profile-pic">
                        <img src={Profile} alt="Profile" />
                    </div>
                    <SkillIcons />
                </div>
            </div>
            <div className="education" ref={educationRef}>
                <div className="education-left">
                    <img id="uga" src={UGA} alt="University of Georgia" />
                    <img id="grad" src={GradPhoto} alt="Graduation" />
                </div>
                <div className="education-right">
                    <h2 className="education-header">Education - The University of Georgia</h2>
                    <div className="education-wrap">
                        <h4>Bachelor of Science in Computer Science</h4>
                        <h4>May 2022</h4>
                    </div>
                    <ul>
                        <li>Software Development/Engineering</li>
                        <li>Data Structures and Algorithms</li>
                        <li>Web Programming</li>
                        <li>Computer Architecture and Organization</li>
                        <li>Computer Systems Engineering</li>
                    </ul>
                    <div className="education-wrap">
                        <h4>Certificate in Applied Data Science</h4>
                        <h4>May 2022</h4>
                    </div>
                    <ul>
                        <li>Python</li>
                        <li>Data Visualization</li>
                        <li>Machine Learning</li>
                    </ul>
                    <button className="experience-btn" onClick={() => { experiencesRef.current.scrollIntoView({ bloc: "start", behavior: "smooth" }); }}>Experiences <ArrowDownwardIcon className="bounce" /></button>
                </div>
            </div>
            <div className="experience" ref={experiencesRef}>
                <div className="experience-title">
                    <h1>Work Experiences</h1>
                </div>
                <div className="experience-body">
                    <div className="body-wrapper">
                        <h3>General Motors</h3>
                        <div className="role-sec">
                            <h5>Software Engineer</h5>
                            <h5>June 2022 - August 2024</h5>
                        </div>
                        <div className="wrapper-info">
                            <ul>
                                <li>Implemented 20+ new features and enhancements based on business requirements and stakeholder feedback, leading to a 20% increase in user engagement and a 15% reduction in customer support queries.</li>
                                <li>Collaborated with product owners and stakeholders to define clear and achievable sprint goals, resulting in a 90% sprint completion rate over 12 months and a 10% increase in on-time project deliveries.</li>
                                <li>Participated in 50+ code reviews and pair programming sessions to foster knowledge sharing and improved code quality by 30% across the team and reduced post-deployment bugs by 15%.</li>
                                <li>Conducted unit testing and developed performance scripts to track the software’s capability/stability as more users are on boarded to the app.</li>
                                <li>Identified and fixed over 100+ bugs in the codebase, improving software stability and user experience by 25%.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="body-wrapper">
                        <h3>Shaw Industries</h3>
                        <div className="role-sec">
                            <h5>Software Dev. Intern</h5>
                            <h5>January 2021 - May 2021</h5>
                        </div>
                        <div className="wrapper-info">
                            <ul>
                                <li>Rewrote 15+ existing Java Server Pages to a modern framework (Angular) to improve code efficiency.</li>
                                <li>Debugged and traced 50+ existing code to solve code-related business problems.</li>
                                <li>Assisted in the migration of legacy systems to modern architectures, ensuring the evolution of technologies.</li>
                                <li>Documented technical specifications and user guides to assist in the onboarding of new members and users.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="body-wrapper">
                        <h3>The University of Georgia</h3>
                        <div className="role-sec">
                            <h5>IT Student Assist.</h5>
                            <h5>September 2020 - January 2021</h5>
                        </div>
                        <div className="wrapper-info">
                            <ul>
                                <li>Provided technical support to thousands of students, faculty, and staff, resolving any hardware and software issues.</li>
                                <li>Assisted professors in technology set up for distance learning to ensure minimal downtime & smooth experience.</li>
                                <li>Performed diagnostics/troubleshooting of multiple issues for an ease of user experience.</li>
                                <li>Maintained technologies to ensure they are working properly and effectively.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ProjectsSection />
            <div className="contact">
                <div className="contact-title">
                    <h2>Contact</h2>
                </div>
                <div className="contact-body">
                    <h5>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</h5>
                    <input type="text" placeholder="Name" id="contact-name" />
                    <input type="email" placeholder="Email" id="contact-email" />
                    <textarea type="text" placeholder="Message" id="contact-msg" />
                    <button>Submit</button>
                </div>
            </div>
            <footer className="footer">
                <div className="socials">
                    <a href="https://github.com/TangoCode99" target="_blank" rel="noreferrer">
                        <img src={GithubLogo} alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/tango-nham/" target="_blank" rel="noreferrer">
                        <img src={LinkedinLogo} alt="linkedIn logo" />
                    </a>
                    <a href="mailto:jnham7@gmail.com" target="_blank" rel="noreferrer">
                        <img src={EmailIcon} alt="email logo" />
                    </a>
                </div>
                <p className="copyright">TANGO NHAM &#169;2024</p>
            </footer>
        </div>
    );
};