import { heroeBoneTagsImages } from "../data/IndexImages";


    function HeroesBoneProductsPage()
    {
        const [,,,batmanTagImage,] = heroeBoneTagsImages;
        const [,captainAmericaTagImage,,,] = heroeBoneTagsImages;
        const [,,hulkTagImage,,] = heroeBoneTagsImages;
        const [,,,superManTagImage,] = heroeBoneTagsImages;
        const [,,,,wonderWoman] = heroeBoneTagsImages;

        return(
            <>
                <h1 class="cart-title">PLACAS PERSONALIZADAS EN FORMA DE HUESO</h1>

                <div class="columnaProductos">

                    <div class="product-item">

                        <div class="cart-item-info-huesos">
                            <img class="imgProductoHuesoColores" src="./imagenesProductos/huesosSuperHeroes/batman-removebg-preview.png" alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p class="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  

                        <label for="quantity"></label>
                        <div class="quantity-selector">
                            <button class="quantity-btn decrease">-</button>
                            <span id="quantity" class="quantity-value">1</span>
                            <button class="quantity-btn increase">+</button>
                        </div>    

                        <button class="add-to-cart">Agregar al carrito</button>

                    </div>

                    <div class="product-item">

                        <div class="cart-item-info-huesos">
                            <img class="imgProductoHuesoColores" src="./imagenesProductos/huesosSuperHeroes/capitanAmericaRedondo-removebg-preview.png" alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p class="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  

                        <label for="quantity"></label>

                        <div class="quantity-selector">
                            <button class="quantity-btn decrease">-</button>
                            <span id="quantity" class="quantity-value">1</span>
                            <button class="quantity-btn increase">+</button>
                        </div>                
                        <button class="add-to-cart">Agregar al carrito</button>

                    </div>


                    <div class="product-item">

                        <div class="cart-item-info-huesos">
                            <img class="imgProductoHuesoColores" src="./imagenesProductos/huesosSuperHeroes/hulck-removebg-preview.png" alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p class="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  

                        <label for="quantity"></label>
                        <div class="quantity-selector">
                            <button class="quantity-btn decrease">-</button>
                            <span id="quantity" class="quantity-value">1</span>
                            <button class="quantity-btn increase">+</button>
                        </div>                
                        <button class="add-to-cart">Agregar al carrito</button>

                    </div>


                    <div class="product-item">

                        <div class="cart-item-info-huesos">
                            <img class="imgProductoHuesoColores" src="./imagenesProductos/huesosSuperHeroes/superman-removebg-preview.png" alt="Huesito Azul">
                            </img>
                            <h3>$15.000</h3>
                            <p class="cart-item-info-huesos-colores-texto">HUESO AZUL CON HUELLAS.</p>
                        </div>  

                        <label for="quantity"></label>
                        <div class="quantity-selector">
                            <button class="quantity-btn decrease">-</button>
                            <span id="quantity" class="quantity-value">1</span>
                            <button class="quantity-btn increase">+</button>
                        </div>                
                        <button class="add-to-cart">Agregar al carrito</button>

                    </div>

                </div>

                <div class="floating-cart">

                    <div class="cart-icon">
                        <a href="" class="">
                            🛒 
                            <span class="cart-count">0</span> 
                        </a>
                    </div>

                </div>
            </>
        );
    }