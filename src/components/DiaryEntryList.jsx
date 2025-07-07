import DiaryEntry from "./DiaryEntryIndividual";
import React from "react";

const DiaryEntryList = ({ entryData, removeEntry, onEntryClick }) => {
  return (
    <div className="flex flex-wrap -mx-2">
      {entryData.map((entry, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4">
          <DiaryEntry
            key={index}
            entryData={entry}
            index={index}
            removeEntry={removeEntry}
            onClick={onEntryClick}
          />
        </div>
      ))}
    </div>
  );
};

export default DiaryEntryList;
