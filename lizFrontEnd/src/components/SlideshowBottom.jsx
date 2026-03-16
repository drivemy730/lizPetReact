

import React, { useState, useEffect } from 'react';

const SlideshowBottom = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambiar imagen automáticamente cada cierto intervalo
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer); // Limpiar intervalo al desmontar el componente
    }, [images.length, interval]);

    return (
        <div className="placasSection-slideshow-container">
            <div className="slide fade">
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
            </div>
        </div>
    );
};

export default SlideshowBottom;
