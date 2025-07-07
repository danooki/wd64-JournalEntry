// App.jsx renders the Navbar, entry form, entry list here.
// import needed components
// set up empty state
// add placeholder layout

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import DiaryEntryList from "./components/DiaryEntryList";
import AddEntryModal from "./components/AddEntryModal";
import { canSubmitNewEntry, getRemainingCooldown } from "./utils/entryCooldown"; // utility functions for cooldown logic
import { useDiaryEntries } from "./utils/useDiaryEntries";
import EntryDetailModal from "./components/EntryDetailModal";

const App = () => {
  const { entries, addEntry, removeEntry } = useDiaryEntries(); // this was in App.jsx before, now in useDiaryEntries.js utility.
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal starts off closed
  const [sortOrder, setSortOrder] = useState("newest"); // FOR FILTER: default sort order
  const [selectedEntry, setSelectedEntry] = useState(null); // For entry detail modal.

  // handleSubmit function to add a new entry
  // This function will be passed down to the DiaryEntryForm component
  const handleSubmit = (newEntry) => {
    addEntry(newEntry);
    setIsModalOpen(false);
  };

  // handleAddClick function to open the modal if cooldown allows
  const handleAddClick = () => {
    if (canSubmitNewEntry()) {
      setIsModalOpen(true);
    } else {
      const hoursLeft = getRemainingCooldown().toFixed(1); // get remaining cooldown in hours
      alert(
        `⏳ You must wait ${hoursLeft} more hours before adding a new entry.`
      );
    }
  };

  // open modal on card click
  const openEntryModal = (entry) => {
    setSelectedEntry(entry);
  };

  // close modal
  const closeEntryModal = () => {
    setSelectedEntry(null);
  };

  // handleDelete function to remove an entry and close the modal
  const handleDelete = (entryToDelete) => {
    removeEntry(entryToDelete);
    closeEntryModal();
  };

  // FOR FILTER: list of entries based on sort order
  const sortedEntries = [...entries].sort((a, b) => {
    // sort entries by date
    const dateA = new Date(a.date).getTime(); // convert date strings to timestamps
    const dateB = new Date(b.date).getTime();
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB; // sort by newest or oldest
  });

  // Main component handles NavBar + rendering DiaryEntryList and AddEntryModal
  return (
    <>
      {/* Navbar at the top of the page */}
      <Navbar
        onAddClick={handleAddClick}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <main className="container mx-auto p-4">
        <DiaryEntryList
          entryData={sortedEntries}
          removeEntry={removeEntry}
          onEntryClick={openEntryModal}
        />
        {isModalOpen && (
          <AddEntryModal
            onClose={() => setIsModalOpen(false)}
            handleSubmit={handleSubmit}
          />
        )}

        {selectedEntry && (
          <EntryDetailModal
            entryData={selectedEntry}
            onClose={closeEntryModal}
            onDelete={handleDelete}
          />
        )}
      </main>
    </>
  );
};
export default App;
