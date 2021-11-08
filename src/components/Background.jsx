import React, { Component } from 'react';
import bg from '../assets/images/bg.jpg'

class Background extends Component {
    state = {  }

    move = {}
    render() { 
        return (
        <div>
            <img src={bg}/>
        </div>
    );
    }
}
 
export default Background;