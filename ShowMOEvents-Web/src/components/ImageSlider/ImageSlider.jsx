//****************************************************************************************
// Filename: ImageSlider.jsx
// Date: 15 July 2026
// Author: Kyle McColgan
// Description: This file contains the ImageSlider component for ShowMOEvents.
//****************************************************************************************

import React, { useState, useEffect } from 'react';
import cheifs from '../../assets/images/Cheifs.jpg';
import kc from '../../assets/images/KC.jpg';
import arch from '../../assets/images/st-arch.jpg';
import MO from '../../assets/images/MO-fair.png';
import Aqua from '../../assets/images/Aqua.jpg';

import './ImageSlider.css';

const images = [cheifs, kc, arch,MO,Aqua];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);
  
  return (
    <div className="slider">
      <div className="slides" style={{transform: `translateX(${-currentIndex * 100}%)`}}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="img"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
