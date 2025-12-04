import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidemenu from '../Components/Dashboard/Sidemenu';
import TarjetaKPI from '../Components/Dashboard/TarjetaKPI';
import GraficoVentasZona from '../Components/Dashboard/GraficoVentasZona';
import GraficoCategorias from '../Components/Dashboard/GraficoCategorias';
import TablaProductos from '../Components/Dashboard/TablaProductos';
import TablaUsuarios from '../Components/Dashboard/TablaUsuarios';
import ComentariosRecientes from '../Components/Dashboard/ComentariosRecientes';

/**
 * Página principal del Dashboard de Administración
 * Vista privada para administradores con KPIs, gráficos y tablas de datos
 */
const Dashboard = () => {
  // Estado para controlar qué sección se muestra
  const [seccionActiva, setSeccionActiva] = useState('completo');
  // Estado para controlar si el sidemenu está abierto en móvil
  const [menuMovilAbierto, setMenuMovilAbierto] = useState(false);

  // Función para renderizar el contenido según la sección activa
  const renderizarContenido = () => {
    switch (seccionActiva) {
      case 'completo':
        return (
          <>
            {/* Sección de KPIs */}
            <section className="seccion-kpis">
              <Row className="g-4">
                <Col xs={12} sm={6} lg={3}>
                  <TarjetaKPI
                    tipo="ventas"
                    icono="fa-dollar-sign"
                    titulo="Ventas Totales"
                    colorIcono="#8B4513"
                  />
                </Col>
                <Col xs={12} sm={6} lg={3}>
                  <TarjetaKPI
                    tipo="producto"
                    icono="fa-trophy"
                    titulo="Producto Más Vendido"
                    colorIcono="#5D4037"
                  />
                </Col>
                <Col xs={12} sm={6} lg={3}>
                  <TarjetaKPI
                    tipo="usuarios"
                    icono="fa-users"
                    titulo="Usuarios Registrados"
                    colorIcono="#D2B48C"
                  />
                </Col>
                <Col xs={12} sm={6} lg={3}>
                  <TarjetaKPI
                    tipo="conversion"
                    icono="fa-chart-line"
                    titulo="Tasa de Conversión"
                    colorIcono="#A0522D"
                  />
                </Col>
              </Row>
            </section>

            {/* Sección de Gráficos */}
            <section className="seccion-graficos">
              <Row className="g-4">
                <Col xs={12} lg={8}>
                  <GraficoVentasZona />
                </Col>
                <Col xs={12} lg={4}>
                  <GraficoCategorias />
                </Col>
              </Row>
            </section>

            {/* Sección de Tablas y Listas */}
            <section className="seccion-tablas">
              <Row className="g-4">
                <Col xs={12}>
                  <TablaProductos />
                </Col>
                <Col xs={12}>
                  <TablaUsuarios />
                </Col>
                <Col xs={12}>
                  <ComentariosRecientes />
                </Col>
              </Row>
            </section>
          </>
        );

      case 'kpis':
        return (
          <section className="seccion-kpis">
            <Row className="g-4">
              <Col xs={12} sm={6} lg={3}>
                <TarjetaKPI
                  tipo="ventas"
                  icono="fa-dollar-sign"
                  titulo="Ventas Totales"
                  colorIcono="#8B4513"
                />
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <TarjetaKPI
                  tipo="producto"
                  icono="fa-trophy"
                  titulo="Producto Más Vendido"
                  colorIcono="#5D4037"
                />
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <TarjetaKPI
                  tipo="usuarios"
                  icono="fa-users"
                  titulo="Usuarios Registrados"
                  colorIcono="#D2B48C"
                />
              </Col>
              <Col xs={12} sm={6} lg={3}>
                <TarjetaKPI
                  tipo="conversion"
                  icono="fa-chart-line"
                  titulo="Tasa de Conversión"
                  colorIcono="#A0522D"
                />
              </Col>
            </Row>
          </section>
        );

      case 'graficos':
        return (
          <section className="seccion-graficos">
            <Row className="g-4">
              <Col xs={12} lg={8}>
                <GraficoVentasZona />
              </Col>
              <Col xs={12} lg={4}>
                <GraficoCategorias />
              </Col>
            </Row>
          </section>
        );

      case 'ventas-zona':
        return (
          <section className="seccion-graficos">
            <Row className="g-4">
              <Col xs={12}>
                <GraficoVentasZona />
              </Col>
            </Row>
          </section>
        );

      case 'categorias':
        return (
          <section className="seccion-graficos">
            <Row className="g-4">
              <Col xs={12} md={8} lg={6} className="mx-auto">
                <GraficoCategorias />
              </Col>
            </Row>
          </section>
        );

      case 'productos':
        return (
          <section className="seccion-tablas">
            <Row className="g-4">
              <Col xs={12}>
                <TablaProductos />
              </Col>
            </Row>
          </section>
        );

      case 'usuarios':
        return (
          <section className="seccion-tablas">
            <Row className="g-4">
              <Col xs={12}>
                <TablaUsuarios />
              </Col>
            </Row>
          </section>
        );

      case 'comentarios':
        return (
          <section className="seccion-tablas">
            <Row className="g-4">
              <Col xs={12}>
                <ComentariosRecientes />
              </Col>
            </Row>
          </section>
        );

      default:
        return <p>Sección no encontrada</p>;
    }
  };

  // Función para obtener el título según la sección activa
  const obtenerTitulo = () => {
    switch (seccionActiva) {
      case 'completo':
        return 'Panel de Administración';
      case 'kpis':
        return 'Indicadores Clave (KPIs)';
      case 'graficos':
        return 'Gráficos y Estadísticas';
      case 'ventas-zona':
        return 'Ventas por Zona Geográfica';
      case 'categorias':
        return 'Categorías Más Vendidas';
      case 'productos':
        return 'Catálogo de Productos';
      case 'usuarios':
        return 'Gestión de Usuarios';
      case 'comentarios':
        return 'Comentarios y Reseñas';
      default:
        return 'Panel de Administración';
    }
  };

  // Función para obtener el subtítulo según la sección activa
  const obtenerSubtitulo = () => {
    switch (seccionActiva) {
      case 'completo':
        return 'Bienvenido al panel de control de Pastelería Mil Sabores';
      case 'kpis':
        return 'Visualiza los indicadores clave de rendimiento de tu negocio';
      case 'graficos':
        return 'Análisis visual de ventas y categorías';
      case 'ventas-zona':
        return 'Distribución de ventas por ubicación geográfica';
      case 'categorias':
        return 'Productos más populares por categoría';
      case 'productos':
        return 'Administra tu inventario de productos';
      case 'usuarios':
        return 'Gestiona los usuarios registrados en el sistema';
      case 'comentarios':
        return 'Revisa las opiniones y comentarios de los clientes';
      default:
        return 'Bienvenido al panel de control';
    }
  };

  return (
    <div className="dashboard-layout">
      {/* Botón hamburguesa para móviles */}
      <button
        className="menu-hamburguesa"
        onClick={() => setMenuMovilAbierto(!menuMovilAbierto)}
        aria-label="Abrir menú"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Sidemenu */}
      <Sidemenu
        seccionActiva={seccionActiva}
        cambiarSeccion={(seccion) => {
          setSeccionActiva(seccion);
          setMenuMovilAbierto(false); // Cerrar menú al cambiar de sección en móvil
        }}
        menuMovilAbierto={menuMovilAbierto}
        cerrarMenuMovil={() => setMenuMovilAbierto(false)}
      />

      {/* Contenido Principal */}
      <div className="dashboard-principal mt-2">
        {/* Encabezado del Dashboard */}
        <div className="dashboard-header">
          <Container fluid>
            <Row className="align-items-center">
              <Col md={12}>
                <h1 className="dashboard-titulo">
                  <i className="fas fa-tachometer-alt me-3"></i>
                  {obtenerTitulo()}
                </h1>
                <p className="dashboard-subtitulo">
                  {obtenerSubtitulo()}
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Contenido Dinámico */}
        <Container fluid className="dashboard-contenido">
          {renderizarContenido()}
        </Container>

      </div>
    </div>
  );
};

export default Dashboard;
