import { Navbar, Notes } from "../../components";
import { useNotes } from "../../context";
import "./notesHome.css";

export const NotesHome = () => {
  const { notesState } = useNotes();

  return (
    <>
      <Navbar />
      <div className="main--container">
        <div className="notes--container">
          {notesState.notes.length
            ? notesState.notes.map((note) => <Notes note={note} />)
            : "No notes found. Start Adding notes"}
        </div>
      </div>
    </>
  );
};
