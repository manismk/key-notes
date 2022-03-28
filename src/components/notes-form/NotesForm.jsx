import ReactQuill from "react-quill";
import "./notesForm.css";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { useAuth } from "../../context";
import { addNotes } from "../../utils/";

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
};

export const NotesForm = ({ closeForm }) => {
  const [notesData, setNotesData] = useState(initialData);
  const { user } = useAuth();

  return (
    <>
      <div className="form--container modal">
        <div className="input--container">
          <label htmlFor="notesTitle" className="input--label">
            Title
          </label>
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
          <div></div>
          <div>
            <button className="btn btn--secondary" onClick={closeForm}>
              Cancel
            </button>
            <button
              className="btn btn--primary"
              onClick={() => {
                addNotes(notesData, user.uid);
                closeForm();
              }}
            >
              Add Note
            </button>
          </div>
        </div>
      </div>
      <div className="overlay overlay-notes" onClick={closeForm}></div>
    </>
  );
};
