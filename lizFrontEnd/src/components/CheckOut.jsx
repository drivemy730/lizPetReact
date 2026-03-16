// src/components/CheckOut.jsx
import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../styles/checkOut/checkOut.css";

// Reusable FormGroup Component
const FormGroup = ({ label, type, id, name, value, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    {type === "textarea" ? (
      <textarea id={id} name={name} value={value} onChange={onChange} required={required}></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    )}
  </div>
);

// Reusable CheckoutItem Component
const CheckoutItem = ({ name, price, quantity }) => (
  <li className="checkout-item">
    <h4>{name}</h4>
    <p>Precio: ${price}</p>
    <p>Cantidad: {quantity}</p>
    <p>Subtotal: ${price * quantity}</p>
  </li>
);

function CheckOut() {
  const { cart, getTotal } = useContext(CartContext);

  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPhoneNumber: '',
    userAddress: '',
  });

  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert('Tu carrito está vacío. Por favor, agrega productos antes de proceder.');
      return;
    }

    const orderData = {
      user: {
        name: formData.userName,
        email: formData.userEmail,
        phone: formData.userPhoneNumber,
        address: formData.userAddress,
      },
      products: cart.map((item) => ({
        idProduct: item.id, // Matches database structure
        productName: item.name,
        productPrice: item.price,
        cantidad: item.quantity,
      })),
    };

    try {
      setLoading(true); // Indicate loading
      const response = await axios.post('http://localhost/lizPetBackEnd/order.php', orderData);

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      // Success message
      alert(`Gracias por tu compra, ${formData.userName}! Tu pedido ha sido confirmado.`);
      console.log('Server Response:', response.data);

      // Reset form and cart
      setFormData({ userName: '', userEmail: '', userPhoneNumber: '', userAddress: '' });
    } catch (error) {
      console.error('Error al enviar los datos:', error);
      alert('Hubo un error al procesar tu pedido. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Render if cart is empty
  if (cart.length === 0) {
    return (
      <div className="checkout-container">
        <h2>Confirmación de Compra</h2>
        <p>
          Tu carrito está vacío. <Link to="/">Volver a la tienda</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="checkout-container">
      <h2>Confirmación de Compra</h2>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Danos tu información</h3>

        {/* User Info Form */}
        <FormGroup
          label="Nombre:"
          type="text"
          id="userName"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
        />
        <FormGroup
          label="Correo Electrónico:"
          type="email"
          id="userEmail"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
          required
        />
        <FormGroup
          label="Teléfono:"
          type="tel"
          id="userPhoneNumber"
          name="userPhoneNumber"
          value={formData.userPhoneNumber}
          onChange={handleChange}
          required
        />
        <FormGroup
          label="Dirección:"
          type="textarea"
          id="userAddress"
          name="userAddress"
          value={formData.userAddress}
          onChange={handleChange}
          required
        />

        {/* Order Summary */}
        <h3>Resumen del Pedido</h3>
        <ul className="checkout-items">
          {cart.map((item) => (
            <CheckoutItem
              key={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
        </ul>

        <div className="checkout-summary">
          <h4>Total: ${getTotal()}</h4>
        </div>

        <button type="submit" className="confirm-purchase-button" disabled={loading}>
          {loading ? 'Procesando...' : 'Confirmar Compra'}
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
