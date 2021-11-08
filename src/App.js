import React, { Component } from 'react';
import Character from './components/Character'
import Scene from './components/Scene';


class App extends Component {

    testKeyDown () {
        console.log('down')
    }
    render() { 
        return (
        <React.Fragment>
            <Scene></Scene>
        </React.Fragment>
        );
    }
}
 
export default App;