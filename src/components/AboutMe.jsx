import React from "react";
import { profilepic2 } from '../assets'
import { Link } from "react-router-dom";



const AboutMe = () => (
    <section className="AboutMeBox">
        <div className="aboutresume">
            <h5>About me.</h5>
            <div className="resumeBox">
                <p className="contactTitle">Resumé</p>
            </div>
        </div>
        <img src={profilepic2} alt="profilepic" className="profilepic2" />
        <p className="textaboutme"> My name is Samuel Oldmark. I have always <br />been passionate about creating and it all <br />started with music production. Today I <br />focus on UX and UI design. For me, it has <br />always been clear that I want to work in the <br />world of creativity.</p>
    </section>
)

export default AboutMe;