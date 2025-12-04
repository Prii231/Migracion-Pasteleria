import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

/**
 * Componente de Cards de Usuarios Registrados
 * Muestra la lista de usuarios en formato de tarjetas con su información
 * Obtiene sus propios datos desde la API
 */
const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  

  // Cargar datos al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3001/api/usuarios');
        setUsuarios(respuesta.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar usuarios:', error);
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Si está cargando, mostrar mensaje
  if (cargando) {
    return (
      <div className="usuarios-contenedor">
        <h5 className="usuarios-titulo">
          <i className="fas fa-users me-2"></i>
          Lista de Usuarios Registrados
        </h5>
        <div className="sin-datos-usuarios">
          <p>Cargando usuarios...</p>
        </div>
      </div>
    );
  }

  // Si no hay usuarios, mostrar mensaje
  if (!usuarios || usuarios.length === 0) {
    return (
      <div className="usuarios-contenedor">
        <h5 className="usuarios-titulo">
          <i className="fas fa-users me-2"></i>
          Lista de Usuarios Registrados
        </h5>
        <div className="sin-datos-usuarios">
          <i className="fas fa-users"></i>
          <p>No hay usuarios registrados</p>
        </div>
      </div>
    );
  }
 

  // Función para formatear fecha
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="usuarios-contenedor">
      {/* Encabezado con título y buscador */}
      <div className="usuarios-header">
        <h5 className="usuarios-titulo">
          <i className="fas fa-users me-2"></i>
          Lista de Usuarios Registrados
        </h5>
        
      </div>

      {/* Grid de Cards de Usuarios */}
      <Row className="usuarios-grid">
        {usuarios.length > 0 ? (
          usuarios.map((usuario) => (
            <Col xs={12} sm={6} md={4} key={usuario.id} className="mb-4">
              <Card className="usuario-card h-100">
                {/* Header con rol/estado */}
                <Card.Header className="usuario-card-header">
                  
                </Card.Header>

                {/* Cuerpo de la tarjeta */}
                <Card.Body className="usuario-card-body">
                  <Row>
                    <Col xs={7}>
                      {/* Nombre del usuario */}
                      <h4 className="usuario-card-nombre">
                        <strong>{usuario.nombre}</strong>
                      </h4>

                      {/* Email */}
                      <p className="usuario-card-info">
                        <i className="fas fa-envelope me-2" style={{ color: '#8B4513' }}></i>
                        {usuario.email}
                      </p>

                      {/* Información adicional */}
                      <ul className="usuario-card-detalles">
                        <li>
                          <span className="detalle-icono">
                            <i className="fas fa-calendar-alt"></i>
                          </span>
                          Registro: {formatearFecha(usuario.fechaRegistro)}
                        </li>
                      </ul>
                    </Col>

                    {/* Avatar del usuario */}
                    <Col xs={5} className="text-center">
                      <div className="usuario-avatar-grande">
                        {usuario.nombre.charAt(0).toUpperCase()}
                      </div>
                    </Col>
                  </Row>
                </Card.Body>

                {/* Footer con acciones */}
                <Card.Footer className="usuario-card-footer">
                  <div className="text-end">
                    <button
                      className="btn-usuario-accion btn-mensaje"
                      title="Enviar mensaje"
                    >
                      <i className="fas fa-comments"></i>
                    </button>
                    <button
                      className="btn-usuario-accion btn-ver-detalles"
                      title="Ver detalles"
                    >
                      <i className="fas fa-user me-1"></i>
                      Ver Detalles
                    </button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="sin-resultados-usuarios">
              <i className="fas fa-search me-2"></i>
              No se encontraron usuarios registrados
            </div>
          </Col>
        )}
      </Row>

      
      
    </div>
  );
};

export default TablaUsuarios;
