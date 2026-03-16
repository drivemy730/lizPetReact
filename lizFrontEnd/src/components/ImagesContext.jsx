import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context for images
const ImagesContext = createContext();

export const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  // Load images from localStorage if available
  useEffect(() => {
    const storedImages = JSON.parse(localStorage.getItem('products')) || [];
    setImages(storedImages);
  }, []);

  // Add new images to the state and localStorage
  const addImages = (newImages) => {
    const updatedImages = [...images, ...newImages];
    setImages(updatedImages);
    localStorage.setItem('products', JSON.stringify(updatedImages)); // Store in localStorage
  };

  return (
    <ImagesContext.Provider value={{ images, addImages }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = () => useContext(ImagesContext); // Hook to access images context
