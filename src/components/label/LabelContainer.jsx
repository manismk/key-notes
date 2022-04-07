import { Close, Done } from "@mui/icons-material";
import { useState } from "react";
import { useAuth, useNotes } from "../../context";
import { handleLabel } from "../../services";
import "./labelContainer.css";
import { LabelItem } from "./LabelItem";

const initialData = {
  enteredValue: "",
  error: "",
};

export const LabelContainer = ({ closeForm }) => {
  const [showAddForm, setAddForm] = useState(false);
  const [labelData, setLabelData] = useState(initialData);
  const { user } = useAuth();
  const { labels } = useNotes();

  const changeHandler = (e) => {
    setLabelData((prev) => ({
      ...prev,
      enteredValue: e.target.value,
      error: "",
    }));
  };

  const clickHandler = () => {
    const isPresentAlready = labels.filter(
      (label) => label.toLowerCase() === labelData.enteredValue.toLowerCase()
    );
    if (isPresentAlready.length === 0) {
      handleLabel([...labels, labelData.enteredValue], user.uid);
      setAddForm(false);
      setLabelData(initialData);
    } else {
      setLabelData((prev) => ({
        ...prev,
        error: "Label already present",
      }));
    }
  };
  return (
    <>
      <div className={`form--container modal label--container`}>
        <button className="btn icon--btn  close--btn" onClick={closeForm}>
          <Close />
        </button>
        <div className="create--label">
          {!showAddForm && (
            <button
              className="btn text--center w-100 btn--primary"
              onClick={() => setAddForm(true)}
            >
              Add Label
            </button>
          )}
          {showAddForm && (
            <>
              <input
                type="text"
                placeholder="Add Label Here"
                onChange={(e) => changeHandler(e)}
                value={labelData.enteredValue}
              />
              <button
                className="btn icon--btn "
                disabled={!labelData.enteredValue.length}
                onClick={() => {
                  clickHandler();
                }}
              >
                <Done />
              </button>
            </>
          )}
        </div>
        <p className="error-text">{labelData.error}</p>
        {labels.length ? (
          <div className="m-t-1">
            <p className="heading--5 text--center m-t-2">Added Labels</p>
            {labels.map((label) => (
              <LabelItem labelData={label} key={label} />
            ))}
          </div>
        ) : (
          "No labels Found"
        )}
      </div>
      <div className="overlay overlay-notes" onClick={closeForm}></div>
    </>
  );
};
