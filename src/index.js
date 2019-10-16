import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

//COMPONENTS
import Home from './components/home';
import Profile from './components/profile';
import Posts from './components/posts';
import PostItem from './components/post_item';
import LifeCycle from './components/life_cycle'

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
                    <NavLink to="/lifecycle">LifeCycle</NavLink>
                </header>

                <hr/>

                <Switch>
                    <Route path = "/lifecycle" component = {LifeCycle} />
                    <Route path = "/post/:id/:author" component = {PostItem} />
                    <Route path = "/post" component = {Posts} />
                    <Route path = "/profile" component = {Profile} />
                    <Route path = "/" exact component = {Home} />
                    <Route render={() => <h3>Oops.. 404</h3>} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>, document.querySelector("#root")
)