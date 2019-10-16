import React from 'react';

const PostItem = (props) => {
    console.log(props);
    return (
        <div>
            Post Number : {props.match.params.id} <br/>
            Author : {props.match.params.author}
        </div>
    );
}

export default PostItem;