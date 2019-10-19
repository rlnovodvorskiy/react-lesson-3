import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <User name="test" src="https://img.etimg.com/thumb/msid-68721417,width-643,imgsize-1016106,resizemode-4/nature1_gettyimages.jpg" alt="test" min />
                <img src={this.props.src} alt={this.props.alt}></img>
                <div className="post__name">
                    test
                </div>
                <div className="post_desc">
                    test desc
                </div>
            </div>
        )
    }
}