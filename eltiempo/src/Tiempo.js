import React from 'react';
import './Tiempo.css'

const Tiempo = props => {
 
 const meses =    [
    "Enero",
    "Febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
]   


    const isInvierno = props.is_invierno();

    return (
        <div className="tiempo">
            <img
             alt="imagen del sol o nieve"
             src={isInvierno ? "https://cdn3.iconfinder.com/data/icons/weather-16/256/Snowflake-512.png"
             : "https://cdn3.iconfinder.com/data/icons/symbol-1-1/36/12-512.png"}></img>
            <h1>{
                props.is_invierno() ? "Es invierno" : "Es verano"
            }</h1> 
            <p>El mes es {meses[props.mes-1]}</p>
        </div>
    )
}

export default Tiempo;