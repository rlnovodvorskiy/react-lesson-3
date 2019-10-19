import React from 'react';
import User from './User'

export default function Users() {
        return (
            <div className="right">
                <User name="test" src="https://img.etimg.com/thumb/msid-68721417,width-643,imgsize-1016106,resizemode-4/nature1_gettyimages.jpg" alt="test"/>

                <div className="users__block">
                    <User name="test" src="https://img.etimg.com/thumb/msid-68721417,width-643,imgsize-1016106,resizemode-4/nature1_gettyimages.jpg" alt="test" min />
                    <User name="test" src="https://img.etimg.com/thumb/msid-68721417,width-643,imgsize-1016106,resizemode-4/nature1_gettyimages.jpg" alt="test" min />
                    <User name="test" src="https://img.etimg.com/thumb/msid-68721417,width-643,imgsize-1016106,resizemode-4/nature1_gettyimages.jpg" alt="test" min />
                </div>
            </div>
        )
}