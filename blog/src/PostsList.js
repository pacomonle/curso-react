import React from 'react';
import axios from 'axios';

class PostsList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            users: []
        }
    }

    componentDidMount(){

         Promise.all(
            [axios.get("https://jsonplaceholder.typicode.com/posts"),
            axios.get("https://jsonplaceholder.typicode.com/users")]).then(
             result => {
                 console.log(result);
                this.setState({
                    posts: result[0].data,
                    users: result[1].data
                })
             }
        )
        // axios.get("https://jsonplaceholder.typicode.com/posts")
        // .then(
                
        //     res => {
        //         this.setState ( {
        //             posts: res.data
        //         })
        //         return axios.get("https://jsonplaceholder.typicode.com/users")
        //     }
            
        // ).then(
        //     res => this.setState( {
        //         users: res.data
        //     }))
        // .catch(console.log)
    }


 

    render() {



        return (
            <div className="posts-list">
                <div className="ui relaxed divided list">
                {
                    
                    this.state.posts.map(
                        item => {
                            const usuario =  this.state.users.filter(user=>{ return user.id === item.userId})[0];
                            return (
                                <div className="item" key={item.id}>
                                    <i className="large github middle aligned icon"></i>
                                    <div className="content">
                                    <a href="#" className="header" 
                                        onClick={ event => this.props.handlePostClick(item)}>{item.title}</a>
                                    <div className="description">{
                                        (usuario? usuario.name:"")
                                        }</div>
                                    </div>
                                </div>
                            )
                        }
                    )
                }


                </div>
            </div>
        )
    }
}

export default PostsList;