import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebase";

import { useAuth } from "./";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const { user } = useAuth();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    try {
      db.collection(`users/${user.uid}/notes`).onSnapshot((querySnapshot) => {
        setNotes(
          querySnapshot.docs.map((note) => ({
            id: note.id,
            enteredNotes: note.data().enteredNotes,
            title: note.data().title,
          }))
        );
      });
    } catch (e) {
      console.log("Error in getting initial notes data", e);
    }
  }, [user.uid]);

  return (
    <NotesContext.Provider value={{ notes }}>{children}</NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
