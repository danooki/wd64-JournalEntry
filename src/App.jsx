// App.jsx renders the Navbar, entry form, entry list here.
// import needed components
// set up empty state
// add placeholder layout
import React, { useState } from "react";
import Navbar from "./components/navBar";
import DiaryEntryList from "./components/DiaryEntryList";
import DiaryEntryForm from "./components/DiaryEntryForm";
import FilterBar from "./components/FilterBar";
import DiaryEntry from "./components/DiaryEntryIndividual";

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

  /*  OLD version for hardcode entries.
 state = {
    entries: [
      {
        title: "My first entry",
        body: "this is the journal entry and text",
      },
      {
        title: "My second entry",
        body: "this is the journal entry and text",
      },
    ],
  }; 
  */

  const [entries, setEntries] = useState([
    {
      title: "My first entry",
      body: "this is the journal entry and text",
      date: "string",
    },
    {
      title: "My second entry",
      body: "this is the journal entry and text",
      date: "string",
    },
  ]);

  /* OLD version of remove entries.
  removeEntry = (index) => {
    const { entries } = this.state;

    this.setState({
      entries: entries.filter((entry, i) => {
        return i != index;
      }),
    });
  }; */

  const removeEntry = (index) => {
    setEntries((prevEntries) => prevEntries.filter((_, i) => i !== index));
  };

  return (
    <>
      {/* Navbar at the top of the page */}
      <Navbar />
      <main className="container mx-auto p-4">
        <FilterBar />
        <DiaryEntryForm />
        {/*         <DiaryEntryList entryData={entries} removeEntry={this.removeEntry} />
         */}
        <DiaryEntryList entryData={entries} removeEntry={removeEntry} />

        <br />
        <br />
        <br />
        <p>TEST ENTRY</p>
        <DiaryEntry
          entryData={{
            title: "Test Title",
            body: "Today was great!",
            date: "2025-06-20",
          }}
        />
      </main>
    </>
  );
};
export default App;
