import React from "react";

const EntryHeader = ({ title, date }) => {
  return (
    <div className="flex justify-between items-start mb-2 ">
      <h2 className="card-title text-lg font-semibold">{title}</h2>
      <small className="text-sm text-gray-500">{date}</small>
    </div>
  );
};

//this component receives entryData, index, and removeEntry as props.
const EntryBody = ({ entryData, index, removeEntry }) => {
  return (
    <div className="card-body">
      <EntryHeader title={entryData.title} date={entryData.date} />
      {entryData.body}
      <div className="flex justify-between items-center mt-4">
        <span className="badge badge-outline">{entryData.mood}</span>
        <button
          className="btn btn-sm btn-error"
          onClick={() => removeEntry(index)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

// this is the main component that renders Header + Body together.
// receives entryData, index, and removeEntry from the parent component (DiaryEntryList).
const DiaryEntry = ({ entryData, index, removeEntry }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm mb-6  border-gray-700 border-1">
      {entryData.imageUrl && (
        <figure className="w-full lg:w-1/3 max-h-60 overflow-hidden">
          <img
            src={entryData.imageUrl}
            alt="Diary"
            className="object-cover w-full h-full"
          />
        </figure>
      )}

      <EntryBody
        entryData={entryData}
        index={index}
        removeEntry={removeEntry}
      />
    </div>
  );
};

export default DiaryEntry;
