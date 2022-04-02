import { useState } from "react";
import { useNotes } from "../../context";
import "./multiSelect.css";
export const LabelMultiSelect = ({ color }) => {
  const [showDropdown, setDropdown] = useState(false);
  const { labels } = useNotes();

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
              <input type="checkbox" />
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
