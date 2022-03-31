import { Navbar, OtherNote } from "../../components";
import { useNotes } from "../../context";

export const Archive = () => {
  const { otherNotes } = useNotes();

  return (
    <>
      <Navbar />
      <div className="main--container">
        <div className="notes--container">
          {otherNotes.archivedNotes.length
            ? otherNotes.archivedNotes.map((note) => (
                <OtherNote key={note.id} note={note} isArchived={true} />
              ))
            : "No archive notes found"}
        </div>
      </div>
    </>
  );
};
