import React, { useEffect, useState } from "react";

const Carousel = () => {
  const items = ["More Content", "Safer Browsing", "Faster Loading"];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [items.length]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div className="carousel-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};


export default Carousel;
