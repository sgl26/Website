import React, { useRef } from "react";
import './portfolio.css';
// need to think about where to place the clients - which would have experience instead and the contact sections
const Portfolio = () => {

    return (
      <section id="portfolio">
        <h1 className="portfolioTitle">Portfolio</h1> 
        <p className="portDesc">
          Some of my favourite projects to showcase my ability:
        </p>
        <div className="slideshow">
            <img src='' alt='Babcock' className="expImg"/>
            <img src='' alt='3P Innovation' className="expImg"/>
            <img src='' alt='Bath University Swimming Club' className="expImg"/>
                
        </div>

            
      </section>
    );
}

export default Contact