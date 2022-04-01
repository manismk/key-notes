import {
  Archive,
  Delete,
  Edit,
  Label,
  PushPin,
  PushPinOutlined,
} from "@mui/icons-material";
import "./notes.css";
import parse from "html-react-parser";
import { archiveNote, moveToTrash, toggleIsPinned } from "../../services";
import { useAuth } from "../../context";
import { ColorButton } from "../";
import { NotesForm } from "../";
import { useState } from "react";

export const Notes = ({ note }) => {
  const { user } = useAuth();
  const [showForm, setForm] = useState(false);
  // console.log(note.createdDate.toDate());
  const createdDate = note.createdAt.toDate();

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
        <div className="created--time">
          Created At
          {` ${createdDate.getDate()}-${
            createdDate.getMonth() + 1
          }-${createdDate.getFullYear()}`}
        </div>
        <div className="tools--container">
          <button className="btn icon--btn ">
            <Label />
          </button>
          <ColorButton uid={user.uid} noteId={note.id} isFromForm={false} />
          <button className="btn icon--btn " onClick={() => setForm(true)}>
            <Edit />
          </button>
          {showForm && (
            <NotesForm
              isFromEdit={true}
              closeForm={() => {
                setForm(false);
              }}
              editNoteData={note}
            />
          )}
          <button
            className="btn icon--btn "
            onClick={() => archiveNote(note, user.uid)}
          >
            <Archive />
          </button>
          <button
            className="btn icon--btn "
            onClick={() => moveToTrash(note, user.uid)}
          >
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
};
