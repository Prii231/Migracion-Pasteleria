import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Navbar.css';
import logo from '../assets/images/LogoTitle.png';

function NavbarPrincipal() {
    const [buscarTermino, setearTermino] = useState('');

    const busqueda = (e) => {
        e.preventDefault();
        console.log('Buscando:', buscarTermino);
    };

    return (
        <Container>
            <div className="col-lg-12">
                <Navbar expand="lg" className="navbar">
                    <Container>
                        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                            <img src={logo} alt="Bootstrap" width="60" height="60"/>
                            <span className="textoCuerpo ms-3">
                                <h3><strong>Pastelería<br />Mil Sabores</strong></h3>
                            </span>
                        </Navbar.Brand>

                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/">
                                    <Button variant="" className="botones ms-3">Inicio</Button>
                                </Nav.Link>
                                
                                <Nav.Link as={Link} to="/catalogo">
                                    <Button variant="" className="botones ms-3">Productos</Button>
                                </Nav.Link>
                            </Nav>

                            <Form className="d-flex" role="search" onSubmit={busqueda}>
                                <Form.Control
                                    type="search"
                                    placeholder="Buscar producto..."
                                    className="me-2"
                                    aria-label="Search"
                                    value={buscarTermino}
                                    onChange={(e) => setearTermino(e.target.value)}
                                />
                                <Button variant="" className="botones" type="submit">Buscar</Button>
                            </Form>

                            <div className="dropdown-hover icono-espaciado">
                                <i className="fa-solid fa-user iconos"></i>
                                <div className="dropdown-content">
                                    <Link to="/login">Iniciar Sesión</Link>
                                    <Link to="/registro">Registrarse</Link>
                                    <Link to="/perfil">Actualizar Información</Link>
                                </div>
                            </div>

                            <i className="fa-solid fa-basket-shopping iconos icono-espaciado"></i>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
}

export default NavbarPrincipal;