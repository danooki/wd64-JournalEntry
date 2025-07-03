// App.jsx renders the Navbar, entry form, entry list here.
// import needed components
// set up empty state
// add placeholder layout

import React, { useState } from "react";
import Navbar from "./components/navBar";
import DiaryEntryList from "./components/DiaryEntryList";
import FilterBar from "./components/FilterBar";
import DiaryEntry from "./components/DiaryEntryIndividual";
import Form from "./components/DiaryEntryForm";
import AddEntryModal from "./components/AddEntryModal";

const App = () => {
  // temporalllll: hardcoded entry
  const [entries, setEntries] = useState([
    {
      title: "My first entry test",
      body: "this is the journal entry and text",
      date: "date string",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const removeEntry = (index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  };

  // handleSubmit function to add a new entry
  // This function will be passed down to the DiaryEntryForm component
  const handleSubmit = (newEntry) => {
    setEntries((prev) => [...prev, newEntry]);
    setIsModalOpen(false); // close modal after submission
  };

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
        )}{" "}
      </main>
    </>
  );
};
export default App;
