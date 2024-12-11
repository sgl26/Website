import React from "react";
import './portfolio.css';
import Slides from './slides'
// need to think about where to place the clients - which would have experience instead and the contact sections
const Portfolio = () => {

    return (
      <section id="portfolio">
        <h1 className="portfolioTitle">Portfolio</h1> 
        <p className="portDesc">
          Some of my favourite projects to showcase my ability:
        </p>
        <div className="slideshow">
            <Slides/>
        </div>
            
      </section>
    );
}

export default Portfolio