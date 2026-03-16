import React, { useState } from 'react';
import { useImages } from '../ImagesContext';

const Dashboard = () => {
  const { addImages } = useImages(); // Get the addImages function from context
  const [image, setImage] = useState(null);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAddProduct = () => {
    if (image && productName && productPrice) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // Assuming image is converted to base64 (or you can upload to a server and get a URL)
        const newImage = { name: productName, price: productPrice, image: reader.result };
        addImages([newImage]); // Add new product to the context
        alert("Product added successfully!"); // Show alert

      };
      reader.readAsDataURL(image); // Read the image as base64 string (or use image URL if uploaded to a server)
    } else {
      alert("Please provide all details.");
    }
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <input type="file" onChange={handleImageUpload} />
      <input 
        type="text" 
        placeholder="Product Name" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Product Price" 
        value={productPrice} 
        onChange={(e) => setProductPrice(e.target.value)} 
      />
      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default Dashboard;
