import React from 'react';
import {Link} from 'react-router-dom';


function NavbarPrincipal() {
    return (
        <div className="container">
            <div className="col-lg-12">
                <nav className="navbar">
                    <div className="container">
                        <Link className="navbar-brand d-flex align-items-center" to="index.html">
                            <img src="assets\images\LogoTitle.png" alt="Bootstrap" width="60" height="60"/>
                                <span className="textoCuerpo ms-3">
                                    <h3><strong>Pastelería<br />Mil Sabores</strong></h3>
                                </span>
                        </Link>
                        <a href="index.html">
                            <button type="button" className="btn botones ms-3">Inicio</button>
                        </a>
                        <a href="catalogo.html">
                            <button type="button" className="btn botones ms-3">Productos</button>
                        </a>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Buscar producto..."
                                aria-label="Search" />
                            <button className="btn botones" type="submit">Buscar</button>
                        </form>

                        <div className="dropdown-hover icono-espaciado">
                            <i className="fa-solid fa-user iconos"></i>
                            <div className="dropdown-content">
                                <a href="login.html">Iniciar Sesión</a>
                                <a href="registro.html">Registrarse</a>
                                <a href="perfil.html">Actualizar Información</a>
                            </div>
                        </div>

                        <i className="fa-solid fa-basket-shopping iconos icono-espaciado"></i>

                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavbarPrincipal;