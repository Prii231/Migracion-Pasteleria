import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Modal, Button } from 'react-bootstrap';
import axios from 'axios';

/**
 * Componente de Cards de Catálogo de Productos
 * Muestra los productos en formato de tarjetas con opción de ver detalles
 * Obtiene sus propios datos desde la API
 */
const TablaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Cargar datos al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3001/api/productos');
        setProductos(respuesta.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar productos:', error);
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Si está cargando, mostrar mensaje
  if (cargando) {
    return (
      <div className="productos-contenedor">
        <h5 className="productos-titulo">
          <i className="fas fa-box me-2"></i>
          Catálogo de Productos
        </h5>
        <div className="sin-datos-productos">
          <p>Cargando productos...</p>
        </div>
      </div>
    );
  }

  // Si no hay productos, mostrar mensaje
  if (!productos || productos.length === 0) {
    return (
      <div className="productos-contenedor">
        <h5 className="productos-titulo">
          <i className="fas fa-box me-2"></i>
          Catálogo de Productos
        </h5>
        <div className="sin-datos-productos">
          <i className="fas fa-box-open"></i>
          <p>No hay productos disponibles</p>
        </div>
      </div>
    );
  }

  // Función para abrir el modal con detalles del producto
  const verDetalles = (producto) => {
    setProductoSeleccionado(producto);
    setMostrarModal(true);
  };

  // Función para cerrar el modal
  const cerrarModal = () => {
    setMostrarModal(false);
    setProductoSeleccionado(null);
  };

  return (
    <div className="productos-contenedor">
      {/* Encabezado con título y buscador */}
      <div className="productos-header">
        <h5 className="productos-titulo">
          <i className="fas fa-box me-2"></i>
          Catálogo de Productos
        </h5>
        
      </div>

      {/*Cards de Productos */}
      <Row className="productos-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <Col xs={12} sm={6} md={4} lg={3} key={producto.id} className="mb-4">
              <Card className="producto-card h-100">
                {/* Imagen del producto */}
                <div className="producto-card-imagen-contenedor">
                  <Card.Img
                    variant="top"
                    src={producto.imagen}
                    alt={producto.nombre}
                    className="producto-card-imagen"
                  />
                
                </div>

                {/* Cuerpo de la tarjeta */}
                <Card.Body className="producto-card-body">
                  {/* Categoría */}
                  <div className="producto-card-categoria">
                    <span className="badge-categoria-card">{producto.categoria}</span>
                  </div>

                  {/* Nombre del producto */}
                  <h5 className="producto-card-nombre">{producto.nombre}</h5>

                  {/* Precio */}
                  <div className="producto-card-precio-contenedor">
                    <span className="producto-card-precio">
                      ${producto.precio.toLocaleString('es-CL')}
                    </span>
                  </div>

                  {/* Stock */}
                  <div className="producto-card-stock">
                    <i className="fas fa-boxes me-2"></i>
                    Stock: <strong>{producto.stock} unidades</strong>
                  </div>
                </Card.Body>

                {/* Footer  */}
                <Card.Footer className="producto-card-footer">
                  <div className="d-flex gap-2">
                    <button
                      className="btn-producto-accion btn-editar-producto"
                      title="Editar producto"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn-producto-accion btn-ver-detalles-producto flex-grow-1"
                      onClick={() => verDetalles(producto)}
                      title="Ver detalles"
                    >
                      <i className="fas fa-eye me-1"></i>
                      Ver Detalles
                    </button>
                    <button
                      className="btn-producto-accion btn-eliminar-producto"
                      title="Eliminar producto"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))
        ) : (
          <Col xs={12}>
            <div className="sin-resultados-productos">
              <i className="fas fa-box-open me-2"></i>
              No hay productos disponibles
            </div>
          </Col>
        )}
      </Row>
      
      {/* Modal de Detalles del Producto */}
      <Modal show={mostrarModal} onHide={cerrarModal} size="lg" centered>
        <Modal.Header closeButton className="modal-detalles-header">
          <Modal.Title>
            <i className="fas fa-info-circle me-2"></i>
            Detalles del Producto
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-detalles-body">
          {productoSeleccionado && (
            <Row>
              {/* Columna de imagen */}
              <Col md={5} className="text-center">
                <img
                  src={productoSeleccionado.imagen}
                  alt={productoSeleccionado.nombre}
                  className="modal-producto-imagen"
                />
              </Col>

              {/* Columna de detalles */}
              <Col md={7}>
                <h3 className="modal-producto-nombre">{productoSeleccionado.nombre}</h3>

                <div className="modal-producto-detalles">
                  <div className="detalle-item">
                    <span className="detalle-label">
                      <i className="fas fa-tag me-2"></i>
                      ID:
                    </span>
                    <span className="detalle-valor">{productoSeleccionado.id}</span>
                  </div>

                  <div className="detalle-item">
                    <span className="detalle-label">
                      <i className="fas fa-th-large me-2"></i>
                      Categoría:
                    </span>
                    <span className="detalle-valor">
                      <span className="badge-categoria-modal">{productoSeleccionado.categoria}</span>
                    </span>
                  </div>

                  <div className="detalle-item">
                    <span className="detalle-label">
                      <i className="fas fa-dollar-sign me-2"></i>
                      Precio:
                    </span>
                    <span className="detalle-valor precio-modal">
                      ${productoSeleccionado.precio.toLocaleString('es-CL')}
                    </span>
                  </div>

                  <div className="detalle-item">
                    <span className="detalle-label">
                      <i className="fas fa-boxes me-2"></i>
                      Stock:
                    </span>
                    <span className="detalle-valor">
                      <span className={`badge-stock-modal ${productoSeleccionado.stock < 10 ? 'stock-bajo' : 'stock-ok'}`}>
                        {productoSeleccionado.stock} unidades
                      </span>
                    </span>
                  </div>

                  
                </div>
              </Col>
            </Row>
          )}
        </Modal.Body>
        <Modal.Footer className="modal-detalles-footer">
          <Button variant="secondary" onClick={cerrarModal} className="btn-cerrar-modal">
            <i className="fas fa-times me-2"></i>
            Cerrar
          </Button>
          <Button variant="primary" className="btn-editar-modal">
            <i className="fas fa-edit me-2"></i>
            Editar Producto
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TablaProductos;
