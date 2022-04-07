import { ColorLens } from "@mui/icons-material";
import { useState } from "react";
import { ColorContainer } from "./components/ColorContainer";

export const ColorButton = ({
  uid,
  noteId,
  isFromForm,
  handleFormColorChange,
}) => {
  const [showColor, setShowColor] = useState(false);
  return (
    <div
      className="color--wrapper"
      onClick={() => setShowColor((prev) => !prev)}
      onMouseOver={() => setShowColor(true)}
      onMouseLeave={() => setShowColor(false)}
    >
      <button className="btn icon--btn ">
        <ColorLens />
      </button>
      {showColor && (
        <ColorContainer
          uid={uid}
          id={noteId}
          isFromForm={isFromForm}
          handleFormColorChange={handleFormColorChange}
        />
      )}
    </div>
  );
};
