import { db } from "../firebase";

export const moveToTrash = (noteData, uid) => {
  try {
    db.collection(`users/${uid}/notes`).doc(noteData.id).update({
      isTrashed: true,
    });
    noteData.isArchived &&
      db.collection(`users/${uid}/archives`).doc(noteData.id).update({
        isTrashed: true,
      });
    db.collection(`users/${uid}/trashes`)
      .doc(noteData.id)
      .set({ ...noteData, isTrashed: true });
  } catch (e) {
    console.error("Error in moving to trash: ", e);
  }
};
