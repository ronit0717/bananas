import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                
                <header>
                    <Link to="/">Home</Link><br/>
                    <Link to="/post">Posts</Link><br/>
                    <Link to={{
                        pathname : '/profile',
                        hash : '#ron',
                        search : '?profile=true'
                    }}>Profile</Link><br/>
                </header>

                <hr/>

                <Route path = "/" exact component = {Home} />
                <Route path = "/post" component = {Posts} />
                <Route path = "/profile" component = {Profile} />
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, document.querySelector("#root")
)