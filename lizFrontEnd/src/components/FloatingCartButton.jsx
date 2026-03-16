// src/components/FloatingCartButton.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { Link } from 'react-router-dom';
import "../styles/seccion-3/indexMainProducts.css";

function FloatingCartButton() {
  const { cart, removeFromCart, calculateTotalItems, getTotal } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <div className="floating-cart">
      <button
        onClick={toggleCartVisibility}
        className="cart-icon"
        aria-label="Toggle cart visibility"
      >
        🛒
        {calculateTotalItems() > 0 && <span className="cart-count">{calculateTotalItems()}</span>}
      </button>

      {isCartVisible && (
        <div className="cart-popup">
          <h3>Productos en tu carrito</h3>
          {cart.length === 0 ? 
            (
              <p>Tu carrito está vacío.</p>
            ) : 
            (
              <div className="cart-items">

              {cart.map((item) => 
            (
                  <div key={item.id} className="cart-item">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-item-image"
                    />

                    <div className="cart-item-details">

                      <p>Precio: ${item.price}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Subtotal: ${item.price * item.quantity}</p>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="remove-item"
                        aria-label={`Remove ${item.name} from cart`}
                      >
                        X
                      </button>

                    </div>

                  </div>
                ))}
                <div className="cart-total">
                  <h4>Total: ${getTotal()}</h4>
                  <Link to="/CheckOut">
                    <button className="pay-button">Pagar</button>
                  </Link>
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  );
}

export default FloatingCartButton;
