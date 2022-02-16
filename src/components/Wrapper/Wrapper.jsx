import React from 'react';
import { Card } from '../Card/Card';
import './style.css';

export function Wrapper(props) {
    return (
        <div className="wrapper">
            <Card titulo="Titulo do card com param" texto="Esse é p texto do meu card"></Card>
            <Card titulo="Titulo do card com param" texto="Esse é p texto do meu card"></Card>
            <Card titulo="Titulo do card com param" texto="Esse é p texto do meu card"></Card>    
        </div>
    )
}