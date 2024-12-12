import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "../../data/Pdata";
import './slides.css'
import github from '../../assets/github.png'
// import { DiVim } from "react-icons/di";

// import { wrap } from "popmotion";
// import { images } from "./image-data";

const variants = {
  initial: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      zIndex:2
    }
  },
  animate: {
    x: 0,
    opacity: 1,
    zIndex:2,
    scale: 1,
    // transition: 'ease-in',
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.2 },
    },
  },
  exit: direction => {
    return {
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      zIndex:0,
      scale: 0.5,
      // transition: 'ease-in',
      transition: {
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 }
      },
    }
  },
}
const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

function Slides() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  function nextStep() {
    setDirection(1)
    if (index === properties.length - 1) {
      setIndex(0)
      return
    }
    setIndex(index + 1)
  }

  function prevStep() {
    setDirection(-1)
    if (index === 0) {
      setIndex(properties.length - 1)
      return
    }
    setIndex(index - 1)
  }
  // function Dots({ activeIndex, onclick, sliderImage}) {
  //   return(
  //     <div className="all-dots">
  //       {sliderImage.map((slide, i) => (
  //         <span
  //         key={i}
  //         className={`${activeIndex === i ? "dot active-dot": "dot"}`}
  //         onClick={() => onclick(i)}
  //         />
  //       ))}
  //     </div>
  //   );
  // }

  return (
    <div className='container'>
      <div className='slideshow'>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            variants={variants}
            animate='animate'
            initial='initial'
            exit='exit'
            alt='slides'
            className='slideBoxes'
            key={properties[index].id}
            custom={direction}
          >
           <div className="movable">
             <img className="modal__image" alt={properties[index].setOfData} src={properties[index].imageSrc}/>
             <div className="modal__info">
               <div className="modal__row">
                 <span className="modal__Title">{properties[index].caption}</span>
               </div>
               <div className="modal__description-wrapper" style={{marginBottom:10}}> {properties[index].description} </div>
               <div className="buttonLink">
               <button
                className="hyperlink"
                role="link"
                onClick={() => openInNewTab(properties[index].buttonLink)}
              ><img src={github} alt='Git' className='modalImg'/>Repo</button></div>
             </div>
           </div>
          </motion.div>
        </AnimatePresence>
        <button className='prev' onClick={prevStep}>
          ◀
        </button>
        <button className='next' onClick={nextStep}>
          ▶
        </button>
      </div>
      <div className="indicators">

        {properties.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                index === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => {
                if (idx > index){
                  setDirection(1)
                }
                if (idx < index){
                  setDirection(-1)
                }
                setIndex(idx);
                
              }}
            ></button>
          );
        })}
      </div>
    </div>
  )
}

export default Slides
//   const divIndex = ((page % properties.length) + properties.length) % properties.length;
//   console.log("Page:", page, "Direction:", direction, "Index:", divIndex);
//   return (
//     <>
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.div
//           key={divIndex}
//           custom={direction}
//           variants={variants}
//           initial={"enter"}
//           animate={"center"}
//           exit={'exit'}
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 }
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         >
//           <div className="movable">
//             <img className="modal__image" alt={properties[divIndex].setOfData} src={properties[divIndex].imageSrc}/>
//             <div className="modal__info">
//               <div className="modal__row">
//                 <span className="modal__Title">{properties[divIndex].caption}</span>
//               </div>
//               <div className="modal__description-wrapper" > {properties[divIndex].description} </div>

//             </div>
//           </div>

//         </motion.div>
//       </AnimatePresence>
//       <div className="next" onClick={() => paginate(1)}>
//         {"‣"}
//       </div>
//       <div className="prev" onClick={() => paginate(-1)}>
//         {"‣"}
//       </div>
//     </>
//   );
// }

// export default Slides
