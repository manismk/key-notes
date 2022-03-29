import {
  Archive,
  ColorLens,
  Delete,
  Edit,
  Label,
  PushPin,
  PushPinOutlined,
} from "@mui/icons-material";
import "./notes.css";
import parse from "html-react-parser";
import { toggleIsPinned } from "../../utils";
import { useAuth } from "../../context";
import { ColorContainer } from "./components/ColorContainer";
import { useState } from "react";

export const Notes = ({ note }) => {
  const { user } = useAuth();
  const [showColor, setShowColor] = useState(false);

  return (
    <div className={`notes bg--${note.color}`}>
      <div className="notes--title">{note.title}</div>
      <div className="notes--content">{parse(note.enteredNotes)}</div>
      <button
        className="btn icon--btn pin--btn"
        onClick={() => toggleIsPinned(note.isPinned, user.uid, note.id)}
      >
        {note.isPinned ? <PushPin /> : <PushPinOutlined />}
      </button>
      <div className="notes--toolbar">
        <div></div>
        <div className="tools--container">
          <button className="btn icon--btn ">
            <Label />
          </button>
          <div
            className="color--wrapper"
            onMouseOver={() => setShowColor(true)}
            onMouseLeave={() => setShowColor(false)}
          >
            <button className="btn icon--btn ">
              <ColorLens />
            </button>
            {showColor && <ColorContainer uid={user.uid} id={note.id} />}
          </div>
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
