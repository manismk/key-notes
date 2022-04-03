import { db } from "../firebase";

export const handlePriority = (priority, uid, id) => {
  try {
    db.collection(`users/${uid}/notes`).doc(id).update({
      priority: priority,
    });
  } catch (e) {
    console.error("Error changing priority: ", e);
  }
};
