import React from "react";
import { HOOCard, LIINECard, VOCCard } from '../assets'
import { Link } from "react-router-dom";


const Card = () => (
    <section className="LIINECardBox">
        <div className="Title">
            <h4 className='concepts_title'>Concepts</h4>
        </div>
        <div className="ProjectCards">
            <Link to="/LIINE" className="LIINEPage">
                <img src={LIINECard} alt="LIINE_card" className="LIINEPic" />
            </Link>
            <img src={HOOCard} alt="Hoo_card" className="HooPic" />
            <img src={VOCCard} alt="Voc_card" className="VocPic" />
        </div>
    </section>
)

export default Card;
