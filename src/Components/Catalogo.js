import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CatalogoProductos() {
    return (
        <Container>
            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }} data-category="torta-cuadrada">
                        <Card.Img variant="top" src="/assets/images/TortaChocolate.png" alt="Torta de Chocolate" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta de Chocolate
                            </Card.Title>
                            <Card.Text>
                                Clásica y deliciosa, elaborada con suave bizcocho de cacao y un intenso sabor a chocolate.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$45.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }} data-category="torta-cuadrada">
                        <Card.Img variant="top" src="/assets/images/TortaFruta.png" alt="Torta de Frutas" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta de Frutas
                            </Card.Title>
                            <Card.Text>
                                Fresca y colorida, rellena con frutas de temporada y un bizcocho ligero, cobertura de crema.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$50.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }} data-category="torta-circular">
                        <Card.Img variant="top" src="/assets/images/TortaVainilla.png" alt="Torta de Vainilla" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta de Vainilla
                            </Card.Title>
                            <Card.Text>
                                Un clásico de sabor suave, con esponjoso bizcocho de vainilla y cobertura cremosa.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$40.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="mt-5">
                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }} data-category="torta-circular">
                        <Card.Img variant="top" src="/assets/images/TortaCircularManjar.png" alt="Torta de Manjar" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Torta de Manjar
                            </Card.Title>
                            <Card.Text>
                                Rellena de tradicional manjar chileno, con un toque casero y dulce irresistible.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$42.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/PostreMousseChocolate.png" alt="Mousse de Chocolate" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Mousse de Chocolate
                            </Card.Title>
                            <Card.Text>
                                Textura ligera y cremosa, con un sabor intenso para los amantes del chocolate.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$5.000</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
                </Col>

                
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{ width: '70%' }}>
                        <Card.Img variant="top" src="/assets/images/PostreTiramisu.png" alt="Tiramisú Clásico" />
                        <Card.Body>
                            <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                                Tiramisú Clásico
                            </Card.Title>
                            <Card.Text>
                                Postre italiano con capas de bizcocho, café y suave crema de mascarpone.
                            </Card.Text>
                            <h4>
                                <p style={{ color: '#8B4513' }}>$5.500</p>
                            </h4>
                            <Button as={Link} to="#" variant="" className="botones">Agregar al Carrito</Button>
                        </Card.Body>
                    </Card>
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