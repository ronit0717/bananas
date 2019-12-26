import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../hoc/card';
import Auth from '../hoc/auth';

const Profile = (props) => {
    console.log(props);

    return (
        <div>
            <Auth>
                <Card>
                    <Link to={{
                        pathname : `${props.match.url}/posts`
                    }}>Some link
                    </Link>
                </Card>
            </Auth>
        </div>
    );
}

export default Profile;