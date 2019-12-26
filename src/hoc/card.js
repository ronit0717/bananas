import React from 'react';

const Card = (props) => {

    const style = {
        background:'lightgrey'
    }

    return (        
        <span style={style}>
            {props.children}
        </span>
    )
}

export default Card;