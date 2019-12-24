import React, { Component } from 'react';


class LifeCycle extends Component {

    //1. GET DEFAULT PROPS


    //2. SET DEFAULT STATE
    state = {
        title : 'LIFE-CYCLE-NEW',
        flag : 0
    }

    //3. BEFORE RENDER
    componentWillMount(){
        console.log("Before render");
    }

    //4. RENDER
    render(){
        console.log('Inside render');
        return(
            <div>
                <h3>{this.state.title}</h3>
                <button onClick = {() => this.changeState()}>Click Me</button>
            </div>
        );
    }

    //5. AFTER RENDER
    componentDidMount(){
        console.log('After render');
        document.querySelector('h3').style.color='#009999';
    }


    //Custom Functions
    changeState = () => {
        if(this.state.flag === 0){
            this.setState({
                title : 'AVENGERS ASSEMBLE',
                flag : 1
            })
            document.querySelector('h3').style.color='#0000ff';
        }else{
            this.setState({
                title : 'LIFE-CYCLE',
                flag : 0
            })
            document.querySelector('h3').style.color='#009999';
        }
    }
}

export default LifeCycle;