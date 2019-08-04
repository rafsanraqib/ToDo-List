import React, { Component } from "react";
import "./App.css";
import Text from "./Component/Text";
import Checkbox from "./Component/Checkbox";

class App extends Component {
  state = {
    value: "Add task",
    checked: false,
    items: []
  };

  handleSubmit = () => {
    let items = this.state.items;
    let obj = (
      <div className="checkbox" key={this.state.value}>
        <Checkbox
          onTick={this.handleCheckboxChange}
          state={this.state}
          key={this.state.value}
          onDelete={this.handleDelete}
        />
      </div>
    );
    items.push(obj);
    this.setState(items);
    // console.log(this.state.items[0]);
  };

  handle = event => {
    this.setState({ value: event.target.value });
  };

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked });
  };

  handleDelete = boxid => {
    const items = this.state.items.filter(c => c.key !== boxid);
    this.setState({ items });
  };

  render() {
    return (
      <div>
        <div>
          <Text
            onSubmit={this.handleSubmit}
            onCheck={this.handle.bind(this)}
            state={this.state}
          />
        </div>
        <div className="checkbox">
          {this.state.items.map(c => {
            return c;
          })}
        </div>
      </div>
    );
  }
}

export default App;
