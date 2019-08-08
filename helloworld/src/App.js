import React from 'react';
import './App.css';
import Header from './Header'

const App = () => {



    const getTime = () => {
        return (new Date()).toLocaleTimeString();
    }

    return (
        <div className="app">
            <Header mensaje="Hola Clase" 
                estilos={{color: "blue"}}></Header>
            <div className="time">{getTime()}</div>
        </div>
        )
}

export default App;