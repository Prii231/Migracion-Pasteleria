import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarPrincipal() {
    const [buscarTermino, setearTermino] = useState('');

    const busqueda = (e) => {
        e.preventDefault();
        console.log('Buscando:', buscarTermino);
    };

    return (
        <div className="container">
            <div className="col-lg-12">
                <nav className="navbar">
                    <div className="container">
                        <Link className="navbar-brand d-flex align-items-center" to="/">
                            <img src="/assets/images/LogoTitle.png" alt="Bootstrap" width="60" height="60"/>
                            <span className="textoCuerpo ms-3">
                                <h3><strong>Pastelería<br />Mil Sabores</strong></h3>
                            </span>
                        </Link>
                        
                        <Link to="/">
                            <button type="button" className="btn botones ms-3">Inicio</button>
                        </Link>
                        
                        <Link to="/catalogo">
                            <button type="button" className="btn botones ms-3">Productos</button>
                        </Link>
                        
                        <form className="d-flex" role="search" onSubmit={busqueda}>
                            <input 
                                className="form-control me-2" 
                                type="search" 
                                placeholder="Buscar producto..."
                                aria-label="Search"
                                value={buscarTermino}
                                onChange={(e) => setearTermino(e.target.value)}
                            />
                            <button className="btn botones" type="submit">Buscar</button>
                        </form>

                        <div className="dropdown-hover icono-espaciado">
                            <i className="fa-solid fa-user iconos"></i>
                            <div className="dropdown-content">
                                <Link to="/login">Iniciar Sesión</Link>
                                <Link to="/registro">Registrarse</Link>
                                <Link to="/perfil">Actualizar Información</Link>
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