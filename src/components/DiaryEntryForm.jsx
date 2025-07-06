import React, { useState } from "react";

// this component is a form for creating new diary entries
// it manages the state of the form inputs and handles submission

const DiaryEntryForm = ({ handleSubmit }) => {
  const initialState = {
    title: "",
    body: "",
    date: "",
    mood: "",
    imageUrl: "",
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

  //
  const [formErrors, setFormErrors] = useState({});

  // after each submission: prevents reload, pass data & resets to initialState.
  const submitForm = (e) => {
    e.preventDefault(); // added Thursday: prevent page reload
    handleSubmit(formData); // pass data to parent
    setFormData(initialState); // reset form.

    // required fields
    const requiredFields = ["title", "date", "body"];
    const errors = {};

    // check if required fields are filled
    // if not, add to errors object
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        errors[field] = true;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return; // don't submit
    }
  };

  // Check if form is valid for the button to be enabled.
  const isFormValid = formData.title && formData.date && formData.body;

  // state for the form inputs
  return (
    <form onSubmit={submitForm} className="flex flex-col gap-y-4">
      <label htmlFor="title" className="mb-1 font-semibold ">
        Title
      </label>
      <input
        placeholder="Enter Title"
        className={`input ${
          formErrors.title ? "input-error" : "input-primary"
        } w-full`}
        type="text"
        name="title"
        id="title"
        maxLength={30}
        required
        value={formData.title}
        onChange={handleChange}
      />

      <div className="flex gap-4">
        <div className="flex flex-col flex-1">
          <label htmlFor="date" className="mb-1 font-semibold text-sm">
            Date
          </label>
          <input
            type="date"
            className={`input ${
              formErrors.title ? "input-error" : "input-primary"
            }`}
            name="date"
            required
            value={formData.date}
            onChange={handleChange}
          />{" "}
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="mood" className="mb-1 font-semibold text-sm">
            Mood
          </label>
          <select
            className="select select-neutral"
            name="mood"
            value={formData.mood}
            onChange={handleChange}
          >
            <option value="">Select mood</option>
            <option value="happy">😊 Joy</option>
            <option value="sad">😢 Sad</option>
            <option value="angry">😠 Angry</option>
            <option value="fear">😨 Fear</option>
            <option value="intrigued">🤔 Intrigued</option>
            <option value="disgust">😴 Tired</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col">
        <label htmlFor="imageUrl" className="mb-1 font-semibold">
          Image URL
        </label>
        <input
          type="text"
          placeholder="https://example.com/image.jpg"
          className={`input ${
            formErrors.title ? "input-error" : "input-primary"
          } w-full`}
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />{" "}
      </div>

      <label>Entry</label>
      <textarea
        placeholder="What's on your mind?"
        className={`textarea ${
          formErrors.title ? "textarea-error" : "textarea-primary"
        } w-full`}
        name="body"
        id="body"
        required
        value={formData.body}
        onChange={handleChange}
      />

      <button
        type="submit"
        className={`btn w-full mt-4 ${
          !isFormValid ? "btn-disabled bg-gray-300 text-gray-900" : "btn-accent"
        }`}
        disabled={!isFormValid}
      >
        {isFormValid ? "Add This Entry" : "Fill Required Fields"}
      </button>
    </form>
  );
};

export default DiaryEntryForm;
