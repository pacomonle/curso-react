import React from 'react';
import socketIOClient from 'socket.io-client';


class App extends React.Component{


  socket=null;

  constructor(props){
    super(props);
    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001",
      mensaje: ""
    }
    this.socket = socketIOClient(this.state.endpoint);
  }

  onMensajeChange = e => {
    this.setState({
      mensaje: e.target.value
    })
    this.socket.emit("chat",{writing: true, userName:"Alfonso"});
  }

  componentDidMount(){
    //this.socket = socketIOClient(this.state.endpoint);
    this.socket.on("chat", data =>{console.log(data); this.setState({response: data})});
  }

  render() {
    return (
      <>
      {(this.state.response === "receipt"? <small>Recibido</small>:null)}
      <p>Mensaje recibido... {this.state.response}</p>
      <input value={this.state.mensaje} onChange={this.onMensajeChange}></input>
      <button onClick={e=>{
        this.socket.emit("chat",this.state.mensaje);
      }}>Enviar mensaje</button>
      </>
    )
  }
}

export default App;
