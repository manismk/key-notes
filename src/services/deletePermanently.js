import { db } from "../firebase";

export const deletePermanently = (noteData, uid) => {
  try {
    db.collection(`users/${uid}/notes`).doc(noteData.id).delete();
    noteData.isArchived &&
      db.collection(`users/${uid}/archives`).doc(noteData.id).delete();
    db.collection(`users/${uid}/trashes`).doc(noteData.id).delete();
  } catch (e) {
    console.error("Error in deleting permanently: ", e);
  }
};
