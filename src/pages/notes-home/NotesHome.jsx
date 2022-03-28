import { Navbar, Notes } from "../../components";
import { useNotes } from "../../context";
import "./notesHome.css";

export const NotesHome = () => {
  const { notes } = useNotes();
  return (
    <>
      <Navbar />
      <div className="main--container">
        <div className="notes--container">
          {notes.length
            ? notes.map((note) => <Notes note={note} key={note.id} />)
            : "No notes found. Start Adding notes"}
        </div>
      </div>
    </>
  );
};
