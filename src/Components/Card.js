import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Promociones() {
    return (
        <Container>
            <Row className="mt-5">
                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{width: '70%', height: '100%'}}>
                        <Card.Img 
                            variant="top" 
                            src="/assets/images/Codigo50Años.png" 
                            alt="50 años" 
                        />
                        <Card.Body>
                            <Card.Title style={{fontFamily: 'Dancing Script', fontSize: '160%'}}>
                                <strong>Para Mayores de 50 años</strong>
                            </Card.Title>
                            <Card.Text>
                                ¡50% OFF por registrarte! Código válido solo para nuevos usuarios.
                                Aplica automáticamente al crear tu cuenta.
                            </Card.Text>
                            <div className="text-center">
                                <Button as={Link} to="#" variant="" className="botones">
                                    Canjear
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} className="d-flex justify-content-center">
                    <Card style={{width: '70%'}}>
                        <Card.Img 
                            variant="top" 
                            src="/assets/images/CodigoDeDescuento.png" 
                            alt="Descuento" 
                        />
                        <Card.Body>
                            <Card.Title style={{fontFamily: 'Dancing Script', fontSize: '160%'}}>
                                <strong>Registro con código de descuento</strong>
                            </Card.Title>
                            <Card.Text>
                                10% OFF al registrarte. Código exclusivo para nuevos usuarios.
                                Descuento automático en tu primera compra.
                            </Card.Text>
                            <div className="text-center">
                                <Button as={Link} to="#" variant="" className="botones">
                                    Canjear
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <Col xl={4} className="d-flex justify-content-center">
                    <Card className="d-flex flex-column" style={{width: '70%', height: '100%'}}>
                        <Card.Img 
                            variant="top" 
                            src="/assets/images/TortaGratis.png" 
                            alt="Torta gratis" 
                        />
                        <Card.Body>
                            <Card.Title style={{fontFamily: 'Dancing Script', fontSize: '160%'}}>
                                <strong>Descuento Estudiantes DuocUC</strong>
                            </Card.Title>
                            <Card.Text>
                                ¡Torta GRATIS para estudiantes DuocUC!
                                Registrate con tu correo institucional y disfruta tu postre sin costo.
                            </Card.Text>
                            <div className="text-center">
                                <Button as={Link} to="#" variant="" className="botones mt-auto">
                                    Canjear
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Promociones;