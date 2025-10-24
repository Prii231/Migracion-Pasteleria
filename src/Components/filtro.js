import React from 'react';


function FiltroProductos () {
    return (
        <section className="container my-4">
            <div className="filter-container">
                <div className="text-center">
                    <button 
                        className="btn filtro-boton botones my-2" 
                        style={{ borderRadius: '50px' }} 
                        data-filter="all"
                    >
                        Todos los productos
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }}
                        data-filter="torta-cuadrada"
                    >
                        Tortas Cuadradas
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }}
                        data-filter="torta-circular"
                    >
                        Tortas Circulares
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }}
                        data-filter="postre-individual"
                    >
                        Postres Individuales
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }} 
                        data-filter="sin-azucar"
                    >
                        Sin Azúcar
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }}
                        data-filter="pasteleria-tradicional"
                    >
                        Pastelería Tradicional
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }} 
                        data-filter="sin-gluten"
                    >
                        Sin Gluten
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }}
                        data-filter="vegano"
                    >
                        Veganos
                    </button>
                    <button 
                        className="btn filtro-boton botones" 
                        style={{ borderRadius: '50px' }} 
                        data-filter="especial"
                    >
                        Tortas Especiales
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FiltroProductos;