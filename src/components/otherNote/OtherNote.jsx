import { useAuth } from "../../context";
import parse from "html-react-parser";
import {
  Delete,
  DeleteForever,
  RestoreFromTrash,
  Unarchive,
} from "@mui/icons-material";
import {
  deletePermanently,
  moveToTrash,
  restoreFromTrash,
  unArchiveNote,
} from "../../services";

export const OtherNote = ({ note, isArchived, isTrashed }) => {
  const { user } = useAuth();
  return (
    <div className={`notes bg--${note.color}`}>
      <div className="notes--title">{note.title}</div>
      <div className="notes--content">{parse(note.enteredNotes)}</div>
      {note.selectedLabels.length > 0 && (
        <div className="label--data--container">
          {note.selectedLabels.map((label) => (
            <span key={label} className="label--text">
              {label}
            </span>
          ))}
        </div>
      )}
      <div className="notes--toolbar">
        <div></div>
        <div className="tools--container">
          {isArchived && (
            <>
              <button
                className="btn icon--btn "
                onClick={() => unArchiveNote(note, user.uid)}
              >
                <Unarchive />
              </button>
              <button
                className="btn icon--btn "
                onClick={() => moveToTrash(note, user.uid)}
              >
                <Delete />
              </button>
            </>
          )}
          {isTrashed && (
            <>
              <button
                className="btn icon--btn "
                onClick={() => restoreFromTrash(note, user.uid)}
              >
                <RestoreFromTrash />
              </button>
              <button
                className="btn icon--btn "
                onClick={() => deletePermanently(note, user.uid)}
              >
                <DeleteForever />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
