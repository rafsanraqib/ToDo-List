import React, { Component } from "react";

class Checkbox extends Component {
  //   state = {
  //     label: "Default",
  //     checked: false
  //   };

  //   handleCheckboxChange = event => {
  //     this.setState({ checked: event.target.checked });
  //   };

  render() {
    return (
      <div className="checkbox checkbox-primary">
        <input
          id="checkbox2"
          className="styled"
          type="Checkbox"
          onChange={this.props.onTick}
          defaultChecked={this.props.state.checked}
        />
        <label>{this.props.state.value}</label>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.state.value)}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Checkbox;
