import { useNotes } from "../../context";
import { Notes } from "../notes/Notes";

export const PinnedNotes = () => {
  const { notes } = useNotes();
  return (
    <>
      <h2 className="text--center">Pinned Notes</h2>
      {notes
        .filter((note) => note.isPinned)
        .map((note) => (
          <Notes key={note.id} note={note} />
        ))}
    </>
  );
};
