import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Loader,
  Navbar,
  OtherNote,
  PinnedNotes,
  UnPinnedNotes,
} from "../../components";
import { useNotes } from "../../context";

export const SingleLabel = () => {
  const params = useParams();
  const { notes, otherNotes, loading } = useNotes();
  const [labelNotes, setLabelNotes] = useState({
    notes: [],
    archivedNotes: [],
  });

  const hasPinnedNotes = labelNotes.notes.filter(
    (note) => note.isPinned
  ).length;
  const hasUnPinnedNotes = labelNotes.notes.filter(
    (note) => !note.isPinned
  ).length;
  const hasArchivedNotes = labelNotes.archivedNotes.length;

  useEffect(() => {
    setLabelNotes((prev) => ({
      ...prev,
      notes: notes.filter(
        (note) =>
          note.selectedLabels.filter(
            (label) => label.toLowerCase() === params.labelId.toLowerCase()
          ).length > 0
      ),
    }));
    setLabelNotes((prev) => ({
      ...prev,
      archivedNotes: otherNotes?.archivedNotes.filter(
        (archivedNote) =>
          archivedNote.selectedLabels.filter(
            (label) => label.toLowerCase() === params.labelId.toLowerCase()
          ).length > 0
      ),
    }));
  }, [params, notes, otherNotes?.archivedNotes]);

  return (
    <div>
      <Navbar />
      <div className="main--container">
        <div className="notes--container">
          {hasPinnedNotes > 0 ? <PinnedNotes notes={labelNotes.notes} /> : ""}
          {hasUnPinnedNotes > 0 ? (
            <UnPinnedNotes notes={labelNotes.notes} />
          ) : (
            ""
          )}
          {hasArchivedNotes > 0 ? (
            <>
              <h2 className="text--center">Archived Notes</h2>
              {labelNotes.archivedNotes.map((archivedNote) => (
                <OtherNote
                  key={archivedNote.id}
                  note={archivedNote}
                  isArchived={true}
                />
              ))}
            </>
          ) : (
            ""
          )}
          {hasUnPinnedNotes === 0 &&
            hasPinnedNotes === 0 &&
            hasArchivedNotes === 0 &&
            "No Notes Found For This Label"}
        </div>
        {loading && <Loader />}
      </div>
    </div>
  );
};
