import React, { Component } from "react";
// import Test from "./Test";

class App extends Component {
  state = {
    value: "some editable text",
    isEditable: false,
  };
  changeEditMode = () => {
    console.log("change edit mode");
    this.setState({
      isEditable: !this.state.isEditable,
    });
  };
  updateComponentValue = () => {
    this.setState({
      isEditable: false,
      value: this.refs.theTextInput.value,
    });
  };

  // inputRef = (text) => this.setState((prev) => ({ ...prev, value: text }));

  renderEditView = () => {
    return (
      <div>
        {/* <input
          type="text"
          defaultValue={this.state.value}
          ref={this.inputRef}
        /> */}

        <button onClick={this.changeEditMode}>Cancel</button>
        <button onClick={this.updateComponentValue}>Save</button>
      </div>
    );
  };

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>{this.state.value}</div>;
  };
  render() {
    return this.state.isEditable
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default App;
