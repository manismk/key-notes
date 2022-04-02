import { Delete, Done, Edit } from "@mui/icons-material";
import { useState } from "react";
import { useAuth, useNotes } from "../../context";
import { handleLabel, handleLabelChange } from "../../services";
import { DeleteModal } from "../";

const removeLabelFromAllNotes = (currentLabel, notes, otherNotes, uid) => {
  notes.map((note) => {
    handleLabelChange(
      [...note.selectedLabels.filter((label) => label !== currentLabel)],
      uid,
      note.id
    );
  });
  otherNotes.archivedNotes.map((archiveNote) => {
    handleLabelChange(
      [...archiveNote.selectedLabels.filter((label) => label !== currentLabel)],
      uid,
      archiveNote.id,
      "archive"
    );
  });
  otherNotes.trashedNotes.map((trashNote) => {
    handleLabelChange(
      [...trashNote.selectedLabels.filter((label) => label !== currentLabel)],
      uid,
      trashNote.id,
      "trash"
    );
  });
};
const changeLabelInAllNotes = (
  currentLabel,
  newValue,
  notes,
  otherNotes,
  uid
) => {
  notes.map((note) => {
    handleLabelChange(
      [
        ...note.selectedLabels.map((label) =>
          label === currentLabel ? newValue : label
        ),
      ],
      uid,
      note.id
    );
  });
  otherNotes.archivedNotes.map((archiveNote) => {
    handleLabelChange(
      [
        ...archiveNote.selectedLabels.map((label) =>
          label === currentLabel ? newValue : label
        ),
      ],
      uid,
      archiveNote.id,
      "archive"
    );
  });
  otherNotes.trashedNotes.map((trashNote) => {
    handleLabelChange(
      [
        ...trashNote.selectedLabels.map((label) =>
          label === currentLabel ? newValue : label
        ),
      ],
      uid,
      trashNote.id,
      "trash"
    );
  });
};

export const LabelItem = ({ labelData: currentLabel }) => {
  const [isEditing, setEditing] = useState(false);
  const [editData, setEditData] = useState({
    error: "",
    enteredValue: currentLabel,
  });
  const [showModal, setShowModal] = useState(false);

  const { labels, notes, otherNotes } = useNotes();
  const { user } = useAuth();

  const changeHandler = (e) => {
    setEditData((prev) => ({
      ...prev,
      enteredValue: e.target.value,
      error: "",
    }));
  };

  const editLabel = () => {
    handleLabel(
      [
        ...labels.map((label) =>
          label === currentLabel ? editData.enteredValue : label
        ),
      ],
      user.uid
    );
    changeLabelInAllNotes(
      currentLabel,
      editData.enteredValue,
      notes,
      otherNotes,
      user.uid
    );
    setEditing(false);
  };

  const deleteLabel = () => {
    handleLabel(
      [...labels.filter((label) => label !== currentLabel)],
      user.uid
    );
    removeLabelFromAllNotes(currentLabel, notes, otherNotes, user.uid);
    setShowModal(false);
  };

  const clickHandler = () => {
    const isPresentAlready = labels.filter(
      (label) => label.toLowerCase() === editData.enteredValue.toLowerCase()
    );
    if (isPresentAlready.length === 0) {
      editLabel();
    } else {
      editData.enteredValue.toLowerCase() === currentLabel.toLowerCase() &&
        editLabel();
      editData.enteredValue !== currentLabel &&
        setEditData((prev) => ({
          ...prev,
          error: "Label already present",
        }));
    }
  };

  return (
    <>
      <div className="label--item">
        {!isEditing ? (
          <p>{currentLabel}</p>
        ) : (
          <input
            type="text"
            placeholder="Add Label Here"
            value={editData.enteredValue}
            onChange={(e) => changeHandler(e)}
          />
        )}
        {!isEditing ? (
          <div>
            <button className="btn icon--btn" onClick={() => setEditing(true)}>
              <Edit />
            </button>
            <button
              className="btn icon--btn"
              onClick={() => setShowModal(true)}
            >
              <Delete />
            </button>
          </div>
        ) : (
          <button
            className="btn icon--btn"
            onClick={clickHandler}
            disabled={!editData.enteredValue.length}
          >
            <Done />
          </button>
        )}
      </div>
      <p className="error-text">{editData.error}</p>
      {showModal && (
        <DeleteModal
          closeModal={() => setShowModal(false)}
          deleteLabel={deleteLabel}
          labelName={currentLabel}
        />
      )}
    </>
  );
};
