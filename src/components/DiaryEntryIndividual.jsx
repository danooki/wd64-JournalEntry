import React from "react";

const EntryHeader = ({ title }) => {
  //received title as prop and renders it inside an h3.
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

//this component receives entryData, index, and removeEntry as props.
const EntryBody = ({ entryData, index, removeEntry }) => {
  return (
    <div>
      <small>{entryData.date}</small>
      <p>{entryData.body}</p>
      <button
        className="btn btn-neutral btn-dash"
        onClick={() => removeEntry(index)}
      >
        Delete
      </button>
    </div>
  );
};

// this is the main component that renders Header + Body together.
// receives entryData, index, and removeEntry from the parent component (DiaryEntryList).
const DiaryEntry = ({ entryData, index, removeEntry }) => {
  return (
    <div>
      {/* Passes just the title to EntryHeader */}
      <EntryHeader title={entryData.title} />

      {/* Passes the full entry data, index, and delete function to EntryBody */}
      <EntryBody
        entryData={entryData}
        index={index}
        removeEntry={removeEntry}
      />
    </div>
  );
};

export default DiaryEntry;
