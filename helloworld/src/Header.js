import React from 'react';

const Header = props => {
    console.log(props);
    return <h1 style={{color: props.estilos.color}}>
        {props.mensaje} es de color {props.estilos.color}</h1>
}

export default Header;