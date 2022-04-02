import { db } from "../firebase";

export const handleLabelChange = (selectedLabels, uid, id, from) => {
  try {
    db.collection(`users/${uid}/notes`).doc(id).update({
      selectedLabels: selectedLabels,
    });
    from === "archive" &&
      db.collection(`users/${uid}/archives`).doc(id).update({
        selectedLabels: selectedLabels,
      });
    from === "trash" &&
      db.collection(`users/${uid}/trashes`).doc(id).update({
        selectedLabels: selectedLabels,
      });
  } catch (e) {
    console.error("Error changing label: ", e);
  }
};
