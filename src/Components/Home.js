import React from 'react';
import { Link } from 'react-router-dom';
import Carrusel from './Carrusel';
import Cards from './Card';

function Home() {
    return (
        <div>
            <Carrusel/>
            <h1 className="text-center mb-4" style={{fontFamily: 'Dancing Script', color: '#8B4513'}}>
                Descuentos y Promociones
            </h1>
            <hr style={{color: '#8B4513', height: '10%', borderWidth: '10px'}} />

            <Cards />

        </div>
    );
}

export default Home;