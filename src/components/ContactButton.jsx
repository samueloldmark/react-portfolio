import React from "react";
import { Link } from "react-router-dom";

const ContactButton = () => (
    <Link to="/contact" className="contactButton">
        <h3 className="contactTitle">Contact</h3>
    </Link>
);


export default ContactButton;