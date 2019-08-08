import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Modal from '../Modal';

class MedicamentosList extends React.Component {


    constructor(props){
        super(props);
        this.state = {
            medicamentos: [],
            elementToDelete: null
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/medicamentos").then(
            res => {
                this.setState({
                    medicamentos: res.data,
                })
            }
        )
    }

    delete = id => {
        axios.delete(`http://localhost:3001/medicamentos/${id}/`).then(
            res => {
                const nuevosElementos = this.state.medicamentos.filter(i => (i.id !== id));
                console.log(nuevosElementos);
                this.setState({
                    medicamentos: nuevosElementos
                })
            }
        )
        this.setState({
            elementToDelete: null
        })
    }

    checkDelete = id => {
        this.setState({
            elementToDelete: id
        })
    }

    onDismiss = () =>{
        this.setState({
            elementToDelete: null
        })
    }

    render() {
        return (
            <div className="medicamentos-list">
                { this.state.elementToDelete ? 
                    <Modal content="¿Está seguro de querer borrar?" onDismiss={this.onDismiss} 
                    actions=
                    {
                        <>
                            <button className="ui negative button" 
                                onClick={() => this.delete(this.state.elementToDelete)}>Borrar</button>
                            <button className="ui button" onClick={this.onDismiss}>Cancelar</button>
                        </>
                    }>
                    </Modal> :
                    null }
                   
            <Link id="medicamentos" className="ui primary button"
                to="/medicamentos/add">
                     <i className="icon plus"></i>Añadir
            </Link>

            <table className="ui red table">
  <thead>
    <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th></th>
  </tr>
  </thead>
  <tbody>
    {this.state.medicamentos.map(
        item => {
            return (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td style={{textAlign: "right"}}>
                        <Link className="ui primary button" to={`/medicamentos/${item.id}/edit`} >
                        <i className="edit icon"></i>Editar</Link>
                        <button className="ui red button" onClick={event => this.checkDelete(item.id) }>Borrar</button>
                    </td>
                </tr>
            )
        }
    )}
  </tbody>
</table>
</div>
        )
    }
}

export default MedicamentosList