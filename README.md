# react-state-store
Give you the ability to decide when and what `state`s to execute in `setState`

[![Version](http://img.shields.io/npm/v/react-state-store.svg)](https://www.npmjs.org/package/react-state-store)


### Installation

```
npm install react-state-store --save
```

### Why

Sometimes I have `setState` in different functions for seperating logic. Then when I try to use them in combination, I hope they can execute `setState` only one time so that it won't re-render too much.

```
this.setState({attribute1: name1})
callback(
	this.setState({attribute2: name2})
	(() => {
		this.setState({attribute3: name3})
	})(this);
)

But I hope execute setState only one time
```

### Usage

1 . Require react-state-store after installation

```js
import SetStore from "react-state-store" 
```

### Method

##### set(state, alias)
Set(store) some state into StateStore, the function will give you an unique id so that you can get them by `get(id)`, you can also set alias so that you can use `get(alias)` to get them.

Params:

* state[object] : the state you want to execute in the future
* alias [string] : so you can use get(alias) to get the state object you just set `(optional)`

Return:

* id or alias


##### get(id)
Get specific state stored before, then this state will be removed from StateStore

Params:

* id[string] : the id return by set(state, alias)

Return:

* state object


##### getAll()
Get all state stored, then this function will remove all state stored in the StateStore 

Return:

* state object

##### remove(id)
Remove specific state in StateStore
##### removeAll()
Remove all state in StateStore

### Example


```js
import StateStore from "react-state-store";
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
      string: "example1",
      number: 1
    }, "first");
    
    StateStore.set({string: "example2"});
    
    setTimeout(() => {
      this.setState(StateStore.getAll());
      /* This equal to the following
        this.setState({
         string: example2,
         number: 1
        })
      */ 
    }, 5000);
    
  }

  render() {
    let {number, string} = this.state;
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
	
```


### License

MIT
