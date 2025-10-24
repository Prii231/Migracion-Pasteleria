import React from 'react';


function filtro() {
    return (
        <section class="container my-4">
            <div class="filter-container">
                <div class="text-center">
                    <button class="btn filtro-boton botones my-2" style="border-radius: 50px;" data-filter="all">Todos los
                        productos</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;"
                        data-filter="torta-cuadrada">Tortas Cuadradas</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;"
                        data-filter="torta-circular">Tortas Circulares</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;"
                        data-filter="postre-individual">Postres Individuales</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;" data-filter="sin-azucar">Sin
                        Azúcar</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;"
                        data-filter="pasteleria-tradicional">Pastelería Tradicional</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;" data-filter="sin-gluten">Sin
                        Gluten</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;"
                        data-filter="vegano">Veganos</button>
                    <button class="btn filtro-boton botones" style="border-radius: 50px;" data-filter="especial">Tortas
                        Especiales</button>
                </div>
            </div>
        </section>
    );
}
export default filtro;