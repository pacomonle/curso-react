import React from 'react';

class Comment extends React.Component {

  devuelveComentario(){
    return this.props.comentario;
  }
  
  componentDidMount(){
    console.log("montado");
  }

  render(){
    return (
        <div className="comment">
        <a className="avatar" href="http://google.com/">
          <img src={this.props.avatar} alt={this.props.nombre}></img>
        </a>
        <div className="content">
          <a className="author" href="http://google.com/">{this.props.nombre}</a>
          <div className="metadata">
            <span className="date">{this.props.hora}</span>
          </div>
          <div className="text">{this.devuelveComentario()}</div>
        </div>
      </div>
    )}
}

export default Comment;