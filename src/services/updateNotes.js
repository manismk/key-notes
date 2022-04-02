import { db } from "../firebase";

export const updateNotes = (
  { id, title, enteredNotes, isPinned, color, selectedLabels },
  uid
) => {
  try {
    db.collection(`users/${uid}/notes`).doc(id).update({
      title: title,
      enteredNotes: enteredNotes,
      isPinned: isPinned,
      color: color,
      selectedLabels: selectedLabels,
    });
  } catch (e) {
    console.error("Error updating data : ", e);
  }
};
