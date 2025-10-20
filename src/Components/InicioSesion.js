import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        
    };

    return (
        <>
            <hr style={{ color: '#8B4513', height: '10%', borderWidth: '2px' }} />

            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <Card style={{ 
                            borderRadius: '15px', 
                            border: '2px solid #D2B48C', 
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)' 
                        }}>
                            <Card.Header 
                                className="fondoCuerpo text-center" 
                                style={{ borderRadius: '15px 15px 0 0' }}
                            >
                                <h2 style={{ fontFamily: 'Dancing Script', color: '#8B4513', margin: 0 }}>
                                    <i className="fa-solid fa-sign-in-alt me-3"></i>Iniciar Sesión
                                </h2>
                                <p className="textoCuerpo mt-2 mb-0">
                                    Bienvenido de vuelta a Pastelería Mil Sabores
                                </p>
                            </Card.Header>

                            <Card.Body style={{ backgroundColor: '#FFF5E1', padding: '2.5rem' }}>
                                <Form onSubmit={handleSubmit}>
                                    
                                    <Form.Group className="mb-4">
                                        <Form.Label className="textoCuerpo">
                                            <strong>
                                                <i className="fa-solid fa-envelope me-2"></i>
                                                Correo Electrónico
                                            </strong>
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Ingrese su correo electrónico"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ 
                                                padding: '12px', 
                                                borderRadius: '8px', 
                                                border: '2px solid #D2B48C' 
                                            }}
                                        />
                                    </Form.Group>

                                    
                                    <Form.Group className="mb-4">
                                        <Form.Label className="textoCuerpo">
                                            <strong>
                                                <i className="fa-solid fa-lock me-2"></i>
                                                Contraseña
                                            </strong>
                                        </Form.Label>
                                        <div className="position-relative">
                                            <Form.Control
                                                type={showPassword ? 'text' : 'password'}
                                                id="password"
                                                name="password"
                                                placeholder="Ingrese su contraseña"
                                                value={formData.password}
                                                onChange={handleChange}
                                                required
                                                style={{ 
                                                    padding: '12px', 
                                                    borderRadius: '8px', 
                                                    border: '2px solid #D2B48C', 
                                                    paddingRight: '45px' 
                                                }}
                                            />
                                            <Button
                                                type="button"
                                                className="position-absolute"
                                                onClick={togglePassword}
                                                style={{ 
                                                    right: '5px', 
                                                    top: '50%', 
                                                    transform: 'translateY(-50%)', 
                                                    border: 'none', 
                                                    background: 'none', 
                                                    color: '#8B4513' 
                                                }}
                                            >
                                                <i className={`fa-solid ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                            </Button>
                                        </div>
                                    </Form.Group>

                                    
                                    <Form.Group className="mb-4">
                                        <Form.Check
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            checked={formData.remember}
                                            onChange={handleChange}
                                            label={
                                                <span className="textoCuerpo">
                                                    <i className="fa-solid fa-heart me-1"></i>
                                                    Recordar mi sesión
                                                </span>
                                            }
                                        />
                                    </Form.Group>

                                   
                                    <div className="d-grid gap-2 mb-4">
                                        <Button 
                                            type="submit" 
                                            variant="" 
                                            className="botones py-3" 
                                            style={{ fontSize: '18px' }}
                                        >
                                            <i className="fa-solid fa-sign-in-alt me-2"></i>
                                            Iniciar Sesión
                                        </Button>
                                    </div>

                                    
                                    <div className="text-center">
                                        <div className="mb-3">
                                            <Link 
                                                to="#" 
                                                className="textoCuerpo text-decoration-none" 
                                                style={{ fontSize: '14px' }}
                                            >
                                                <i className="fa-solid fa-key me-1"></i>
                                                ¿Olvidaste tu contraseña?
                                            </Link>
                                        </div>

                                        <hr style={{ borderColor: '#D2B48C', margin: '1.5rem 0' }} />

                                        <div className="textoCuerpo">
                                            <span style={{ fontSize: '14px' }}>¿No tienes una cuenta?</span>
                                            <Link 
                                                to="/registro" 
                                                className="ms-2 text-decoration-none" 
                                                style={{ color: '#5D4037', fontWeight: '600' }}
                                            >
                                                <i className="fa-solid fa-user-plus me-1"></i>
                                                Regístrate aquí
                                            </Link>
                                        </div>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>

                        
                        <div className="text-center mt-4">
                            <Card style={{ 
                                backgroundColor: 'rgba(255, 245, 225, 0.8)', 
                                border: '1px solid #D2B48C', 
                                borderRadius: '10px' 
                            }}>
                                <Card.Body className="py-3">
                                    <h6 
                                        className="textoCuerpo mb-2" 
                                        style={{ fontFamily: 'Dancing Script', fontSize: '18px' }}
                                    >
                                        <i className="fa-solid fa-gift me-2"></i>
                                        Beneficios de tener cuenta
                                    </h6>
                                    <Row className="text-center">
                                        <Col xs={4}>
                                            <i className="fa-solid fa-star iconos" style={{ fontSize: '20px' }}></i>
                                            <p className="textoCuerpo mb-0" style={{ fontSize: '12px' }}>
                                                Ofertas exclusivas
                                            </p>
                                        </Col>
                                        <Col xs={4}>
                                            <i className="fa-solid fa-clock iconos" style={{ fontSize: '20px' }}></i>
                                            <p className="textoCuerpo mb-0" style={{ fontSize: '12px' }}>
                                                Pedidos más rápidos
                                            </p>
                                        </Col>
                                        <Col xs={4}>
                                            <i className="fa-solid fa-heart iconos" style={{ fontSize: '20px' }}></i>
                                            <p className="textoCuerpo mb-0" style={{ fontSize: '12px' }}>
                                                Lista de favoritos
                                            </p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;