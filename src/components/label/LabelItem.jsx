import { Delete, Done, Edit } from "@mui/icons-material";
import { useState } from "react";
import { useAuth, useNotes } from "../../context";
import { handleLabel } from "../../services";

export const LabelItem = ({ labelData }) => {
  const [isEditing, setEditing] = useState(false);
  const [editData, setEditData] = useState({
    error: "",
    enteredValue: labelData,
  });
  const { labels } = useNotes();
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
          label === labelData ? editData.enteredValue : label
        ),
      ],
      user.uid
    );
    setEditing(false);
  };

  const clickHandler = () => {
    const isPresentAlready = labels.filter(
      (label) => label.toLowerCase() === editData.enteredValue.toLowerCase()
    );
    if (isPresentAlready.length === 0) {
      editLabel();
    } else {
      editData.enteredValue === labelData && setEditing(false);
      editData.enteredValue.toLowerCase() === labelData.toLowerCase() &&
        editLabel();
      editData.enteredValue !== labelData &&
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
          <p>{labelData}</p>
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
              onClick={() => {
                handleLabel(
                  [...labels.filter((label) => label !== labelData)],
                  user.uid
                );
              }}
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
    </>
  );
};
