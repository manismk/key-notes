import { useNotes } from "../../context";
import { Notes } from "../notes/Notes";

export const OtherNotes = () => {
  const { notes } = useNotes();
  return (
    <>
      <h2 className="text--center">Other Notes</h2>
      {notes
        .filter((note) => !note.isPinned !== false)
        .map((note) => (
          <Notes key={note.id} note={note} />
        ))}
    </>
  );
};
