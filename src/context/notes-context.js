import { createContext, useReducer, useContext } from "react";
import { notesReducer } from "../reducer/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [notesState, notesDispatch] = useReducer(notesReducer, { notes: [] });

  return (
    <NotesContext.Provider value={{ notesState, notesDispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
