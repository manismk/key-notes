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

  useEffect(() => {
    try {
      db.collection(`users/${user.uid}/notes`)
        .where("isArchived", "==", false)
        .onSnapshot((querySnapshot) => {
          setNotes(
            querySnapshot.docs.map((note) => ({
              id: note.id,
              ...note.data(),
            }))
          );
        });
      db.collection(`users/${user.uid}/archives`).onSnapshot(
        (querySnapshot) => {
          setOtherNotes((prev) => ({
            ...prev,
            archivedNotes: querySnapshot.docs.map((note) => ({
              ...note.data(),
            })),
          }));
        }
      );
    } catch (e) {
      console.log("Error in getting initial notes data", e);
    }
  }, [user.uid]);

  return (
    <NotesContext.Provider value={{ notes, otherNotes }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
