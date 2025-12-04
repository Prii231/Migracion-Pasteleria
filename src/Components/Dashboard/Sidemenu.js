import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de Menú Lateral para el Dashboard
 * Permite navegar entre las diferentes secciones del panel de administración
 */
function Sidemenu({ seccionActiva, cambiarSeccion, menuMovilAbierto, cerrarMenuMovil }) {
  const [menuAbierto, setMenuAbierto] = useState(true);

  // Función para manejar el cambio de sección
  const manejarClickSeccion = (seccion) => {
    cambiarSeccion(seccion);
  };

  return (
    <>
      <aside className={`sidemenu-dashboard ${menuAbierto ? 'abierto' : 'cerrado'} ${menuMovilAbierto ? 'movil-abierto' : ''}`}>
      {/* Logo/Marca */}
      <div className="sidemenu-brand">
        <i className="fas fa-birthday-cake sidemenu-brand-icono"></i>
        <span className="sidemenu-brand-texto">Mil Sabores Admin</span>
      </div>

      {/* Panel de Usuario */}
      <div className="sidemenu-usuario-panel">
        <div className="usuario-avatar-sidemenu">
          <i className="fas fa-user-shield"></i>
        </div>
        <div className="usuario-info-sidemenu">
          <span className="usuario-nombre-sidemenu">Administrador</span>
          <span className="usuario-rol-sidemenu">Panel de Control</span>
        </div>
      </div>

      {/* Menú de Navegación */}
      <nav className="sidemenu-nav">
        <ul className="sidemenu-lista">
          {/* Botón para volver al Home */}
          <li className="sidemenu-item">
            <Link to="/" className="sidemenu-link sidemenu-link-home">
              <i className="fas fa-home sidemenu-icono"></i>
              <span className="sidemenu-texto">Volver al Inicio</span>
            </Link>
          </li>

          {/* Dashboard Principal */}
          <li className="sidemenu-header">
            <i className="fas fa-chart-line me-2"></i>
            PANEL PRINCIPAL
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'completo' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link"
              onClick={() => manejarClickSeccion('completo')}
            >
              <i className="fas fa-tachometer-alt sidemenu-icono"></i>
              <span className="sidemenu-texto">Dashboard Completo</span>
            </button>
          </li>

          {/* Sección de KPIs */}
          <li className="sidemenu-header">
            <i className="fas fa-chart-bar me-2"></i>
            INDICADORES
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'kpis' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link"
              onClick={() => manejarClickSeccion('kpis')}
            >
              <i className="fas fa-chart-pie sidemenu-icono"></i>
              <span className="sidemenu-texto">KPIs</span>
            </button>
          </li>

          {/* Sección de Gráficos */}
          <li className="sidemenu-header">
            <i className="fas fa-chart-area me-2"></i>
            ESTADÍSTICAS
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'graficos' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link"
              onClick={() => manejarClickSeccion('graficos')}
            >
              <i className="fas fa-chart-bar sidemenu-icono"></i>
              <span className="sidemenu-texto">Gráficos</span>
            </button>
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'ventas-zona' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link sidemenu-sub"
              onClick={() => manejarClickSeccion('ventas-zona')}
            >
              <i className="fas fa-map-marked-alt sidemenu-icono"></i>
              <span className="sidemenu-texto">Ventas por Zona</span>
            </button>
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'categorias' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link sidemenu-sub"
              onClick={() => manejarClickSeccion('categorias')}
            >
              <i className="fas fa-tags sidemenu-icono"></i>
              <span className="sidemenu-texto">Categorías Vendidas</span>
            </button>
          </li>

          {/* Sección de Gestión */}
          <li className="sidemenu-header">
            <i className="fas fa-cogs me-2"></i>
            GESTIÓN
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'productos' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link"
              onClick={() => manejarClickSeccion('productos')}
            >
              <i className="fas fa-box sidemenu-icono"></i>
              <span className="sidemenu-texto">Catálogo Productos</span>
            </button>
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'usuarios' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link"
              onClick={() => manejarClickSeccion('usuarios')}
            >
              <i className="fas fa-users sidemenu-icono"></i>
              <span className="sidemenu-texto">Usuarios</span>
            </button>
          </li>

          <li className={`sidemenu-item ${seccionActiva === 'comentarios' ? 'activo' : ''}`}>
            <button
              className="sidemenu-link"
              onClick={() => manejarClickSeccion('comentarios')}
            >
              <i className="fas fa-comments sidemenu-icono"></i>
              <span className="sidemenu-texto">Comentarios</span>
            </button>
          </li>
        </ul>
      </nav>

      {/* Botón para colapsar/expandir el menú */}
      <button
        className="sidemenu-toggle"
        onClick={() => setMenuAbierto(!menuAbierto)}
        title={menuAbierto ? 'Colapsar menú' : 'Expandir menú'}
      >
        <i className={`fas ${menuAbierto ? 'fa-angle-left' : 'fa-angle-right'}`}></i>
      </button>
    </aside>

      {/* Overlay para cerrar el menú en móvil al hacer clic fuera */}
      {menuMovilAbierto && (
        <div
          className="sidemenu-overlay-movil"
          onClick={cerrarMenuMovil}
          aria-label="Cerrar menú"
        ></div>
      )}
    </>
  );
}

export default Sidemenu;
