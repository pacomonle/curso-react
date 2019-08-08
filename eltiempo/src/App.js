import React from 'react';
import Tiempo from './Tiempo';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            location: null,
            mensaje: "Solicitando geolocalización"
        }
    }

    isInvierno = () =>  {
        const isHemisferioNorte = this.state.location.coords.latitude > 0;
        console.log(this.state.location);
        console.log (isHemisferioNorte);
        return (
            ((this.monthToday() >=4 && this.monthToday()<=10) && isHemisferioNorte) ||
            ((this.monthToday() <4 || this.monthToday()>10) && !isHemisferioNorte)
            ? false :true)
    };

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(
            res=> {
                this.setState({
                    location: res
                });
            }, this.onLocationError

        );
    }

    onLocationError = res => {
        console.log(res);
        this.setState(
            {
                mensaje: "No se ha podido geolocalizar"
            }
        )
    }



    monthToday = () => {
        return (new Date()).getMonth()+1;
    }
    

    render(){

        const waiting = <h1>{this.state.mensaje}</h1>

        if (this.state.location) {
            return (
                <div className="app">
                    <Tiempo mes={this.monthToday()} 
                    is_invierno={this.isInvierno}></Tiempo>
                </div>
            )
        } else {
            return waiting
        }
        
   
    }

}

export default App;