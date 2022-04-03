import {
  Archive,
  Delete,
  Edit,
  PushPin,
  PushPinOutlined,
} from "@mui/icons-material";
import "./notes.css";
import parse from "html-react-parser";
import { archiveNote, moveToTrash, toggleIsPinned } from "../../services";
import { useAuth } from "../../context";
import { ColorButton, LabelMultiSelect, NotesForm } from "../";
import { useState } from "react";
import { PriorityDropdown } from "../priority-dropdown/PriorityDropdown";

export const Notes = ({ note }) => {
  const { user } = useAuth();
  const [showForm, setForm] = useState(false);
  const createdDate = note.createdAt?.toDate();

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
      <span className="priority--label">{note?.priority}</span>
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
        <div className="created--time">
          {createdDate &&
            `Created At ${createdDate.getDate()}-${
              createdDate.getMonth() + 1
            }-${createdDate.getFullYear()}`}
        </div>
        <div className="tools--container">
          <PriorityDropdown
            selected={note?.priority}
            id={note.id}
            color={note.color}
          />
          <LabelMultiSelect
            color={note.color}
            selectedLabels={note.selectedLabels}
            id={note.id}
          />
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
