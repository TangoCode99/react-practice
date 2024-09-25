import React from "react";
import { useRef } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { CSSLogo, HTMLLogo, JSLogo, Profile, ReactLogo } from "../assets";
import "./about.css";

const aboutMe = "Hi! I'm Tango, a frontend developer with a passion for creating seamless and engaging user " +
    "experiences. With two years of experience in the corporate world, I specialize in building modern, " +
    "responsive websites using React, Material UI, and HTML/CSS. I love collaborating with teams, sharing " +
    "ideas, and working through challenges to deliver impactful solutions. I’m always excited to explore " +
    "new projects and connect with like-minded developers, so feel free to reach out if you’d like to work together!";

export default function About() {
    const aboutMeRef = useRef(null);
    const experiencesRef = useRef(null);
    return (
        <div className="about-wrapper">
            <div className="about-header">
                <h2>Welcome! I'm <div className="name">Tango</div>.</h2>
                <h2 className="about-title">I'm a Front-End Software Developer.</h2>
                <button className="about-me-btn" onClick={() => { aboutMeRef.current.scrollIntoView({ block: "start", behavior: "smooth" }); }}>About Me <ArrowDownwardIcon /></button>
            </div>
            <div className="about-body" ref={aboutMeRef}>
                <div className="left-side">
                    <div className="body-header">About Me</div>
                    <p>{aboutMe}</p>
                    <button className="experience-btn" onClick={() => { experiencesRef.current.scrollIntoView({ bloc: "start", behavior: "smooth" }); }}>Experiences <ArrowDownwardIcon /></button>
                </div>
                <div className="right-side">
                    <div className="profile-pic">
                        <img src={Profile} alt="Profile" />
                    </div>
                </div>
            </div>
            <div className="experience" ref={experiencesRef}>
                <div className="experience-title">
                    <h1>
                        Work Experiences
                    </h1>
                </div>
                <div className="experience-body">
                    <div className="body-wrapper">
                        <h3>General Motors</h3>
                        <h5>Software Developer</h5>
                        <em>June 2022 - August 2024</em>
                        <div className="wrapper-info">
                            <ul>
                                <li>Implemented 20+ new features and enhancements based on business requirements and stakeholder feedback, leading to a 20% increase in user engagement and a 15% reduction in customer support queries</li>
                                <li>Collaborated with product owners and stakeholders to define clear and achievable sprint goals, resulting in a 90% sprint completion rate over 12 months and a 10% increase in on-time project deliveries</li>
                                <li>Participated in 50+ code reviews and pair programming sessions to foster knowledge sharing and improved code quality by 30% across the team and reduced post-deployment bugs by 15%</li>
                                <li>Conducted unit testing and developed performance scripts to track the software’s capability/stability as more users are on boarded to the app</li>
                                <li>Identified and fixed over 100+ bugs in the codebase, improving software stability and user experience by 25%</li>
                            </ul>
                        </div>
                        <div className="tools">
                            <div className="logo"><img src={ReactLogo} alt="React Logo" /></div>
                            <div className="logo"><img src={JSLogo} alt="JS Logo" /></div>
                            <div className="logo"><img src={HTMLLogo} alt="HTML Logo" /></div>
                            <div className="logo"><img src={CSSLogo} alt="CSS Logo" /></div>
                            <div className="logo"></div>
                        </div>
                    </div>
                    <div className="body-wrapper">
                        <h3>Shaw Industries</h3>
                        <h5>Software Development Intern</h5>
                        <em>January 2021 - May 2021</em>
                        <div className="wrapper-info">
                            <ul>
                                <li>Rewrote 15+ existing Java Server Pages to a modern framework (Angular) to improve code efficiency</li>
                                <li>Debugged and traced 50+ existing code to solve code-related business problems</li>
                                <li>Assisted in the migration of legacy systems to modern architectures, ensuring the evolution of technologies</li>
                                <li>Documented technical specifications and user guides to assist in the onboarding of new members and users</li>
                            </ul>
                        </div>
                        <div className="tools">
                            <div className="logo"></div>
                            <div className="logo"></div>
                            <div className="logo"></div>
                        </div>
                    </div>
                    <div className="body-wrapper">
                        <h3>The University of Georgia</h3>
                        <h5>IT Student Assistant</h5>
                        <em>September 2020 - January 2021</em>
                        <div className="wrapper-info">
                            <ul>
                                <li>Provided technical support to thousands of students, faculty, and staff, resolving any hardware and software issues</li>
                                <li>Assisted professors in technology set up for distance learning to ensure minimal downtime & smooth experience</li>
                                <li>Performed diagnostics/troubleshooting of multiple issues for an ease of user experience</li>
                                <li>Maintained technologies to ensure they are working properly and effectively</li>
                            </ul>
                        </div>
                        <div className="tools">
                            <div className="logo"></div>
                            <div className="logo"></div>
                            <div className="logo"></div>
                            <div className="logo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};