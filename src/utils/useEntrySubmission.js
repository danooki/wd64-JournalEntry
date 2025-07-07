import { useDiaryEntries } from "./useDiaryEntries";
import { canSubmitNewEntry, getRemainingCooldown } from "./entryCooldown";

// useEntrySubmission is a custom hook that manages the submission of diary entries.
// handleAddClick checks if a new entry can be submitted based on the cooldown period.
export const useEntrySubmission = () => {
  const { entries, addEntry, removeEntry } = useDiaryEntries();

  const handleAddClick = () => {
    if (canSubmitNewEntry()) {
      return true;
    } else {
      const hoursLeft = getRemainingCooldown().toFixed(1);
      alert(
        `You must still wait ${hoursLeft} more hours before adding a new entry.`
      );
      return false;
    }
  };

  return {
    entries,
    addEntry,
    removeEntry,
    handleAddClick,
  };
};
