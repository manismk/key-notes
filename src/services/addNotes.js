import { db } from "../firebase";
import firebase from "firebase/compat/app";

export const addNotes = (notesData, uid) => {
  try {
    db.collection(`users/${uid}/notes`).add({
      title: notesData.title,
      enteredNotes: notesData.enteredNotes,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      isPinned: notesData.isPinned,
      isArchived: false,
      isTrashed: false,
      color: notesData.color,
      selectedLabels: notesData.selectedLabels,
      priority: notesData.priority,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
