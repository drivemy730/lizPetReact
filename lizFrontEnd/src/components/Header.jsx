import React from "react";
import "../styles/header/header.css"
import { Link } from "react-router-dom"; // Importar Link de React Router
import logoImage from '../assets/imagesIndex/logo(1).png'; // Importa la imagen

function Header() 
{
  
  return (
    <header className="gradient-header">

      <div className="header_logo_container">
        <img className="header_logo_img" src={logoImage} alt="PetLizz-logo" />
      </div>

      <nav className="header_nav_container_footer">
        <Link to="/" className="inicioButton navButton">INICIO</Link>
        <Link to="/productos" className="nosotrosButton navButton">PRODUCTOS</Link>
        <Link to="/login"> <p className="loginButton ">LOGIN</p></Link>

      </nav>

      

    </header>
    
  );
}

export default Header;
