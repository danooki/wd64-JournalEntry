// functions to manage cooldowns for submitting new journal entries

export const canSubmitNewEntry = (limitInHours = 4) => {
  // check if the user can submit a new entry based on the cooldown limit
  const last = localStorage.getItem("lastEntryTime"); // get the last entry time from localStorage
  if (!last) return true; // if no last entry time, allow submission.

  const diffInHours = (Date.now() - Number(last)) / (1000 * 60 * 60); // Convert milliseconds to hours
  // check if the difference is greater than or equal to the limit
  return diffInHours >= limitInHours;
};

export const getRemainingCooldown = (limitInHours = 4) => {
  // calculate the remaining cooldown time in hours
  const last = localStorage.getItem("lastEntryTime"); // get the last entry time from localStorage
  if (!last) return 0; // if no last entry time, return 0 cooldown

  const diffInHours = (Date.now() - Number(last)) / (1000 * 60 * 60); // convert milliseconds to hours
  return Math.max(0, limitInHours - diffInHours); // ensure cooldown is not negative.
};
