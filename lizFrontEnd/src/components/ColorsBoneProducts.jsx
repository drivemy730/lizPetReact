
import React from "react";
import { colorBonesTagsImages } from "../data/IndexImages";



    function ColorsBoneProductsPage()
    {
        const [bluePawTagImage,,,,,,,,,,] = colorBonesTagsImages;
        const [,goldenPawTagImage,,,,,,,,] = colorBonesTagsImages;
        const [,,fucsiaPawTagImage,,,,,,,] = colorBonesTagsImages;
        const [,,,redPawTagImage,,,,,,] = colorBonesTagsImages;
        const [,,,,pinkPawTagImage,,,,,] = colorBonesTagsImages;
        const [,,,,,colorsBoneTagImage,,,,] = colorBonesTagsImages;
        const [,,,,,,goldenBoneTagImage,,,] = colorBonesTagsImages;
        const [,,,,,,,pinkBoneTagImage,,] = colorBonesTagsImages;
        const [,,,,,,,,fucsiaBoneTagImage,] = colorBonesTagsImages;
        const [,,,,,,,,,blackBoneTagImage,] = colorBonesTagsImages;
        const [,,,,,,,,,,purpleBoneTagImage] = colorBonesTagsImages;

        return(
            <>

            <h1 className="cart-title">PLACAS PERSONALIZADAS EN FORMA DE HUESO</h1>

            <div className="columnaProductos">
    
                    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={bluePawTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={goldenBoneTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={fucsiaPawTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={redPawTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={pinkPawTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={colorsBoneTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={goldenBoneTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={pinkPawTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={fucsiaBoneTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={blackBoneTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
    
    
    
                    <div className="product-item">
    
                        <div className="cart-item-info-huesos">
                            <img className="imgProductoHuesoColores" src={purpleBoneTagImage} alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p className="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  
    
                        <label for="quantity"></label>
                        <div className="quantity-selector">
                            <button className="quantity-btn decrease">-</button>
                            <span id="quantity" className="quantity-value">1</span>
                            <button className="quantity-btn increase">+</button>
                        </div>                
                        <button className="add-to-cart">Agregar al carrito</button>
    
                    </div>
                
            </div>
    
            <div classNameName="floating-cart">
    
                <div classNameName="cart-icon">
                    <a href="" classNameName="">
                        🛒 
                        <span classNameName="cart-count">0</span> 
                    </a>
                </div>
               
    
            </div>

            </>
        );
    }

    export default ColorsBoneProductsPage