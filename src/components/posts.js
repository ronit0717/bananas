import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div>
            <ul>
                <li><Link to="/post/1/john">Post 1</Link></li>
                <li><Link to="/post/2/micheal">Post 2</Link></li>
                <li><Link to="/post/3/rambo">Post 3</Link></li>
            </ul>
        </div>
    );
}

export default Posts;