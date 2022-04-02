import ReactQuill from "react-quill";
import "./notesForm.css";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import { useAuth } from "../../context";
import { addNotes, updateNotes } from "../../services";
import { handleNotesValidation } from "../../utils";
import { Label, PushPin, PushPinOutlined } from "@mui/icons-material";
import { ColorButton, LabelMultiSelect } from "../";

const modules = {
  toolbar: [
    [{ header: [3, 4, false] }],
    ["bold", "italic", "underline"],
    [{ list: "ordered" }, { list: "bullet" }],
  ],
};

const initialData = {
  title: "",
  enteredNotes: "",
  isPinned: false,
  color: "white",
  error: "",
};

export const NotesForm = ({ closeForm, isFromEdit, editNoteData }) => {
  const [notesData, setNotesData] = useState(initialData);
  const { user } = useAuth();
  useEffect(() => {
    if (isFromEdit) {
      setNotesData(editNoteData);
    }
  }, []);
  const submitForm = () => {
    const error = handleNotesValidation(
      notesData.title,
      notesData.enteredNotes
    );
    if (error.length) {
      setNotesData((prev) => ({ ...prev, error: error }));
      alert(error); // change to toast later
    }
    if (error.length === 0) {
      !isFromEdit && addNotes(notesData, user.uid);
      isFromEdit && updateNotes(notesData, user.uid);
      closeForm();
    }
  };

  return (
    <>
      <div className={`form--container modal bg--${notesData.color}`}>
        <button
          className="btn icon--btn icon--badge pin--btn"
          onClick={() => {
            setNotesData((prev) => ({
              ...prev,
              isPinned: !notesData.isPinned,
            }));
          }}
        >
          {notesData.isPinned ? <PushPin /> : <PushPinOutlined />}
        </button>
        <div className="input--container">
          <input
            type="text"
            id="notesTitle"
            className="input"
            placeholder="Add Notes Title here"
            value={notesData.title}
            onChange={(e) => {
              setNotesData((prev) => ({ ...prev, title: e.target.value }));
            }}
          />
        </div>
        <div className="editor">
          <ReactQuill
            placeholder="Add your notes here"
            modules={modules}
            value={notesData.enteredNotes}
            onChange={(e) => {
              setNotesData((prev) => ({ ...prev, enteredNotes: e }));
            }}
          />
        </div>
        <div className="form--cta">
          <div className="toolbar">
            <LabelMultiSelect color={notesData.color} />
            <ColorButton
              isFromForm={true}
              handleFormColorChange={(color) => {
                setNotesData((prev) => ({ ...prev, color: color }));
              }}
            />
          </div>
          <div className="cta--container">
            <button className="btn btn--secondary" onClick={closeForm}>
              Cancel
            </button>
            <button
              className="btn btn--primary"
              onClick={() => {
                submitForm();
              }}
            >
              {isFromEdit ? "Update" : "Add"} Note
            </button>
          </div>
        </div>
      </div>
      <div className="overlay overlay-notes" onClick={closeForm}></div>
    </>
  );
};
