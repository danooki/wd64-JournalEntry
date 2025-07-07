import React from "react";

const EntryHeader = ({ title, date }) => {
  return (
    <div className="flex justify-between items-start mb-1">
      <h2 className="text-md font-semibold line-clamp-1">{title}</h2>
      <small className="text-xs">{date}</small>
    </div>
  );
};

//this component receives entryData, index, and removeEntry as props.
// summary body for the compact card
const EntryBody = ({ entryData }) => {
  const shortBody =
    entryData.body.length > 30
      ? entryData.body.substring(0, 30) + "..."
      : entryData.body;

  return (
    <div className="p-4 flex flex-col justify-between h-full">
      <EntryHeader title={entryData.title} date={entryData.date} />
      <p className="text-sm mb-2">{shortBody}</p>
      <span className="badge badge-outline self-start">{entryData.mood}</span>
    </div>
  );
};

// this is the main component that renders Header + Body together.
// receives entryData, index, and removeEntry from the parent component (DiaryEntryList).
const DiaryEntry = ({ entryData, onClick }) => {
  return (
    <div
      className="card card-compact bg-gray-800 shadow-sm mb-4 border border-gray-200 transition duration-200 transform hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      {entryData.imageUrl && (
        <figure className="max-h-40 overflow-hidden">
          <img
            src={entryData.imageUrl}
            alt="Diary"
            className="object-cover w-full h-full"
          />
        </figure>
      )}
      <EntryBody entryData={entryData} />
    </div>
  );
};

export default DiaryEntry;
