import React from "react";
import { SliderData } from "../components/slider/slider0ne/Slides";
import SliderOne from "../components/slider/slider0ne/SliderOne";
import SliderTwo from "../components/slider/sliderTwo/SliderTwo";

const Sliders = () => {
  return (
    <div>
      {/* <SliderOne slides={SliderData} /> */}
      <SliderTwo slides={SliderData} />
    </div>
  );
};

export default Sliders;
