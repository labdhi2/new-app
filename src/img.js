import React, { useState, useEffect } from 'react';
import './home.css'; // Make sure to have your CSS file imported

const images = [
  './Logo.jpg',
  './placement.png',
  'image3.jpg'
];

function Img() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <img
        src={process.env.PUBLIC_URL + '/images/' + images[index]}
        alt={`Image ${index + 1}`}
        className="slider-image"
      />
    </div>
  );
}

export default Img;
