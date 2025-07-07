# Daily Journal Structure

```bash
Navbar.jsx
├── searchQuery
├── filteredEntries: entries shown after applying filters (loaded by useEffect)
└── currentMoodFilter, usw usw.

AddEntryModal.jsx
└── DiaryEntryForm: create a state like showEntryForm. If yes, opens Modal.

App itself.
└── DiaryEntryList: array of entries filtered by date (stored in localStorage - useState).
└── DiaryEntryIndividual: is the body of one Entry: date, text, place, mood, usw.

```

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
- FR006: Added entry button
- added entry forms

### Jul 03.

- Can show entries.
- No local storage, no persist.
- Entries are lost on reload.

### Jul 04.

- branch dataPersist01

  - FR007 Completed Entry Form Fields (added Image URL and Content)
  - Fixed validation (changed onClick to onSubmit)
  - improved ReadMe.md file

- branch dataPersis02

  - FR008 localStorage is now working.

- branch dataPersist03

  - rendering images inside of logs

### Jul 06.

- branch evidenceEntry

  - FR009 One-Entry-Per-Day Check If an entry already exists for the selected day, prompt the user to come back the next day.
  - FR010 Form Validation Block submission unless all fields are populated.

- branch filterList
  - FR011 Homepage List: Display diary entries sorted newest-first.
  - FR012 Load Entries on Startup: Read and render stored entries when the app first mounts.

### Jul. 07 Delivery Day

- branch getEntryViewer
  - FR013 Card Layout: Show each entry as a card with preview image, date and title.

## Pending

- FR014 Entry Detail Modal Clicking a card opens a modal showing full entry (title, date, image, content). Control showing/hidding the preview modal, as well as its content, with state.

- FR015 Static-Site Deployment to Render Build the app with Vite and deploy the static assets on Render.
- Delete required confirmation in a warning window.

- Add your first journal welcome page
- fix responsiveness of the cellphone view? (minimum sizes?)

# Learnings:

- DiaryEntryForm: Just handles input, validation, and submits the data up via the handleSubmit prop.
- Parent component (likely App.jsx or DiaryEntryList.jsx)
  - Receives the new entry data from the form submit callback.
  - Adds the new entry to the state array of all diary entries.
- The functions can be in the folder utils. Later you can export them.
