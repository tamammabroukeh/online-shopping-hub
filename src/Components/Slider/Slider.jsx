import React from "react";
import "./Slider.scss";
import { slider_img_1 } from "../../utils/images";
export default function Slider() {
  return (
    <div className="hero-slider">
      <div className="hero-slider-item">
        <img src={slider_img_1} alt="Slider" />
      </div>
    </div>
  );
}
