import {
  Filters,
  Navbar,
  PinnedNotes,
  UnPinnedNotes,
  Loader,
} from "../../components";
import { useFilter, useNotes } from "../../context";
import "./notesHome.css";

export const NotesHome = () => {
  const {
    filterState: { filteredNotes: notes },
  } = useFilter();
  const { loading } = useNotes(0);
  const hasPinnedNotes = notes.filter((note) => note.isPinned).length;
  const hasUnPinnedNotes = notes.filter((note) => !note.isPinned).length;
  return (
    <>
      <Navbar />
      <div className="main--container">
        <div className="notes--container">
          <Filters />
          {hasPinnedNotes > 0 ? <PinnedNotes notes={notes} /> : ""}
          {hasUnPinnedNotes > 0 ? <UnPinnedNotes notes={notes} /> : ""}
          {hasUnPinnedNotes === 0 && hasPinnedNotes === 0 && "No Notes Found"}
        </div>
        {loading && <Loader />}
      </div>
    </>
  );
};
