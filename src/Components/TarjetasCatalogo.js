import React from 'react';


function ProductCard({ imagen, titulo, descripcion, precio }) {
    return (
        <Card>
            <Card.Img src={imagen} />        
            <Card.Title>{titulo}</Card.Title> 
            <Card.Text>{descripcion}</Card.Text>
            <p>{precio}</p>
        </Card>
    );
}