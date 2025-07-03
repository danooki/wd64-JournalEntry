# Daily Journal Structure

Navbar.jsx.
├── searchQuery.
├── filteredEntries: entries shown after applying filters -- loaded by useEffect--.
└── currentMoodFilter, usw usw.
AddEntryModal.
└── DiaryEntryForm: create a state like showEntryForm. If yes, opens Modal.
App itself.
└── DiaryEntryList: array of entries filtered by date (stored in localStorage - useState).
└── DiaryEntryIndividual: is the array of objects: date, text, place, mood, usw.

## Log changes

### Jun 30.

- Develop branch
- basic layout + NavBar.jsx

### Jul 01.

- App.jsx created test entry + other components
- defined DiaryEntry type of data.
- Added deleted function
- Followed youtube tutorial

### Jul 02.

- Continue youtube tutorial
- Added entry button
- added entry forms

### Jul 03.

- Can show entries.
- No local storage, no persist.
- Entries are lost on reload.
