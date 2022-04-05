import { Loader, Navbar, OtherNote } from "../../components";
import { useNotes } from "../../context";

export const Trash = () => {
  const { otherNotes, loading } = useNotes();

  return (
    <>
      <Navbar />
      <div className="main--container">
        <h2 className="text--center">Trashed Notes</h2>
        <div className="notes--container">
          {otherNotes.trashedNotes.length
            ? otherNotes.trashedNotes.map((note) => (
                <OtherNote key={note.id} note={note} isTrashed={true} />
              ))
            : "No trashed notes found"}
        </div>
        {loading && <Loader />}
      </div>
    </>
  );
};
