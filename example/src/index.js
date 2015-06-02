'use strict';

import StateStore from "./react-state-store";
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
    StateStore.set({
      string: "wangzixiao",
      number: 10
    }, "title");
    StateStore.set({
      string: "wzx"
    })
    setTimeout(() => {
      this.setState(StateStore.getAll());
    }, 1000);
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
