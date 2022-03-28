import {
  Archive,
  ColorLens,
  Delete,
  Edit,
  Label,
  PushPin,
} from "@mui/icons-material";
import "./notes.css";
import parse from "html-react-parser";

export const Notes = ({ note }) => {
  return (
    <div className="notes">
      <div className="notes--title">{note.title}</div>
      <div className="notes--content">{parse(note.enteredNotes)}</div>
      <button className="btn icon--btn pin--btn">
        <PushPin />
      </button>
      <div className="notes--toolbar">
        <div></div>
        <div className="tools--container">
          <button className="btn icon--btn ">
            <Label />
          </button>
          <button className="btn icon--btn ">
            <ColorLens />
          </button>
          <button className="btn icon--btn ">
            <Edit />
          </button>
          <button className="btn icon--btn ">
            <Archive />
          </button>
          <button className="btn icon--btn ">
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
};
