import React from "react";
import { useRef } from "react";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Profile } from "../assets";
import "./about.css";

const aboutMe = "Hi! I'm Tango, a frontend developer with a passion for creating seamless and engaging user " +
"experiences. With two years of experience in the corporate world, I specialize in building modern, " +
"responsive websites using React, Material UI, and HTML/CSS. I love collaborating with teams, sharing " +
"ideas, and working through challenges to deliver impactful solutions. I’m always excited to explore " +
"new projects and connect with like-minded developers, so feel free to reach out if you’d like to work together!";

export default function About() {
    const aboutMeRef = useRef(null);
    return (
        <div className="about-wrapper">
            <div className="about-header">
                <h2>Welcome! I'm <div className="name">Tango</div>.</h2>
                <h2>I'm a Front-End Software Developer.</h2>
                <button className="about-me-btn" onClick={() => { aboutMeRef.current.scrollIntoView({ block: "start", behavior: "smooth" }); }}>About Me <ArrowDownwardIcon /></button>
            </div>
            <div className="about-body" ref={aboutMeRef}>
                <div className="left-side">
                    <div className="body-header">About Me</div>
                    <p>{aboutMe}</p>
                </div>
                <div className="right-side">
                    <div className="profile-pic">
                        <img src={Profile} alt="Profile" />
                    </div>
                </div>
            </div>
        </div>
    );
};