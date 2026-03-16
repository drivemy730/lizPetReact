import React, { useContext, useState, useEffect } from "react";
import { CartContext } from '../components/CartContext';
import { useImages } from './ImagesContext'; // Import the hook

import "../styles/seccion-3/indexMainProducts.css";
import "../styles/floatingCart/floatingCart.css";

import imageBone1 from '../assets/imagenesProductos/huesosColores/blue.png';
import imageBone2 from '../assets/imagenesProductos/huesosColores/colors.png';
import imageBone3 from '../assets/imagenesProductos/huesosColores/pink.png';

import imageHeroe1 from '../assets/imagenesProductos/huesosSuperHeroes/batman.png';
import imageHeroe2 from '../assets/imagenesProductos/huesosSuperHeroes/hulk.png';
import imageHeroe3 from '../assets/imagenesProductos/huesosSuperHeroes/capitan.png';

import imageMedallon1 from '../assets/imagenesProductos/medallones/balckcat.png';
import imageMedallon2 from '../assets/imagenesProductos/medallones/fish.png';
import imageMedallon3 from '../assets/imagenesProductos/medallones/redcat.png';

function MainProductsPage() {
  const { addToCart } = useContext(CartContext);
  const [quantities, setQuantities] = useState({});
  const { images } = useImages(); // Get images from context

  // Default products (fallback if images are empty)
  const defaultProducts = [
    { id: 1, name: "Placa Huella azul", price: 100, image: imageBone1 },
    { id: 3, name: "Placa de colores ", price: 250, image: imageBone2 },
    { id: 4, name: "Placa Huella rosa", price: 230, image: imageBone3 },
    { id: 5, name: "Placa batman", price: 100, image: imageHeroe1 },
    { id: 6, name: "placa capitan america", price: 250, image: imageHeroe2 },
    { id: 7, name: "medallon gato negtro ", price: 200, image: imageHeroe3 },
    { id: 8, name: "medallon pez ", price: 100, image: imageMedallon1 },
    { id: 9, name: "medallon rojo ", price: 200, image: imageMedallon2 },
    { id: 10, name: "medallon naranja", price: 200, image: imageMedallon3 },
  ];

  // Combine uploaded images with default products
  const products = [...images, ...defaultProducts]; 

  const handleQuantityChange = (productId, delta) => {
    setQuantities((prevQuantities) => {
      const newQuantity = (prevQuantities[productId] || 1) + delta;
      return { ...prevQuantities, [productId]: Math.max(newQuantity, 1) };
    });
  };

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: quantities[product.id] || 1 });
  };

  return (
    <div className="productsSectionContainer">
      <div className="columnaProductos">
        {products.map((product) => (
          <div className="product-item" key={product.id}>
            <div className="cart-item-info-huesos">
              <img className="imgProductoHuesoColores" src={product.image} alt={product.name} />
              <h3>${product.price}</h3>
            </div>
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(product.id, -1)}>-</button>
              <span className="span-number">{quantities[product.id] || 1}</span>
              <button onClick={() => handleQuantityChange(product.id, 1)}>+</button>
            </div>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>Agregar al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainProductsPage;
