import React, { useEffect, useState } from 'react';
import {blueDogs, medalionsTags} from "../data/IndexImages";
import { groomingContestImages } from "../data/IndexImages";
import { groomingVideos } from "../data/IndexImages";
import { happyClientsImages } from "../data/IndexImages";
import { heroeBoneTagsImages } from "../data/IndexImages";
import { colorBonesTagsImages } from "../data/IndexImages";
import "../styles/seccion-1/estilismo.css"
import "../styles/main-containers/main-containers.css"
import SlideshowTop from './Slideshow'; // Importa el componente de Slideshow


import blueDog1 from '../assets/imagesIndex/blueRight.png'
import blueDog2 from '../assets/imagesIndex/blueLeft.png'



import image1 from '../assets/imagesIndex/competencia1.png';
import image2 from '../assets/imagesIndex/competencia2.png';
import image3 from '../assets/imagesIndex/competencia3.png';


import angelito1 from '../assets/imagesCustomers/draco.png';
import angelito2 from '../assets/imagesCustomers/lupe.png';
import angelito3 from '../assets/imagesCustomers/luluEspiral.png';
import angelito4 from '../assets/imagesIndex/berta.png';
import angelito5 from '../assets/imagesIndex/luna.png';
import angelito6 from '../assets/imagesIndex/sammy.png';

import video1 from '../assets/imagesIndex/groomingVideo.mp4';
import video2 from '../assets/imagesIndex/groomingVideo2.mp4';
import video3 from '../assets/imagesIndex/groomingVideo3.mp4';
import SlideshowBottom from "./SlideshowBottom";


import imageHeroe1 from '../assets/imagenesProductos/huesosSuperHeroes/batman.png';
import imageHeroe2 from '../assets/imagenesProductos/huesosSuperHeroes/hulk.png';
import imageHeroe3 from '../assets/imagenesProductos/huesosSuperHeroes/capitan.png';

import imageBone1 from '../assets/imagenesProductos/huesosColores/blue.png';
import imageBone2 from '../assets/imagenesProductos/huesosColores/red.png';
import imageBone3 from '../assets/imagenesProductos/huesosColores/pink.png';

import imageMedallon1 from '../assets/imagenesProductos/medallones/balckcat.png';
import imageMedallon2 from '../assets/imagenesProductos/medallones/fish.png';
import imageMedallon3 from '../assets/imagenesProductos/medallones/redcat.png';



function MainContent() 
{


    const imagesHeroe =[imageHeroe1,imageHeroe2,imageHeroe3]
    const imagesBone = [imageBone1, imageBone2, imageBone3];
    const imagesMedallon = [imageMedallon1, imageMedallon2, imageMedallon3];

    // Paso 1: Crear el state para las imágenes
    const [images, setImages] = useState([]);  // El estado 'images' se inicializa con un array vacío

   

   
   
    return(
    <div className="container">

        <article>  

                <div className="groomingTopSectionContainter">

                    <div className="groomingTopSectionTitleAndTextContainer">

                            <div className="groomingTopSectionTitle">
                                <p>Grooming a Domicilio</p>
                            </div>
                                    
                                
                            <div className="groomingTopSectionText">
                                <p>
                                Nuestro objetivo es que cada mascota se 
                                sienta tranquila y segura. Brindamos servicios
                                de grooming a domicilio que se adaptan a las necesidades
                                de tu angelito.
                                </p>
                            </div>      

                    </div>

                    <div className="groomingTopSectionDog" style={{ backgroundImage: `url(${blueDog2})` }}>

                            <div className="groomingTopSectionServices">
            
                                <div className="flechaGrooming">
                                    <p>Grooming</p>
                                </div>
            
                                <div className="flechaGrooming">
                                    <p>Limpieza De Oidos</p>
                                </div>
            
                                <div className="flechaGrooming">
                                    <p>Secado y Cepillado</p>
                                </div>
            
                                <div className="flechaGrooming">
                                    <p>Limpieza De Ojos</p>
                                </div>
            
                                <div className="flechaGrooming">
                                    <p>Despejo De Pulpejos</p>
                                </div>
            
                                <div className="flechaGrooming">
                                    <p>Corte Higienico</p>
                                </div>  
                            </div>

                    </div>

                </div>


                <div className="groomingSectionVideosAndTitleContainer">

                    <div className="groomingSectionVideosTitleContainer">    
                        <p>
                             La peluquería a domicilio es un 
                            servicio que brinda seguridad y 
                            comodidad a ti y a tu angelito.
                        </p> 
                    </div>
                    
                    <div className="groomingSectionVideosContainer">


                        {/*primer slidesshow*/}
                        <div>
                            
                        <SlideshowTop images={[image1, image2, image3]} />

                            <div className="groomingSectionVideosCommentsCompetencia">
                                <p>Compitiendo en grooming con profesionalismo</p>
                            </div>

                        </div>


                        {/*segundo slidesshow*/}
                        <div>
                               
                        <SlideshowTop videos={[video1, video2, video3]} />

                            <div className="groomingSectionVideosCommentsVideo ">
                                <p>Así trabajamos en el grooming</p>
                            </div>

                        </div>

                        {/*tercer slidesshow*/}
                        <div>
                        <SlideshowTop images={[angelito1, angelito2, angelito3, angelito4, angelito5, angelito6]} />

                            <div className="groomingSectionVideosCommentsCustomer">
                                <p>Un angelito feliz después de la sesión.</p>
                            </div>

                        </div>

                    </div>
                          
                </div>
                    
               

                <div className="benefitsSectionContainer">

                <div className="benefitsSectionSlideShowContainer" style={{ backgroundImage: `url(${blueDog1})` }}>
                    
                        <div className="groomingTopSectionServices">
        
                                <div className="flechaGrooming">
                                    <p>Tu angelito estará más tranquilo, sin estrés y en su espacio.
                                    </p>
                                </div>
        
                                <div className="flechaGrooming">
                                    <p>
                                        No se expondrá a pulgas o garrapatas
                                    </p>
                                </div>
        
                                <div className="flechaGrooming">
                                    <p>No estará en jaulas</p>
                                </div>
        
                                <div className="flechaGrooming">
                                    <p>
                                        No tendrás que salir de casa.
                                    </p>
                                </div>
        
                                <div className="flechaGrooming">
                                    <p>
                                        Puedes supervisar técnicas y procedimientos durante la 
                                        sesión
                                    </p>
                                </div>
        
                                
                        </div> 
                        
                </div>
    

                    <div className="benefitsSectionTitleAndTextContainer">

                        <div className="benefitsSectionTitle">
                            <p>¿Porque elegir grooming a domicilio?</p>
                        </div>

                        <div className="benefitsSectionText">
                            <p>
                            Transforma la experiencia de grooming en un momento especial: menos estrés para tu mascota y más tiempo para ti.
                            Te compartimos las mejores razones para optar por grooming a domicilio
                            </p>
                        </div>

                    </div>
                               
                </div>
    

                <div className="groomingTagSectionContainer"> 

                    <div className="groomingVideosSectionTitle">
                        <h3> Hazlo Personal:{<br></br>} Placas para tu angelito </h3>
                    </div>
        
                    <div className="groomingVideosSection">

                        <SlideshowBottom images={imagesHeroe} />
                        <SlideshowBottom images={imagesBone} />
                        <SlideshowBottom images={imagesMedallon} />

                        <div className="cotizaButon">
                        <button type="button1Servicios"> Ver precios</button>
                        </div>

                    </div>
                    

                </div>

        </article>
        
    </div>
  );
}

export default MainContent;