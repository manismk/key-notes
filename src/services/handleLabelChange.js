import { db } from "../firebase";

export const handleLabelChange = (selectedLabels, uid, id) => {
  try {
    db.collection(`users/${uid}/notes`).doc(id).update({
      selectedLabels: selectedLabels,
    });
  } catch (e) {
    console.error("Error changing label: ", e);
  }
};
