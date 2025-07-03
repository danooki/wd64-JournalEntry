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

const App = () => {
  //Navbar.jsx
  // ├── searchQuery
  // ├── filteredEntries: entries shown after applying filters -- loaded by useEffect--
  // └── currentMoodFilter, usw usw

  // AddEntryModal
  // └── DiaryEntryForm: create a state like showEntryForm. If yes, opens Modal.

  // App itself
  // └── DiaryEntryList: array of entries filtered by date (stored in localStorage - useState)
  //      └── DiaryEntryIndividual: is the array of objects: date, text, place, mood, usw.

  // temporalllll: hardcoded entry
  const [entries, setEntries] = useState([
    {
      title: "My first entry test",
      body: "this is the journal entry and text",
      date: "date string",
    },
  ]);

  const removeEntry = (index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  };

  // handleSubmit function to add a new entry
  // This function will be passed down to the DiaryEntryForm component
  const handleSubmit = (newEntry) => {
    setEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  return (
    <>
      {/* Navbar at the top of the page */}
      <Navbar />
      <main className="container mx-auto p-4">
        <FilterBar />
        <DiaryEntryList entryData={entries} removeEntry={removeEntry} />
        <Form handleSubmit={handleSubmit} />
      </main>
    </>
  );
};
export default App;
