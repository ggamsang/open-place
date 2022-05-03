import React, { Component } from 'react';
import host from "config";

class Main extends Component {
  componentDidMount() {
    console.log(host, process.env);
    fetch(host)
      .then(res => res.json())
      .then(d => console.log(d))
      .catch(e => console.error(e));
  }
  render() {
    return (
      <React.Fragment>
        main
      </React.Fragment>
    )
  }
}

export default Main;
