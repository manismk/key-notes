import { db } from "../firebase";

export const handleBgColorChange = (color, uid, id) => {
  try {
    db.collection(`users/${uid}/notes`).doc(id).update({
      color: color,
    });
  } catch (e) {
    console.error("Error changing color: ", e);
  }
};
