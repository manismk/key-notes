import { db } from "../firebase";

export const unArchiveNote = (noteData, uid) => {
  try {
    db.collection(`users/${uid}/notes`).doc(noteData.id).update({
      isArchived: false,
    });
    db.collection(`users/${uid}/archives`).doc(noteData.id).delete();
  } catch (e) {
    console.error("Error in moving to archive: ", e);
  }
};
