import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.value !== "") {
      this.setState({ value: "" });
      this.props.addTodo(this.state.value);
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col p-0 p-1">
            <input
              className="form-control"
              type="text"
              placeholder="Todo"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </div>
          <div className="col-auto p-0 p-1">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);
