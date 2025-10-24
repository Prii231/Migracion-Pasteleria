import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Perfil() {
    const [datosFormulario, setearDatosFormulario] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        preferencias: []
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

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setearDatosFormulario({
                ...datosFormulario,
                preferencias: [...datosFormulario.preferencias, value]
            });
        } else {
            setearDatosFormulario({
                ...datosFormulario,
                preferencias: datosFormulario.preferencias.filter(pref => pref !== value)
            });
        }
    };

    const handleConfirm = () => {
        console.log('Datos del perfil:', datosFormulario);
        setResultado({
            show: true,
            type: 'success',
            message: '¡Perfil actualizado exitosamente!'
        });
    };

    const handleReset = () => {
        setearDatosFormulario({
            nombre: '',
            apellido: '',
            telefono: '',
            email: '',
            preferencias: []
        });
        setResultado({
            show: false,
            type: '',
            message: ''
        });
    };

    return (
        <>
            <hr style={{ color: '#8B4513', height: '10%', borderWidth: '2px' }} />

            <Container className="my-5">
                <Row className="justify-content-center">
                    <Col lg={8}>
                        <Card style={{ borderRadius: '15px', border: '2px solid #D2B48C' }}>
                            <Card.Header className="fondoCuerpo text-center" style={{ borderRadius: '15px 15px 0 0' }}>
                                <h2 style={{ fontFamily: 'Dancing Script', color: '#8B4513', margin: 0 }}>
                                    <i className="fa-solid fa-user-circle me-3"></i>Mi Perfil
                                </h2>
                            </Card.Header>

                            <Card.Body style={{ backgroundColor: '#FFF5E1', padding: '2rem' }}>
                                <Form id="perfilForm">
                                    <Row className="mb-4">
                                        <Col lg={12}>
                                            <h4 style={{ fontFamily: 'Dancing Script', color: '#8B4513', borderBottom: '2px solid #D2B48C', paddingBottom: '10px' }}>
                                                <i className="fa-solid fa-id-card me-2"></i>Información Personal
                                            </h4>
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col lg={6} className="mb-3">
                                            <Form.Label htmlFor="nombre" className="textoCuerpo">
                                                <strong>Nombre</strong>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                placeholder="Ingrese su nombre..."
                                                value={datosFormulario.nombre}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-3">
                                            <Form.Label htmlFor="apellido" className="textoCuerpo">
                                                <strong>Apellido</strong>
                                            </Form.Label>
                                            <Form.Control
                                                type="text"
                                                id="apellido"
                                                name="apellido"
                                                placeholder="Ingrese su apellido..."
                                                value={datosFormulario.apellido}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mb-3">
                                        <Col lg={6} className="mb-3">
                                            <Form.Label htmlFor="telefono" className="textoCuerpo">
                                                <strong>Número de Teléfono</strong>
                                            </Form.Label>
                                            <Form.Control
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                placeholder="+56 9 1234 5678"
                                                value={datosFormulario.telefono}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-3">
                                            <Form.Label htmlFor="email" className="textoCuerpo">
                                                <strong>Correo Electrónico</strong>
                                            </Form.Label>
                                            <Form.Control
                                                type="email"
                                                id="email"
                                                name="email"
                                                placeholder="ejemplo@correo.com"
                                                value={datosFormulario.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </Col>
                                    </Row>

                                    <Row className="mb-4 mt-5">
                                        <Col lg={12}>
                                            <h4 style={{
                                                fontFamily: 'Dancing Script',
                                                color: '#8B4513',
                                                borderBottom: '2px solid #D2B48C',
                                                paddingBottom: '10px'
                                            }}>
                                                <i className="fa-solid fa-heart me-2"></i>Preferencias de Productos
                                            </h4>
                                            <p className="text-muted mb-3">
                                                Selecciona tus categorías favoritas para recibir ofertas personalizadas
                                            </p>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="torta-cuadrada"
                                                name="preferencias"
                                                value="torta-cuadrada"
                                                checked={datosFormulario.preferencias.includes('torta-cuadrada')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-square me-2"></i>Tortas Cuadradas
                                                    </span>
                                                }
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="torta-circular"
                                                name="preferencias"
                                                value="torta-circular"
                                                checked={datosFormulario.preferencias.includes('torta-circular')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-circle me-2"></i>Tortas Circulares
                                                    </span>
                                                }
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="postre-individual"
                                                name="preferencias"
                                                value="postre-individual"
                                                checked={datosFormulario.preferencias.includes('postre-individual')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-cookie-bite me-2"></i>Postres Individuales
                                                    </span>
                                                }
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="sin-azucar"
                                                name="preferencias"
                                                value="sin-azucar"
                                                checked={datosFormulario.preferencias.includes('sin-azucar')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-leaf me-2"></i>Sin Azúcar
                                                    </span>
                                                }
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="pasteleria-tradicional"
                                                name="preferencias"
                                                value="pasteleria-tradicional"
                                                checked={datosFormulario.preferencias.includes('pasteleria-tradicional')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-star me-2"></i>Pastelería Tradicional
                                                    </span>
                                                }
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="sin-gluten"
                                                name="preferencias"
                                                value="sin-gluten"
                                                checked={datosFormulario.preferencias.includes('sin-gluten')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-wheat-awn-slash me-2"></i>Sin Gluten
                                                    </span>
                                                }
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="vegano"
                                                name="preferencias"
                                                value="vegano"
                                                checked={datosFormulario.preferencias.includes('vegano')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-seedling me-2"></i>Veganos
                                                    </span>
                                                }
                                            />
                                        </Col>
                                        <Col lg={6} className="mb-2">
                                            <Form.Check
                                                type="checkbox"
                                                id="especial"
                                                name="preferencias"
                                                value="especial"
                                                checked={datosFormulario.preferencias.includes('especial')}
                                                onChange={handleCheckboxChange}
                                                label={
                                                    <span className="textoCuerpo">
                                                        <i className="fa-solid fa-crown me-2"></i>Tortas Especiales
                                                    </span>
                                                }
                                            />
                                        </Col>
                                    </Row>

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

                                    <Row className="mt-5">
                                        <Col lg={6}>
                                            <Row>
                                                <Button
                                                    type="button"
                                                    variant = ""
                                                    className="botones"
                                                    onClick={handleConfirm}
                                                >
                                                    <i className="fa-solid fa-check me-2"></i>Confirmar
                                                </Button>
                                            </Row>
                                        </Col>

                                        <Col lg={6}>
                                            <Row>
                                                <Button
                                                    type="reset"
                                                    variant = ""
                                                    className="botones"
                                                    onClick={handleReset}
                                                >
                                                    <i className="fa-solid fa-rotate-left me-2"></i>Restablecer
                                                </Button>
                                            </Row>
                                            
                                        </Col>
                                    </Row>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Perfil;