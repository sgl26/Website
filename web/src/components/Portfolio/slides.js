import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "../../data/Pdata";
import './slides.css'
// import { DiVim } from "react-icons/di";

// import { wrap } from "popmotion";
// import { images } from "./image-data";

const Slides = () => {
  // const {
  //   imageSrc,
  //   caption,
  //   setOfData,
  //   description
  // } = properties;

  const variants = {
    enter: (direction) =>{
      return {
        x: direction > 0 ? 3000 : -3000,
        opacity: 0,
        scaleY:0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scaleY:1
    },
    exit : (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        scaleY:0
      };
    }
  };



  /**
   * Experimenting with distilling swipe offset and velocity into a single variable, so the
   * less distance a user has swiped, the more velocity they need to register as a swipe.
   * Should accomodate longer swipes and short flicks without having binary checks on
   * just distance thresholds and velocity > 0.
   */
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  //const imageIndex = wrap(0, images.length, page);
  
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);

  };

  const divIndex = ((page % properties.length) + properties.length) % properties.length;
  console.log("Page:", page, "Direction:", direction, "Index:", divIndex);
  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={divIndex}
          custom={direction}
          variants={variants}
          initial={"enter"}
          animate={"center"}
          exit={'exit'}
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        >
          <div className="movable">
            <img className="modal__image" alt={properties[divIndex].setOfData} src={properties[divIndex].imageSrc}/>
            <div className="modal__info">
              <div className="modal__row">
                <span className="modal__Title">{properties[divIndex].caption}</span>
              </div>
              <div className="modal__description-wrapper" > {properties[divIndex].description} </div>

            </div>
          </div>

        </motion.div>
      </AnimatePresence>
      <div className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
}

export default Slides
