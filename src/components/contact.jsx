import React from "react";
import "../styles/contact.css"

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-title">
                <h2>Contact</h2>
            </div>
            <div className="contact-body">
                <h5>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</h5>
                <input type="text" placeholder="Name" id="contact-name" />
                <input type="email" placeholder="Email" id="contact-email" />
                <textarea type="text" placeholder="Message" id="contact-msg" />
                <button disabled={true}>Submit</button>
            </div>
        </div>
    );
};