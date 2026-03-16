// components/Slideshow.jsx
import React, { useState, useEffect } from 'react';

function SlideshowTop({ images, videos }) {
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % (images?.length || videos?.length));
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(intervalId); // Limpiar intervalo al desmontar
  }, [images, videos]);

  return (
    <div className="slideshow-container">
      {images && images.length > 0 && (
        <div className="slide">
          <img src={images[index]} alt={`Slide ${index + 1}`} />
        </div>
      )}
      {videos && videos.length > 0 && (
        <div className="slide">
          <video autoPlay loop muted>
            <source src={videos[index]} type="video/mp4" />
            Tu navegador no soporta la etiqueta de video.
          </video>
        </div>
      )}
    </div>
  );
}

export default SlideshowTop;