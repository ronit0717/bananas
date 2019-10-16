import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';
import PostItem from './components/post_item';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                
                <header>
                    <NavLink to="/">Home</NavLink><br/>
                    <NavLink to="/post"
                             activeStyle = {{color:'red'}} 
                             activeClassName = "selected" 
                    >Posts</NavLink><br/>
                    <NavLink to={{
                        pathname : '/profile',
                        hash : '#ron',
                        search : '?profile=true'
                    }}>Profile</NavLink><br/>
                </header>

                <hr/>

                <Switch>
                    <Route path = "/post/:id/:author" exact component = {PostItem} />
                    <Route path = "/post" exact component = {Posts} />
                    <Route path = "/profile" component = {Profile} />
                    <Route path = "/" exact component = {Home} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, document.querySelector("#root")
)