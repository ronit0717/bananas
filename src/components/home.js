import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const news = [
        {id:'1', news:'Dhishoom 2 releases'},
        {id:'2', news:'NorthEast United wins ISL'},
        {id:'3', news:'React community becomes stronger'}
    ]
    
    const list = news.map( item => {
        return (
            <span key={item.id}>
                <Link to={item.id}>{item.news}</Link><br/>
            </span>
        )
    })

    return (
        <div>
            <div><b>Home</b></div><br/>
            <div>NEWS</div><br/>
            {list}
        </div>
    );
}

export default Home;