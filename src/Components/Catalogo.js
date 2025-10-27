import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TarjetasCatalogo from './TarjetasCatalogo';
import FiltroProductos from './filtro';

function CatalogoProductos() {
    return (
        <Container>
            <hr style={{color:'#8B4513', height: '10%', borderWidth:'2px'}} />
            <FiltroProductos />
            <hr style={{color:'#8B4513', height: '10%', borderWidth:'2px'}} />
            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                    
                    <TarjetasCatalogo 
                        categoria = "torta-cuadrada"
                        imagen = "/assets/images/TortaChocolate.png"
                        titulo = "Torta de Chocolate"
                        descripcion = "Clásica y deliciosa, elaborada con suave bizcocho de cacao y un intenso sabor a chocolate."
                        precio = "$45.000"
                    />
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    
                    <TarjetasCatalogo 
                        categoria = "torta-cuadrada"
                        imagen = "/assets/images/TortaFruta.png"
                        titulo = "Torta de Frutas"
                        descripcion = "Fresca y colorida, rellena con frutas de temporada y un bizcocho ligero, cobertura de crema."
                        precio = "$50.000"
                    />
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <TarjetasCatalogo 
                        categoria = "torta-circular"
                        imagen = "/assets/images/TortaVainilla.png"
                        titulo = "Torta de Vainilla"
                        descripcion = "Un clásico de sabor suave, con esponjoso bizcocho de vainilla y cobertura cremosa."
                        precio = "$40.000"
                    />
                </Col>
            </Row>

            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                    <TarjetasCatalogo 
                        categoria = "torta-circular"
                        imagen = "/assets/images/TortaCircularManjar.png"
                        titulo = "Torta de Manjar"
                        descripcion = "Rellena de tradicional manjar chileno, con un toque casero y dulce irresistible."
                        precio = "$42.000"
                    />
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <TarjetasCatalogo 
                        categoria = "postre"
                        imagen = "/assets/images/PostreMousseChocolate.png"
                        titulo = "Mousse de Chocolate"
                        descripcion = "Textura ligera y cremosa, con un sabor intenso para los amantes del chocolate."
                        precio = "$5.000"
                    />
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <TarjetasCatalogo 
                        categoria = "postre"
                        imagen = "/assets/images/PostreTiramisu.png"
                        titulo = "Tiramisú Clásico"
                        descripcion = "Postre italiano con capas de bizcocho, café y suave crema de mascarpone."
                        precio = "$5.500"
                    />
                </Col>
            </Row>

            <Row className="mt-5">
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "torta-circular"
                        imagen = "/assets/images/TortaNaranja.png"
                        titulo = "Torta de Naranja"
                        descripcion = "Opción saludable, con el frescor de la naranja y apta para quienes evitan el azúcar."
                        precio = "$48.000"
                    />
                    
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "postre"
                        imagen = "/assets/images/Cheesecake.png"
                        titulo = "Cheesecake sin Azúcar"
                        descripcion = "Suave y cremoso, endulzado naturalmente para disfrutar sin culpas."
                        precio = "$47.000"
                    />
            
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "postre"
                        imagen = "/assets/images/EmpanadaManzana.png"
                        titulo = "Empanada de Manzana"
                        descripcion = "Clásico postre de masa dorada horneada y relleno de manzanas especiadas.."
                        precio = "$3.000"
                    />
                    
                </Col>
            </Row>

            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "sin-gluten"
                        imagen = "/assets/images/PanSinGluten.png"
                        titulo = "Pan sin Gluten"
                        descripcion = "Alternativa nutritiva y ligera, ideal para personas celíacas o con intolerancia al gluten."
                        precio = "$3.500"
                    />
                    
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "torta-circular"
                        imagen = "/assets/images/TartaSantiago.png"
                        titulo = "Tarta de Santiago"
                        descripcion = " Receta tradicional gallega a base de almendras, con un sabor auténtico y delicado."
                        precio = "$6.000"
                    />
                    
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "sin-gluten"
                        imagen = "/assets/images/Brownie.png"
                        titulo = "Brownie sin Gluteno"
                        descripcion = "Denso, húmedo y chocolatoso, pensado para quienes buscan opciones sin gluten."
                        precio = "$4.000"
                    />
                </Col>
            </Row>

            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "vegano"
                        imagen = "/assets/images/TortaVeganaChocolate.png"
                        titulo = "Torta Vegana de Chocolate"
                        descripcion = "Sin ingredientes de origen animal, pero con todo el sabor y la intensidad del cacao."
                        precio = "$50.000"
                    />
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "vegano"
                        imagen = "/assets/images/GalletaAvena.png"
                        titulo = "Galletas Veganas de Avena"
                        descripcion = "Crujientes y saludables, endulzadas de forma ligera, perfectas para acompañar un café o té."
                        precio = "$4.500"
                    />
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "especial"
                        imagen = "/assets/images/TortaCumpleaños.png"
                        titulo = "Torta Especial de Cumpleaños"
                        descripcion = "Personalizada para celebrar momentos únicos, con diseños y sabores a elección."
                        precio = "$55.000"
                    />
                </Col>
            </Row>

            <Row className="mt-5">
               
                <Col xl={4} className="d-flex justify-content-center">
                <TarjetasCatalogo 
                        categoria = "especial"
                        imagen = "/assets/images/TortaBoda.png"
                        titulo = "Torta Especial de Boda"
                        descripcion = "Elegante y sofisticada, diseñada para el gran día, con detalles únicos y un sabor inolvidable.."
                        precio = "$60.000"
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default CatalogoProductos;