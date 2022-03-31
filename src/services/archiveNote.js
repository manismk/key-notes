import { db } from "../firebase";

export const archiveNote = (noteData, uid) => {
  try {
    db.collection(`users/${uid}/notes`).doc(noteData.id).update({
      isArchived: true,
    });
    db.collection(`users/${uid}/archives`)
      .doc(noteData.id)
      .set({ ...noteData, isArchived: true });
  } catch (e) {
    console.error("Error in moving to archive: ", e);
  }
};
