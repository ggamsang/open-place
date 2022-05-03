import React, { Component } from 'react';
import {resolution} from "commons/resolution.js"

class Intro extends Component {
  render() {
    console.log(resolution(123))
    return (
    <React.Fragment>
      intro
    </React.Fragment>
    )
  }
}

export default Intro;
