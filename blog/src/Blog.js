import React from 'react';
import PostsList from './PostsList';
import {PostDetail as Detail} from './PostsListItem'

class Blog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: null
        }
    }

    handlePostClick = item => {
        console.log(item);
        this.setState({
            selected: item
        })
    }

    render() {
        return (
            <div className="blog ui container">
                <div className="ui grid">
                    <div className="four wide column">
                    <PostsList handlePostClick={this.handlePostClick}></PostsList>
                    </div>
                    <div className="twelve wide column">
                       {this.state.selected ? <Detail item={this.state.selected}>
                          
                       </Detail>:""}
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Blog;