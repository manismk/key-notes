import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";

import { useAuth } from "./";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);
  const [otherNotes, setOtherNotes] = useState({
    archivedNotes: [],
    trashedNotes: [],
  });
  const [labels, setLabels] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      if (user.uid) {
        db.collection(`users/${user.uid}/notes`)
          .where("isArchived", "==", false)
          .where("isTrashed", "==", false)
          .onSnapshot((querySnapshot) => {
            setNotes(
              querySnapshot.docs.map((note) => ({
                id: note.id,
                ...note.data(),
              }))
            );
            setLoading(false);
          });
        db.collection(`users/${user.uid}/archives`)
          .where("isTrashed", "==", false)
          .onSnapshot((querySnapshot) => {
            setOtherNotes((prev) => ({
              ...prev,
              archivedNotes: querySnapshot.docs.map((note) => ({
                ...note.data(),
              })),
            }));
            setLoading(false);
          });
        db.collection(`users/${user.uid}/trashes`).onSnapshot(
          (querySnapshot) => {
            setOtherNotes((prev) => ({
              ...prev,
              trashedNotes: querySnapshot.docs.map((note) => ({
                ...note.data(),
              })),
            }));
            setLoading(false);
          }
        );
        db.collection(`users/${user.uid}/labels`).onSnapshot(
          (querySnapshot) => {
            setLabels(
              querySnapshot.docs.map((userId) => userId.data().label).length
                ? querySnapshot.docs.map((userId) => userId.data().label)[0]
                : []
            );
            setLoading(false);
          }
        );
      }
    } catch (e) {
      console.log("Error in getting initial notes data", e);
      setLoading(false);
    }
  }, [user.uid]);

  return (
    <NotesContext.Provider value={{ notes, otherNotes, labels, loading }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
