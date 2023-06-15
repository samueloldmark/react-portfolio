import React from "react";
import { profilepic } from "../assets";
import { Link } from "react-router-dom";



const ContactForm = () => (
    <section className="contactFormBox">
        <p className="contactMeTitle">Contact me.</p>
        <div className="contactForm">
            <form action="#" method="post">
                <div className="inputBox">
                    <div className="firstLastBox">
                        <div className="firstNameBox">
                            <label htmlFor="firstName">First Name:</label>
                            <input type="text" id="firstName" name="firstName" required />
                        </div>
                        <div className="lastNameBox">
                            <label htmlFor="lastName">Last Name:</label>
                            <input type="text" id="lastName" name="lastName" required />
                        </div>
                    </div>
                    <div className="emailBox">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="messageBox">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <Link to="#" className="submitButton">
                        <h3 className="contactTitle">Submit</h3>
                    </Link>
                </div>
            </form>
        </div>
    </section>
);

export default ContactForm;