import React from "react";
import { COOKWISECard } from '../assets';


const Case = () => (
    <section className="CaseCardBox">
        <div className="Title">
            <h4 className='cases_title'>Cases</h4>
        </div>
        <div className="CaseCards">
            <img src={COOKWISECard} alt="Cookwise_pic" className="CookwisePic" />
        </div>
    </section>
);

export default Case;
