'use strict';

import SetState from "./react-set-state";
import React from "react";

class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      number: 0,
      string: "",
    }
  }

  click() {
    SetState.setState({
      number: 12
    })
    setTimeout(() => {
      SetState.setState({
        string: "wangzixiao"
      }, this);
    }, 2000);
  }

  render() {
    let {number, string, boolean} = this.state;
    return (
      <section>
        <p>String: {string}</p>
        <p>Number: {number}</p>
        <button onClick={this.click.bind(this)}>Button</button>
      </section>
    )
  }
}

React.render(<Index />, document.body);
