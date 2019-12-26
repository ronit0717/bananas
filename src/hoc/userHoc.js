import React from 'react';

const UserHoc = (WrappedComponent, WrappedComponent2, arg1) => {
    return (props) => (
        <div>
            {arg1} <WrappedComponent {...props}/> and <WrappedComponent2 {...props}/>
        </div>
    )
}

export default UserHoc;