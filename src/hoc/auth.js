import React from 'react';

const Auth = (props) => {
    const pass = 'rootpassword';
    let authorized = (pass === 'rootpassword') ? true : false;
    if (authorized) {
        return props.children
    } else {
        return <h1>Not authorized</h1>
    }

}

export default Auth;