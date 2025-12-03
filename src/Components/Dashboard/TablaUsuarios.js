import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

/**
 * Componente de Tabla de Usuarios Registrados
 * Muestra la lista de usuarios con opciones de búsqueda y gestión
 * Obtiene sus propios datos desde la API
 */
const TablaUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [busqueda, setBusqueda] = useState('');

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

  // Si no hay usuarios, mostrar mensaje
  if (cargando) {
    return (
      <div className="tabla-contenedor">
        <h5 className="tabla-titulo">Lista de Usuarios</h5>
        <div className="sin-datos-tabla">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!usuarios || usuarios.length === 0) {
    return (
      <div className="tabla-contenedor">
        <h5 className="tabla-titulo">Lista de Usuarios</h5>
        <div className="sin-datos-tabla">
          <i className="fas fa-users"></i>
          <p>No hay usuarios registrados</p>
        </div>
      </div>
    );
  }

  // Filtrar usuarios según la búsqueda
  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    usuario.email.toLowerCase().includes(busqueda.toLowerCase())
  );

  // Función para formatear fecha
  const formatearFecha = (fecha) => {
    const date = new Date(fecha);
    return date.toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Función para manejar acciones
  const manejarVer = (id) => {
    console.log('Ver detalles del usuario:', id);
    // Aquí iría la lógica para ver detalles
  };

  const manejarCambiarEstado = (id, estadoActual) => {
    console.log('Cambiar estado del usuario:', id, 'Estado actual:', estadoActual);
    // Aquí iría la lógica para activar/desactivar usuario
  };

  return (
    <div className="tabla-contenedor">
      {/* Encabezado con título y buscador */}
      <div className="tabla-header">
        <h5 className="tabla-titulo">
          <i className="fas fa-users me-2"></i>
          Lista de Usuarios Registrados
        </h5>
        <div className="buscador-tabla">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Buscar usuario..."
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
              <th>Nombre</th>
              <th>Email</th>
              <th>Fecha Registro</th>
              <th>Estado</th>
              <th className="text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuariosFiltrados.length > 0 ? (
              usuariosFiltrados.map((usuario) => (
                <tr key={usuario.id}>
                  {/* Columna de nombre */}
                  <td className="usuario-nombre">
                    <i className="fas fa-user-circle me-2" style={{ color: '#8B4513' }}></i>
                    {usuario.nombre}
                  </td>

                  {/* Columna de email */}
                  <td className="usuario-email">{usuario.email}</td>

                  {/* Columna de fecha */}
                  <td className="usuario-fecha">
                    {formatearFecha(usuario.fechaRegistro)}
                  </td>

                  {/* Columna de estado */}
                  <td>
                    <span className={`badge-estado ${usuario.estado === 'activo' ? 'estado-activo' : 'estado-inactivo'}`}>
                      {usuario.estado === 'activo' ? (
                        <>
                          <i className="fas fa-check-circle me-1"></i>
                          Activo
                        </>
                      ) : (
                        <>
                          <i className="fas fa-times-circle me-1"></i>
                          Inactivo
                        </>
                      )}
                    </span>
                  </td>

                  {/* Columna de acciones */}
                  <td className="text-center">
                    <button
                      className="btn-accion btn-ver"
                      onClick={() => manejarVer(usuario.id)}
                      title="Ver detalles"
                    >
                      <i className="fas fa-eye"></i>
                    </button>
                    <button
                      className={`btn-accion ${usuario.estado === 'activo' ? 'btn-desactivar' : 'btn-activar'}`}
                      onClick={() => manejarCambiarEstado(usuario.id, usuario.estado)}
                      title={usuario.estado === 'activo' ? 'Desactivar' : 'Activar'}
                    >
                      <i className={`fas ${usuario.estado === 'activo' ? 'fa-ban' : 'fa-check'}`}></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center sin-resultados">
                  <i className="fas fa-search me-2"></i>
                  No se encontraron usuarios con "{busqueda}"
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>

      {/* Footer con contador */}
      <div className="tabla-footer">
        <p className="contador-productos">
          Mostrando {usuariosFiltrados.length} de {usuarios.length} usuarios
        </p>
      </div>
    </div>
  );
};

export default TablaUsuarios;
