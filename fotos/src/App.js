import React from 'react';
import Fotos from './Fotos';
import Search from './Search';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            q: ""
        }
    }

    onSearchChange = q => {
        console.log("busqueda");
        console.log(q);
        this.setState( {
            q
        })
    }

    render() {
        return (
            <div className="app">
                <Search search={this.onSearchChange}></Search>
                <Fotos query={this.state.q}></Fotos>
            </div>
        

        )
    }
}

export default App;