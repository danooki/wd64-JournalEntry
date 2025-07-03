import React, { useState } from "react";

// this component is a form for creating new diary entries
// it manages the state of the form inputs and handles submission

const DiaryEntryForm = ({ handleSubmit }) => {
  const initialState = {
    title: "",
    body: "",
  };

  // Set up state using useState
  const [formData, setFormData] = useState(initialState);

  // Handles changes to input fields and updates form state
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // after each submission: prevents reload, pass data & resets to initialState.
  const submitForm = (e) => {
    e.preventDefault(); // added Thursday: prevent page reload
    handleSubmit(formData); // pass data to parent
    setFormData(initialState); // reset form.
  };

  // state for the form inputs
  return (
    <form onSubmit={submitForm}>
      <label>Title</label>
      <input
        placeholder="Enter Title"
        className="textarea textarea-accent"
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label>Entry</label>

      <textarea
        placeholder="What's on your mind?"
        className="textarea textarea-secondary"
        name="body"
        id="body"
        value={formData.body}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn btn-wide btn-soft btn-accent"
        onClick={submitForm}
      >
        Add This Entry
      </button>
    </form>
  );
};

export default DiaryEntryForm;
