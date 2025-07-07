import DiaryEntry from "./DiaryEntryIndividual";
import React from "react";

const DiaryEntryList = ({ entryData, removeEntry }) => {
  return (
    <div className="flex flex-wrap -mx-2">
      {entryData.map((entry, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <DiaryEntry
            entryData={entry}
            onClick={() => {
              // TODO: handle open modal
              console.log("Clicked entry", entry);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default DiaryEntryList;
