import React from 'react';

class Search extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            query: ""
        }
    }

    handleSearchChange = event => {
        console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.search(this.state.query);

    }

    render() {
        return (
            <div className="search">
                <input value={this.state.query}
                onChange={this.handleSearchChange}
                name="query"></input>

            </div>

        )
    }
}

export default Search;