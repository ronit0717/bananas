import React from 'react';

const getStatus = () => {
    return true;
}

const displayRender = () => {
    return (
        getStatus() ? <div>Hello World.. its true</div> : <div>Hello World.. its false</div>
    )
}

const Conditional = () => {
    return (
        <div>
            Conditional
            <hr></hr>
            <div>{displayRender()}</div>
        </div>
    );
}

export default Conditional;