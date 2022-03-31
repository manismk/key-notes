import { db } from "../firebase";

export const toggleIsPinned = (isPinned, uid, id) => {
  try {
    db.collection(`users/${uid}/notes`).doc(id).update({
      isPinned: !isPinned,
    });
  } catch (e) {
    console.error("Error toggling pin: ", e);
  }
};
