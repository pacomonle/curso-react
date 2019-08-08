import React from 'react';
import axios from 'axios';

class MedicamentosForm extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            nombre: "",
            id: null
        }
    }

    componentDidMount(){
    const {id} = this.props.match.params;
    
    if (id) {
        axios.get(`http://localhost:3001/medicamentos/${id}`).then(
            res => {
                console.log(res.data);
                this.setState({
                    nombre: res.data.name,
                    id: id
                })

            }
        )
    }

        
    }

    handleNombreChange = event => {
        this.setState ({
            nombre: event.target.value
        })
    }

    handleSave = event => {
        event.preventDefault();
        const newelement = {
            name: this.state.nombre
        };

        if (this.state.id) {
            axios.put(`http://localhost:3001/medicamentos/${this.state.id}`,newelement)
                .then (res => {
                console.log(res.data);
                this.props.history.push("/medicamentos");
            })
        } else {
            axios.post("http://localhost:3001/medicamentos", newelement).then(res => {
                console.log(res.data);
                this.props.history.push("/medicamentos");
            })
        }
    }


    render(){
        return (
            <div className="medicamentos-form">
                <form className="ui form">
                    <div className="field">
                        <label>Nombre del medicamento</label>
                        <input type="text" name="first-name" value={this.state.nombre}
                            onChange={this.handleNombreChange}
                            placeholder="Nombre del medicamento"></input>
                    </div>
                    <button className="ui primary button" 
                        onClick={this.handleSave}>Guardar</button>
                </form>
            </div>
        )
    }
}

export default MedicamentosForm;