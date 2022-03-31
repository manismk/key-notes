import { db } from "../firebase";

export const restoreFromTrash = (noteData, uid) => {
  try {
    db.collection(`users/${uid}/notes`).doc(noteData.id).update({
      isTrashed: false,
    });
    noteData.isArchived &&
      db.collection(`users/${uid}/archives`).doc(noteData.id).update({
        isTrashed: false,
      });
    db.collection(`users/${uid}/trashes`).doc(noteData.id).delete();
  } catch (e) {
    console.error("Error in restoring trash: ", e);
  }
};
