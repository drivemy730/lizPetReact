import React from "react";
import { footerImages } from "../data/footerAndHeaderImages";
import "../styles/footer/footer.css"
import { Link } from "react-router-dom"; // Importar Link de React Router
import logoImage from '../assets/imagesIndex/logo(1).png'; // Importa la imagen
import logoMail from '../assets/imagesFooterAndHeader/mail.png'; 
import logoWapp from '../assets/imagesFooterAndHeader/whatsapp.png'; // Importa la imagen
import logoInsta from '../assets/imagesFooterAndHeader/insta.png'; // Importa la imagen


    function Footer ()
    {
       

        return(
            <footer>


                
                <div className="footer_columna1_contenedor_img">
            
                    <img
                        className="footer_columna1_logoPet"
                        src={logoImage}
                        alt="Imagen del logo PetLizz"
                    />
            
                </div>

                <nav className="header_nav_container_footer">
                    <Link href="#"> INICIO</Link>            
                    <Link href="#">PRODUCTOS</Link>            
                </nav>
        
                <div className ="contenedorFooter">
            
            
                    <div>
                        <img 
                            className="footer_contacto_logo_columna2"
                            src={logoMail}
                            alt="icono correo "
                            />
                    </div>
            
                    <div className="footer_columna2_cajita_redes">
                            
                        <img 
                            src={logoWapp}
                            alt="imagen del icono de la red social whatsapp"
                        />
            
                        <img 
                            src={logoInsta}
                            alt="imagen del icono de la red social instagram"
                        />
                    </div>
            
            
                </div>
        
               
        
            </footer>
        );
    }
   
    export default Footer;