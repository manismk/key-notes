import { Navbar, OtherNotes, PinnedNotes } from "../../components";
import { useNotes } from "../../context";
import "./notesHome.css";

export const NotesHome = () => {
  const { notes } = useNotes();
  const hasPinnedNotes = notes.filter((note) => note.isPinned).length;
  const hasOtherNotes = notes.filter((note) => !note.isPinned).length;
  return (
    <>
      <Navbar />
      <div className="main--container">
        <div className="notes--container">
          {hasPinnedNotes > 0 ? <PinnedNotes /> : ""}
          {hasOtherNotes > 0 ? <OtherNotes /> : ""}
          {hasOtherNotes === 0 && hasPinnedNotes === 0 && "No Notes Found"}
        </div>
      </div>
    </>
  );
};
