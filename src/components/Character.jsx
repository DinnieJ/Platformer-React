import React, { Component } from "react";
import { importAllFiles } from "../utils/file-import";
import { TICKING_TIME, KEY_RIGHT, KEY_LEFT } from '../constants/app.constant'
class Character extends Component {
  data = {
    images: [],
    canMove: true,
  };


  state = { frames: [], current: 0, backward: false };

  constructor() {
    super();
    this.state.frames = importAllFiles(
      require.context("../assets/images/character", false, /\.(png)$/)
    );
  }

  componentDidUpdate() {
    
  }

  stop = () => {
    let current = this.state.current;
    current = 0;
    this.setState({ current });
  };

  move(direction) {
    let backward = this.state.backward
    let current = this.state.current;

    if(backward && direction === KEY_RIGHT) backward = false

    else if (!backward && direction === KEY_LEFT) backward = true
    
    if(direction === KEY_LEFT || direction === KEY_RIGHT) {
      current++;
      if (current == this.state.frames.length) current = 0;
  
      this.setState({ current, backward });
    }
  }

  setFrame() {
    const reverse = this.state.backward ? { transform: `scaleX(-1)` } : {}
    return <img src={this.state.frames[this.state.current]} width={250} height={250} style={ reverse } />;
  }

  render() {
    return (
      <div tabIndex="0" onKeyDownCapture={this.run} onKeyUp={this.stop}>
        {this.setFrame()}
      </div>
    );
  }
}

export default Character;
