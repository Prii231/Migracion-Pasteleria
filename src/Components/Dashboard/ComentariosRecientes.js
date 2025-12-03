import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Componente de Widget de Comentarios Recientes
 * Muestra un feed de los últimos reviews/comentarios de usuarios
 * Obtiene sus propios datos desde la API
 */
const ComentariosRecientes = () => {
  const [comentarios, setComentarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Cargar datos al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3001/api/comentarios');
        setComentarios(respuesta.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar comentarios:', error);
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Si no hay comentarios, mostrar mensaje
  if (cargando) {
    return (
      <div className="comentarios-contenedor">
        <h5 className="comentarios-titulo">
          <i className="fas fa-comments me-2"></i>
          Comentarios Recientes
        </h5>
        <div className="sin-comentarios">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!comentarios || comentarios.length === 0) {
    return (
      <div className="comentarios-contenedor">
        <h5 className="comentarios-titulo">
          <i className="fas fa-comments me-2"></i>
          Comentarios Recientes
        </h5>
        <div className="sin-comentarios">
          <i className="fas fa-comment-slash"></i>
          <p>No hay comentarios disponibles</p>
        </div>
      </div>
    );
  }

  // Función para formatear fecha relativa (hace X días)
  const formatearFechaRelativa = (fecha) => {
    const ahora = new Date();
    const fechaComentario = new Date(fecha);
    const diferenciaMs = ahora - fechaComentario;
    const diferenciaDias = Math.floor(diferenciaMs / (1000 * 60 * 60 * 24));

    if (diferenciaDias === 0) return 'Hoy';
    if (diferenciaDias === 1) return 'Ayer';
    if (diferenciaDias < 7) return `Hace ${diferenciaDias} días`;
    if (diferenciaDias < 30) return `Hace ${Math.floor(diferenciaDias / 7)} semanas`;
    return `Hace ${Math.floor(diferenciaDias / 30)} meses`;
  };

  // Función para renderizar estrellas de calificación
  const renderizarEstrellas = (calificacion) => {
    const estrellas = [];
    for (let i = 1; i <= 5; i++) {
      estrellas.push(
        <i
          key={i}
          className={`fas fa-star ${i <= calificacion ? 'estrella-llena' : 'estrella-vacia'}`}
        ></i>
      );
    }
    return estrellas;
  };

  return (
    <div className="comentarios-contenedor">
      {/* Título del widget */}
      <h5 className="comentarios-titulo">
        <i className="fas fa-comments me-2"></i>
        Comentarios Recientes
      </h5>

      {/* Feed de comentarios */}
      <div className="comentarios-feed">
        {comentarios.map((comentario) => (
          <div key={comentario.id} className="comentario-item">
            {/* Encabezado del comentario */}
            <div className="comentario-header">
              <div className="usuario-info">
                <div className="usuario-avatar">
                  {comentario.nombreUsuario.charAt(0).toUpperCase()}
                </div>
                <div className="usuario-detalle">
                  <h6 className="usuario-nombre">{comentario.nombreUsuario}</h6>
                  <span className="comentario-fecha">
                    {formatearFechaRelativa(comentario.fecha)}
                  </span>
                </div>
              </div>
              <div className="calificacion">
                {renderizarEstrellas(comentario.calificacion)}
              </div>
            </div>

            {/* Producto comentado */}
            {comentario.producto && (
              <div className="producto-comentado">
                <i className="fas fa-shopping-bag me-1"></i>
                {comentario.producto}
              </div>
            )}

            {/* Contenido del comentario */}
            <p className="comentario-texto">
              {comentario.comentario}
            </p>

            {/* Footer con acciones */}
            <div className="comentario-footer">
              <button className="btn-comentario-accion" title="Responder">
                <i className="fas fa-reply"></i>
                Responder
              </button>
              <button className="btn-comentario-accion" title="Marcar como útil">
                <i className="fas fa-thumbs-up"></i>
                Útil
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Ver más */}
      <div className="comentarios-footer">
        <button className="btn-ver-mas">
          Ver todos los comentarios
          <i className="fas fa-arrow-right ms-2"></i>
        </button>
      </div>
    </div>
  );
};

export default ComentariosRecientes;
