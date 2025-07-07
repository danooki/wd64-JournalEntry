import { useState, useEffect } from "react";

export const useDiaryEntries = () => {
  // initializing entries from localStorage or setting to an empty array
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("diaryEntries");
    return saved ? JSON.parse(saved) : [];
  });

  // useEffect to save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const addEntry = (entry) => {
    setEntries((prev) => [...prev, entry]);
    localStorage.setItem("lastEntryTime", Date.now());
  };

  const removeEntry = (index) => {
    setEntries((prev) => prev.filter((_, i) => i !== index));
  };

  return { entries, addEntry, removeEntry };
};
