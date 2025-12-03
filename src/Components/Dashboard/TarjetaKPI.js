import React, { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Componente de Tarjeta KPI (Key Performance Indicator)
 * Muestra un indicador clave de rendimiento con icono, título, valor y descripción
 * Obtiene sus propios datos desde la API
 */
const TarjetaKPI = ({ tipo, icono, titulo, colorIcono = '#8B4513' }) => {
  const [datos, setDatos] = useState(null);
  const [cargando, setCargando] = useState(true);

  // Cargar datos al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3001/api/kpis');
        setDatos(respuesta.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar KPIs:', error);
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Función para obtener el valor según el tipo de KPI
  const obtenerValor = () => {
    if (!datos) return '...';

    switch (tipo) {
      case 'ventas':
        return `$${datos.ventasTotales?.toLocaleString('es-CL') || '0'}`;
      case 'producto':
        return datos.productoMasVendido || 'N/A';
      case 'usuarios':
        return datos.totalUsuarios || 0;
      case 'conversion':
        return `${datos.tasaConversion || 0}%`;
      default:
        return 'N/A';
    }
  };

  // Función para obtener la descripción según el tipo
  const obtenerDescripcion = () => {
    if (!datos) return '';

    switch (tipo) {
      case 'ventas':
        return 'Del mes actual';
      case 'producto':
        return `${datos.cantidadVendida || 0} unidades`;
      case 'usuarios':
        return `+${datos.nuevosUsuariosMes || 0} este mes`;
      case 'conversion':
        return 'Del total de visitas';
      default:
        return '';
    }
  };

  return (
    <div className="tarjeta-kpi">
      {/* Sección del icono */}
      <div className="kpi-icono" style={{ backgroundColor: `${colorIcono}20` }}>
        <i className={`fas ${icono}`} style={{ color: colorIcono }}></i>
      </div>

      {/* Sección del contenido */}
      <div className="kpi-contenido">
        <h6 className="kpi-titulo">{titulo}</h6>
        <h2 className="kpi-valor">{cargando ? '...' : obtenerValor()}</h2>
        <p className="kpi-descripcion">{obtenerDescripcion()}</p>
      </div>
    </div>
  );
};

export default TarjetaKPI;
