import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {
    return (
        <div className='container my-4'>
            <Carousel id='carruselPromociones' style={{width: '90%', margin: '0 auto'}}>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="/assets/images/consejosDePasteleria.png" 
                        alt="Consejos de Pastelería"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="/assets/images/RecetasExclusivas.png" 
                        alt="Recetas Exclusivas"
                    />
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src="/assets/images/NoticiasPasteleria.png" 
                        alt="Noticias de Pastelería"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrusel;