import React from 'react';
import Unsplash, { toJson } from 'unsplash-js';


class Fotos extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            fotos: []
        }
    }  

    componentDidMount() {
        this.getFotos(this.props.query);
    }

    componentWillReceiveProps(nextProps) {
        this.getFotos(nextProps.query);
    }

    getFotos = q => {
        const unsplash = new Unsplash({
            applicationId: "a814db13f4da938d66d01e14a744aca2ee702d72496cfff4ce2ceb4ac6566a0c",
            secret: "3943dc9b465800e30640338dacf59b86116c4001f77829f150d1ce1c38ab4a27"
          });        
          unsplash.search.photos(q, 1)
            .then(toJson)
            .then(json => {
                console.log(json.results)
                this.setState({
                    fotos:json.results
                })
            });

    }

    render() {
        return (
            <div className="fotos">
            {
                this.state.fotos.map(
                    (item, index) =>  {
                        return <img key={item.id} src={item.urls.small} alt="{item.alt}"
                            style={ {maxHeight: '15rem'} }></img>
                    }
                )
            }
            </div>
        )
    }
}

export default Fotos;