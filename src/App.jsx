// App.jsx renders the Navbar, entry form, entry list here.
// import needed components
// set up empty state
// add placeholder layout

import Navbar from "./components/navBar";
import DiaryEntryList from "./components/DiaryEntryList";
import DiaryEntryForm from "./components/DiaryEntryForm";
import FilterBar from "./components/FilterBar";

const App = () => {
  // - DiaryEntryList: array of entries filtered by date (stored in localStorage - useState)
  // - DiaryEntryForm: create a state like showEntryForm. If yes, opens Modal.
  // - searchQuery
  // - filteredEntries: entries shown after applying filters -- loaded by useEffect--
  // - currentMoodFilter, usw usw

  return (
    <>
      {/* Navbar at the top of the page */}
      <Navbar />
      <main className="container mx-auto p-4">
        <FilterBar />
        <DiaryEntryForm />
        <DiaryEntryList />
      </main>
    </>
  );
};
export default App;
