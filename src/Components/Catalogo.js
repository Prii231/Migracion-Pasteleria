import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import TarjetasCatalogo from './TarjetasCatalogo';

function CatalogoProductos() {
    return (
        <Container>
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
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/TortaNaranja.png" alt="Torta de Naranja" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta de Naranja
                            </Card.Title>
                            <Card.Text>
                                Opción saludable, con el frescor de la naranja y apta para quienes evitan el azúcar.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$48.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/Cheesecake.png" alt="Cheesecake sin Azúcar" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Cheesecake sin Azúcar
                            </Card.Title>
                            <Card.Text>
                                Suave y cremoso, endulzado naturalmente para disfrutar sin culpas.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$47.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/EmpanadaManzana.png" alt="Empanada de Manzana" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Empanada de Manzana
                            </Card.Title>
                            <Card.Text>
                                Clásico postre de masa dorada horneada y relleno de manzanas especiadas.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$3.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/PanSinGluten.png" alt="Pan sin Gluten" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Pan sin Gluten
                            </Card.Title>
                            <Card.Text>
                                Alternativa nutritiva y ligera, ideal para personas celíacas o con intolerancia al gluten.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$3.500</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/TartaSantiago.png" alt="Tarta de Santiago" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Tarta de Santiago
                            </Card.Title>
                            <Card.Text>
                                Receta tradicional gallega a base de almendras, con un sabor auténtico y delicado.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$6.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/Brownie.png" alt="Brownie sin Gluten" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Brownie sin Gluten
                            </Card.Title>
                            <Card.Text>
                                Denso, húmedo y chocolatoso, pensado para quienes buscan opciones sin gluten.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$4.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/TortaVeganaChocolate.png" alt="Torta Vegana de Chocolate" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta Vegana de Chocolate
                            </Card.Title>
                            <Card.Text>
                                Sin ingredientes de origen animal, pero con todo el sabor y la intensidad del cacao.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$50.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/GalletaAvena.png" alt="Galletas Veganas de Avena" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Galletas Veganas de Avena
                            </Card.Title>
                            <Card.Text>
                                Crujientes y saludables, endulzadas de forma ligera, perfectas para acompañar un café o té.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$4.500</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/TortaCumpleaños.png" alt="Torta Especial de Cumpleaños" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta Esp. de Cumpleaños
                            </Card.Title>
                            <Card.Text>
                                Personalizada para celebrar momentos únicos, con diseños y sabores a elección.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$55.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
               
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/TortaBoda.png" alt="Torta Especial de Boda" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta Especial de Boda
                            </Card.Title>
                            <Card.Text>
                                Elegante y sofisticada, diseñada para el gran día, con detalles únicos y un sabor inolvidable.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$60.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default CatalogoProductos;