import DiaryEntry from "./DiaryEntryIndividual";
import React from "react";

const DiaryEntryList = ({ entryData, removeEntry }) => {
  return (
    <div>
      {entryData.map((entry, index) => (
        <DiaryEntry
          key={index}
          entryData={entry}
          index={index}
          removeEntry={removeEntry}
        />
      ))}
    </div>
  );
};

export default DiaryEntryList;
