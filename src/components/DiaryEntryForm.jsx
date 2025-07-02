import React, { Component } from "react";

// this component is a form for creating new diary entries
// it manages the state of the form inputs and handles submission
class DiaryEntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.state = {
      title: "",
      body: "",
    };
  }

  // initial state for the form inputs
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // handleChange updates the state when the input values change
  render() {
    const { title, body } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input
          placeholder="Enter Title"
          className="textarea textarea-accent"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={this.handleChange}
        />

        <label>Entry</label>

        <textarea
          placeholder="What's on your mind?"
          className="textarea textarea-secondary"
          name="body"
          id="body"
          value={body}
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-wide btn-soft btn-accent">
          Add This Entry
        </button>
      </form>
    );
  }
}

export default DiaryEntryForm;
