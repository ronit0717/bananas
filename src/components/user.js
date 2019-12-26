import React from 'react';
import UserHoc from '../hoc/userHoc';
import Card from '../hoc/card';

const User = (props) => {
    console.log(props);
    return (
        <Card>
            User 1
        </Card>
    )
}

const User2 = (props) => {
    console.log(props);
    return (
        <Card>
            User 2
        </Card>
    )
}

export default UserHoc(User, User2, 'Hello');