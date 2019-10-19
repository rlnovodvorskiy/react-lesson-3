import React, { Component } from 'react';
import User from './User';
import ErrorMessage from './ErrorMessage';
import InstaService from '../services/instaservice';

export default class Posts extends Component {
    InstaService = new InstaService();
    state = {
        posts:  [],
        error: false
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.updatePosts();
    }

    updatePosts() {
        console.log("start");
        console.log(this.state);       
        this.InstaService.getAllPosts()
        .then(this.onPostsloaded)
        .catch(this.onError);
    }
    // Стрелочные функции используются для сохранения контекста
    onPostsLoaded = (posts) => {
        console.log("onPostsLoaded");
        console.log(posts);
        this.setState({
            posts: posts,
            error: false
        })
        console.log(this.state);
    }

    onError = (err) => {
        console.log("error");
        this.setState({            
            error: true
        })
    }

    renderItems(arr) {  
        console.log(arr); 
        return arr.map( (item) => {
            const {name, altname, photo, src, alt, descr, id} = item;
            return (
                <div key={id} className="post">
                    <User name={name} src={photo} alt={altname} min />
                    <img src={src} alt={alt}></img>
                    <div className="post__name">
                        {name}
                    </div>
                    <div className="post_desc">
                        {descr}
                    </div>
                </div>
            )
        });    
    }    

    render() {
        const {error, posts} = this.state;
        if (error) {
            return <ErrorMessage/>
        }

        {console.log(this.state);}
        const items = this.renderItems(posts);
        return (
           
            <div className="left"> 
                {items}
            </div>
        )
    }
}