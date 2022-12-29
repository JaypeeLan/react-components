import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./slidertwo.css";

const SliderTwo = ({ slides }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, []);

  return (
    <>
      <motion.div className="carousel">
        <motion.div
          ref={carousel}
          whileTap={{cursor: "grabbing"}}
          drag="x"
          dragConstraints={{ right: 0 , left: -width}}
          className="inner-carousel"
        >
          {slides?.map((img, i) => {
            return (
              <motion.div key={i} className="item">
                <img src={img.image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </>
  );
};

export default SliderTwo;
