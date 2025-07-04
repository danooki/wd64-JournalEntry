// App.jsx renders the Navbar, entry form, entry list here.
// import needed components
// set up empty state
// add placeholder layout

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DiaryEntryList from "./components/DiaryEntryList";
import FilterBar from "./components/FilterBar";
import AddEntryModal from "./components/AddEntryModal";

const App = () => {
  // useState to manage diary entries
  const [entries, setEntries] = useState(() => {
    const savedEntries = localStorage.getItem("diaryEntries");
    return savedEntries ? JSON.parse(savedEntries) : [];
  });

  // Modal starts off closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect to save entries to localStorage whenever entries change
  useEffect(() => {
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
  }, [entries]);

  const removeEntry = (index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  };

  // handleSubmit function to add a new entry
  // This function will be passed down to the DiaryEntryForm component
  const handleSubmit = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
    setIsModalOpen(false);
  };

  // Main component handles NavBar + rendering DiaryEntryList and AddEntryModal
  return (
    <>
      {/* Navbar at the top of the page */}
      <Navbar onAddClick={() => setIsModalOpen(true)} />
      <main className="container mx-auto p-4">
        <FilterBar />
        <DiaryEntryList entryData={entries} removeEntry={removeEntry} />
        {isModalOpen && (
          <AddEntryModal
            onClose={() => setIsModalOpen(false)}
            handleSubmit={handleSubmit}
          />
        )}
      </main>
    </>
  );
};
export default App;
