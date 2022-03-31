import { useAuth } from "../../context";
import parse from "html-react-parser";
import { Delete, Unarchive } from "@mui/icons-material";
import { unArchiveNote } from "../../utils";

export const OtherNote = ({ note, isArchived, isTrashed }) => {
  const { user } = useAuth();
  return (
    <div className={`notes bg--${note.color}`}>
      <div className="notes--title">{note.title}</div>
      <div className="notes--content">{parse(note.enteredNotes)}</div>

      <div className="notes--toolbar">
        <div></div>
        <div className="tools--container">
          {isArchived && (
            <button
              className="btn icon--btn "
              onClick={() => unArchiveNote(note, user.uid)}
            >
              <Unarchive />
            </button>
          )}
          <button className="btn icon--btn ">
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
};
