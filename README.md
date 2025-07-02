# Daily Journal Structure

Navbar.jsx
├── searchQuery
├── filteredEntries: entries shown after applying filters -- loaded by useEffect--
└── currentMoodFilter, usw usw

AddEntryModal
└── DiaryEntryForm: create a state like showEntryForm. If yes, opens Modal.

App itself
└── DiaryEntryList: array of entries filtered by date (stored in localStorage - useState)
└── DiaryEntryIndividual: is the array of objects: date, text, place, mood, usw.
