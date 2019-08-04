import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      <div className="wrapper">
        <div>
          <h2>ToDo List</h2>
        </div>
        <div className="container">
          <input
            type="Text"
            defaultValue={this.props.state.value}
            className="text-center"
            onChange={this.props.onCheck}
          />
          <button className="btn btn-primary m-2" onClick={this.props.onSubmit}>
            Add Task
          </button>
        </div>
        {/* <ul>
          <div className="custom-control custom-checkbox">
            {this.props.state.items.map(c => {
              return <li key={c}>{c}</li>;
            })}
          </div>
        </ul> */}
      </div>
    );
  }
}

export default Text;
