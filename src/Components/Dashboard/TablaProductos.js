import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

/**
 * Componente de Tabla de Catálogo de Productos
 * Muestra los productos en una tabla con opciones de búsqueda y acciones
 * Obtiene sus propios datos desde la API
 */
const TablaProductos = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');

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

  // Si no hay productos, mostrar mensaje
  if (cargando) {
    return (
      <div className="tabla-contenedor">
        <h5 className="tabla-titulo">Catálogo de Productos</h5>
        <div className="sin-datos-tabla">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!productos || productos.length === 0) {
    return (
      <div className="tabla-contenedor">
        <h5 className="tabla-titulo">Catálogo de Productos</h5>
        <div className="sin-datos-tabla">
          <i className="fas fa-box-open"></i>
          <p>No hay productos disponibles</p>
        </div>
      </div>
    );
  }

  // Filtrar productos según la búsqueda
  const productosFiltrados = productos.filter(producto =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    producto.categoria.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Función para manejar acciones (editar, eliminar)
  const manejarEditar = (id) => {
    console.log('Editar producto:', id);
    // Aquí iría la lógica para editar
  };

  const manejarEliminar = (id) => {
    console.log('Eliminar producto:', id);
    // Aquí iría la lógica para eliminar
  };

  return (
    <div className="tabla-contenedor">
      {/* Encabezado con título y buscador */}
      <div className="tabla-header">
        <h5 className="tabla-titulo">
          <i className="fas fa-box me-2"></i>
          Catálogo de Productos
        </h5>
        <div className="buscador-tabla">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Buscar producto..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="input-busqueda"
          />
        </div>
      </div>

      {/* Tabla responsive */}
      <div className="tabla-scroll">
        <Table hover className="tabla-personalizada">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.length > 0 ? (
              productosFiltrados.map((producto) => (
                <tr key={producto.id}>
                  {/* Columna de imagen */}
                  <td>
                    <img
                      src={producto.imagen}
                      alt={producto.nombre}
                      className="producto-imagen"
                    />
                  </td>

                  {/* Columna de nombre */}
                  <td className="producto-nombre">{producto.nombre}</td>

                  {/* Columna de categoría */}
                  <td>
                    <span className="badge-categoria">{producto.categoria}</span>
                  </td>

                  {/* Columna de precio */}
                  <td className="producto-precio">
                    ${producto.precio.toLocaleString('es-CL')}
                  </td>

                  {/* Columna de stock */}
                  <td>
                    <span className={`badge-stock ${producto.stock < 10 ? 'stock-bajo' : 'stock-ok'}`}>
                      {producto.stock} unidades
                    </span>
                  </td>

                  {/* Columna de acciones */}
                  <td className="text-center">
                    <button
                      className="btn-accion btn-editar"
                      onClick={() => manejarEditar(producto.id)}
                      title="Editar producto"
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn-accion btn-eliminar"
                      onClick={() => manejarEliminar(producto.id)}
                      title="Eliminar producto"
                    >
                      <i className="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center sin-resultados">
                  <i className="fas fa-search me-2"></i>
                  No se encontraron productos con "{busqueda}"
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Footer con contador */}
      <div className="tabla-footer">
        <p className="contador-productos">
          Mostrando {productosFiltrados.length} de {productos.length} productos
        </p>
      </div>
    </div>
  );
};

export default TablaProductos;
