import React from "react";
import Form from "./DiaryEntryForm";

const AddEntryModal = ({ onClose, handleSubmit }) => {
  return (
    <div
      className="fixed inset-0 bg-emerald-800/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose} // clicking closes the modal
    >
      <div
        className="bg-amber-500 rounded-2xl shadow-2xl p-6 w-full max-w-xl relative"
        onClick={(e) => e.stopPropagation()} // prevent click from closing modal
      >
        <Form handleSubmit={handleSubmit} />
        <button className="btn btn-neutral btn-dash" onClick={onClose}>
          ✕ Close
        </button>
      </div>
    </div>
  );
};

export default AddEntryModal;
