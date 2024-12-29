import React from "react";
import "./listing.css";
import { motion } from "framer-motion";
// import edu from "../../assets/Education.png";
// import babcock from "../../assets/babcock-logo.png";
// import innovate from "../../assets/3PInnovation.png";
// import swimming from "../../assets/UoB_Swimming.png";
// import spaget from "../../assets/Spagetti.png";
// import moreP from "../../assets/MoreProjects.png";

const Listing = ({ data, open }) => {
  const { imageSrc, setOfData, caption } = data;

  return (
    <motion.div className="listing" onClick={open} whileHover={{ scale: 1.05 }}>
      <div className="listing__content">
        <img src={imageSrc} alt={setOfData} className="worksImg"/>
        <div className="caption">
          <span className="ImgRef">{caption}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Listing;
