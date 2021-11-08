import React, { Component } from 'react';
import Background from './Background';
import Character from './Character'
import Foreground from './Foreground';
import { KEY_LEFT, KEY_RIGHT } from '../constants/app.constant'

class Scene extends Component {
    data = { pause: false }
    state = { isMove: false, direction: 1, posX: 0, posY: 0 }
    move = (event) => {
        let { isMove, direction } = this.state
        if(isMove === true) return;
        switch(event.keyCode) {
            case KEY_LEFT:
                direction = 0
                break
            case KEY_RIGHT:
                direction = 1
                break
        }

        isMove = true

        this.setState({isMove, direction})

    }

    stop = () => {
        let { isMove } = this.state
        isMove = false
        this.setState({ isMove })
    }

    
    render() { 
        return (
        <div id="mainGame" tabIndex="0" onKeyDown={this.move}>
            <Background></Background>
            <Character move={this.state.isMove} direction={this.state.direction}></Character>
            <Foreground></Foreground>
        </div>);
    }
}
 
export default Scene;   