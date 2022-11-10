import React from "react";
import axios from "axios";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      color: "red",
      category: "veggie"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    var key = event.target.name;
    this.setState({ [key]: event.target.value });
  }

  handleSubmit(event) {
    this.props.handleAdd(this.state);
  }

  render() {
    return (
      <form>
        <h4>Not seeing what you had? Add it yourself!</h4>
        {this.props.error !== '' &&
          <p>{this.props.error.response.data}</p>
        }
        <label>
          Name:
          <input type="text" value={this.state.name} name="name" required onChange={this.handleChange}></input>
        </label>
        <label>
          {/* update to be a drop down single selection */}
          Color:
          <select value={this.state.color} name="color" onChange={this.handleChange}>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
            <option value="green">Green</option>
            <option value="blue/purple/black">Blue/Purple/Black</option>
            <option value="white">White</option>
            <option value="tan">Tan</option>
          </select>
        </label>
        <label>
          {/* update to be a drop down single selection */}
          Category:
          <select value={this.state.category} name="category" onChange={this.handleChange}>
            <option value="veggie">Veggie</option>
            <option value="fruit">Fruit</option>
          </select>
        </label>
        <input type="button" value="Add!" onClick={this.handleSubmit}></input>
      </form>
    )
  }
}

export default Form;