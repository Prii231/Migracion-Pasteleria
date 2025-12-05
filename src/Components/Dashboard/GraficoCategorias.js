import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';


const GraficoCategorias = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  // Colores para las diferentes categorías (paleta café/beige)
  const COLORES_CATEGORIAS = [
    '#8B4513', // Café oscuro
    '#D2B48C', // Tan
    '#A0522D', // Sienna
    '#DEB887', // BurlyWood
    '#5D4037', // Café muy oscuro
    '#CDAA7D', // Dorado oscuro
  ];

  // Cargar datos al montar el componente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const respuesta = await axios.get('http://localhost:3001/api/categorias-vendidas');
        setDatos(respuesta.data);
        setCargando(false);
      } catch (error) {
        console.error('Error al cargar categorías:', error);
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // Si no hay datos, mostrar mensaje
  if (cargando) {
    return (
      <div className="grafico-contenedor">
        <h5 className="grafico-titulo">Categorías Más Vendidas</h5>
        <div className="sin-datos">
          <p>Cargando...</p>
        </div>
      </div>
    );
  }

  if (!datos || datos.length === 0) {
    return (
      <div className="grafico-contenedor">
        <h5 className="grafico-titulo">Categorías Más Vendidas</h5>
        <div className="sin-datos">
          <i className="fas fa-chart-pie"></i>
          <p>No hay datos disponibles</p>
        </div>
      </div>
    );
  }

  // Tooltip personalizado
  const TooltipPersonalizado = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const porcentaje = ((payload[0].value / datos.reduce((acc, item) => acc + item.cantidad, 0)) * 100).toFixed(1);
      return (
        <div className="tooltip-personalizado">
          <p className="tooltip-categoria">{payload[0].name}</p>
          <p className="tooltip-valor">
            Cantidad: <strong>{payload[0].value}</strong>
          </p>
          <p className="tooltip-porcentaje">{porcentaje}%</p>
        </div>
      );
    }
    return null;
  };

  // Etiquetas personalizadas en el gráfico
  const renderizarEtiqueta = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Solo mostrar etiqueta si el porcentaje es mayor al 5%
    if (percent < 0.05) return null;

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        style={{ fontSize: '14px', fontWeight: 'bold', fontFamily: 'Poppins' }}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="grafico-contenedor">
      {/* Título del gráfico */}
      <h5 className="grafico-titulo">
        <i className="fas fa-chart-pie me-2"></i>
        Categorías Más Vendidas
      </h5>

      {/* Gráfico de torta responsive */}
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={datos}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderizarEtiqueta}
            outerRadius={100}
            fill="#8884d8"
            dataKey="cantidad"
            nameKey="categoria"
          >
            {/* Asignar colores a cada sección */}
            {datos.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORES_CATEGORIAS[index % COLORES_CATEGORIAS.length]} />
            ))}
          </Pie>

          {/* Tooltip al pasar el mouse */}
          <Tooltip content={<TooltipPersonalizado />} />

          {/* Leyenda */}
          <Legend
            verticalAlign="bottom"
            height={36}
            wrapperStyle={{ fontFamily: 'Poppins', fontSize: '12px', color: '#5D4037' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoCategorias;
