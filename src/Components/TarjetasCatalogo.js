import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function TarjetasCatalogo({ imagen, titulo, descripcion, precio, categoria }) {
    return (
        <Card style={{ width: '70%' }} data-category={categoria}>
            <Card.Img variant="top" src={imagen} alt={titulo} />
            <Card.Body>
                <Card.Title style={{ fontFamily: 'Dancing Script', fontSize: '160%' }}>
                    {titulo}
                </Card.Title>
                <Card.Text>
                    {descripcion}
                </Card.Text>
                <h4>
                    <p style={{ color: '#8B4513' }}>{precio}</p>
                </h4>
                <Button as={Link} to="#" variant="" className="botones">
                    Agregar al Carrito
                </Button>
            </Card.Body>
        </Card>
    );
}

export default TarjetasCatalogo;