import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Carrusel() {
    return (
        <div>
            <div className='col-lg-12'>
                <Carousel id='carruselPromociones' className="carousel slide" style={{width: '90%'}}>
                    <Carousel.Item>
                        <img src= 'assets/images/consejosDePasteleria.png' text="Consejos" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src = 'assets/images/RecetasExclusivas.png' text="Recetas" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src='assets/images/NoticiasPasteleria.png' text="Noticias" />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default UncontrolledExample;