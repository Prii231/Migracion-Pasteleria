import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Registro() {
    const [datosFormulario, setearDatosFormulario] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        codigo: '',
        fechaNacimiento: ''
    });

    const [resultado, setResultado] = useState({
        show: false,
        type: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setearDatosFormulario({
            ...datosFormulario,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos del formulario:', datosFormulario);
        
        setResultado({
            show: true,
            type: 'success',
            message: '¡Registro exitoso! Bienvenido a Pastelería Mil Sabores.'
        });
    };

    return (
        <main>
            <Container className="d-flex justify-content-center align-items-center min-vh-100 mt-5">
                <Row>
                    <Col xl={12}>
                        <Card className="shadow-lg rounded-5">
                            <Card.Body className="p-4" style={{width: '500px'}}>
                                <h1 
                                    className="text-center mb-4" 
                                    style={{ fontFamily: 'Dancing Script', color: '#8B4513' }}
                                >
                                    Registro de Usuario
                                </h1>

                                <Form id="formRegistro" onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3">
                                        <Form.Label 
                                            htmlFor="nombre" 
                                            style={{ fontFamily: 'Dancing Script', fontSize: '150%' }}
                                        >
                                            Nombre
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={datosFormulario.nombre}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label 
                                            htmlFor="apellido" 
                                            style={{ fontFamily: 'Dancing Script', fontSize: '150%' }}
                                        >
                                            Apellido
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="apellido"
                                            name="apellido"
                                            value={datosFormulario.apellido}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label 
                                            htmlFor="correo" 
                                            style={{ fontFamily: 'Dancing Script', fontSize: '150%' }}
                                        >
                                            Correo electrónico
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            id="correo"
                                            name="correo"
                                            value={datosFormulario.correo}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label 
                                            htmlFor="codigo" 
                                            style={{ fontFamily: 'Dancing Script', fontSize: '150%' }}
                                        >
                                            Código de descuento (opcional)
                                        </Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="codigo"
                                            name="codigo"
                                            value={datosFormulario.codigo}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label 
                                            htmlFor="fechaNacimiento" 
                                            style={{ fontFamily: 'Dancing Script', fontSize: '150%' }}
                                        >
                                            Fecha de Nacimiento
                                        </Form.Label>
                                        <Form.Control
                                            type="date"
                                            id="fechaNacimiento"
                                            name="fechaNacimiento"
                                            value={datosFormulario.fechaNacimiento}
                                            onChange={handleChange}
                                            required
                                        />
                                    </Form.Group>

                                    <Button
                                        type="submit"
                                        variant=""
                                        className="botones w-100"
                                        style={{ fontFamily: 'Dancing Script', fontSize: '150%' }}
                                    >
                                        Registrarse
                                    </Button>
                                </Form>

                                {resultado.show && (
                                    <Alert 
                                        variant={resultado.type} 
                                        className="mt-3"
                                        dismissible
                                        onClose={() => setResultado({ ...resultado, show: false })}
                                    >
                                        {resultado.message}
                                    </Alert>
                                )}

                                <div className="text-center mt-3">
                                    <p className="textoCuerpo">
                                        ¿Ya tienes una cuenta?{' '}
                                        <Link 
                                            to="/login" 
                                            className="text-decoration-none" 
                                            style={{ color: '#8B4513', fontWeight: '600' }}
                                        >
                                            Inicia sesión aquí
                                        </Link>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}

export default Registro;