import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
  return (
    <div className="dashboard-principal">
      {/* Encabezado del Dashboard */}
      <div className="dashboard-header">
        <Container fluid>
          <Row className="align-items-center">
            <Col md={12}>
              <h1 className="dashboard-titulo">
                <i className="fas fa-tachometer-alt me-3"></i>
                Panel de Administración
              </h1>
              <p className="dashboard-subtitulo">
                Bienvenido al panel de control de Pastelería Mil Sabores
              </p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Contenido Principal */}
      <Container fluid className="dashboard-contenido">
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
            {/* Tabla de Productos */}
            <Col xs={12}>
              <TablaProductos />
            </Col>

            {/* Tabla de Usuarios */}
            <Col xs={12}>
              <TablaUsuarios />
            </Col>

            {/* Widget de Comentarios */}
            <Col xs={12}>
              <ComentariosRecientes />
            </Col>
          </Row>
        </section>
      </Container>

      {/* Footer del Dashboard */}
      <div className="dashboard-footer">
        <Container fluid>
          <Row>
            <Col className="text-center">
              <p className="footer-texto">
                Panel de Administración - Pastelería Mil Sabores © 2025
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Dashboard;
