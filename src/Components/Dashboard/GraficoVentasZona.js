import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';

/**
 * Componente de Gráfico de Barras para Ventas por Zona Geográfica
 * Muestra las ventas organizadas por zona en un gráfico de barras
 * Obtiene sus propios datos desde la API
 */
const GraficoVentasZona = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Cargar datos al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3001/api/ventas-zona');
        setDatos(respuesta.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar ventas por zona:', error);
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Si no hay datos, mostrar mensaje
  if (cargando) {
    return (
      <div className="grafico-contenedor">
        <h5 className="grafico-titulo">Ventas por Zona Geográfica</h5>
        <div className="sin-datos">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!datos || datos.length === 0) {
    return (
      <div className="grafico-contenedor">
        <h5 className="grafico-titulo">Ventas por Zona Geográfica</h5>
        <div className="sin-datos">
          <i className="fas fa-chart-bar"></i>
          <p>No hay datos disponibles</p>
        </div>
      </div>
    );
  }

  // Tooltip personalizado
  const TooltipPersonalizado = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="tooltip-personalizado">
          <p className="tooltip-zona">{payload[0].payload.zona}</p>
          <p className="tooltip-valor">
            Ventas: <strong>${payload[0].value.toLocaleString('es-CL')}</strong>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grafico-contenedor">
      {/* Título del gráfico */}
      <h5 className="grafico-titulo">
        <i className="fas fa-chart-bar me-2"></i>
        Ventas por Zona Geográfica
      </h5>

      {/* Gráfico de barras responsive */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={datos}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          {/* Grid de fondo */}
          <CartesianGrid strokeDasharray="3 3" stroke="#D2B48C" opacity={0.3} />

          {/* Eje X (zonas) */}
          <XAxis
            dataKey="zona"
            stroke="#5D4037"
            style={{ fontSize: '12px', fontFamily: 'Poppins' }}
            angle={-15}
            textAnchor="end"
            height={60}
          />

          {/* Eje Y (valores) */}
          <YAxis
            stroke="#5D4037"
            style={{ fontSize: '12px', fontFamily: 'Poppins' }}
            tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
          />

          {/* Tooltip al pasar el mouse */}
          <Tooltip content={<TooltipPersonalizado />} />

          {/* Leyenda */}
          <Legend
            wrapperStyle={{ fontFamily: 'Poppins', fontSize: '12px', color: '#5D4037' }}
          />

          {/* Barra de datos */}
          <Bar
            dataKey="ventas"
            fill="#8B4513"
            radius={[8, 8, 0, 0]}
            name="Ventas Totales"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoVentasZona;
