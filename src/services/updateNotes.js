import { db } from "../firebase";

export const updateNotes = (notesData, uid) => {
  try {
    db.collection(`users/${uid}/notes`).doc(notesData.id).update({
      title: notesData.title,
      enteredNotes: notesData.enteredNotes,
      isPinned: notesData.isPinned,
      color: notesData.color,
    });
  } catch (e) {
    console.error("Error updating data : ", e);
  }
};
