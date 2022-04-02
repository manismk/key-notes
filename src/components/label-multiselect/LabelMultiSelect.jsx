import { useState } from "react";
import { useAuth, useNotes } from "../../context";
import { handleLabelChange } from "../../services";
import "./multiSelect.css";

export const LabelMultiSelect = ({
  color,
  isFromForm,
  selectedLabels,
  handleFormLabelChange,
  id,
}) => {
  const [showDropdown, setDropdown] = useState(false);
  const { labels } = useNotes();
  const { user } = useAuth();

  const changeHandler = (value, checkedState) => {
    checkedState && handleLabelChange([...selectedLabels, value], user.uid, id);
    !checkedState &&
      handleLabelChange(
        [...selectedLabels.filter((label) => label !== value)],
        user.uid,
        id
      );
  };

  return (
    <div className="multiselect">
      <div className="selectBox" onClick={() => setDropdown((prev) => !prev)}>
        <select className={`bg--${color}`}>
          <option>Select Label</option>
        </select>
        <div className="overSelect"></div>
      </div>
      <div
        className={`checkboxes ${showDropdown ? "open" : "close"}`}
        onMouseLeave={() => setDropdown(false)}
      >
        {labels.length ? (
          labels.map((label) => (
            <label key={label} className={`bg--${color}`}>
              <input
                type="checkbox"
                value={label}
                checked={selectedLabels.includes(label)}
                onChange={(e) => {
                  isFromForm &&
                    handleFormLabelChange(e.target.value, e.target.checked);
                  !isFromForm &&
                    changeHandler(e.target.value, e.target.checked);
                }}
              />
              {label}
            </label>
          ))
        ) : (
          <label>No label found</label>
        )}
      </div>
    </div>
  );
};
