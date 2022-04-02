import { db } from "../firebase";

export const handleLabel = (labelArray, uid) => {
  try {
    db.collection(`users/${uid}/labels/`).doc(uid).set({
      label: labelArray,
    });
  } catch (e) {
    console.error("Error adding label: ", e);
  }
};
