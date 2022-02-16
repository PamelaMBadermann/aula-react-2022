import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper } from '../../components/Wrapper/Wrapper';

export const Cards = () => {
    return (
        <>
            <Wrapper />
            {/* <a href="/">Ir para Login</a> */}
            <Link to={'/login'}>Ir para login</Link>
        </>
    )
}