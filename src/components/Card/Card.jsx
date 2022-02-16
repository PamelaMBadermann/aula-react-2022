import React from 'react';
import './style.css';

function Card(props) {
    return (
        <div className="card">
            <p>{props.texto}</p>
            <h4>{props.titulo}</h4>
        </div>
    )
}

export { Card };