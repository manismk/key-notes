import { handleBgColorChange } from "../../../utils";

export const ColorContainer = ({ uid, id }) => {
  return (
    <div className="color--container">
      <button
        className="bg--green"
        onClick={() => {
          handleBgColorChange("green", uid, id);
        }}
      ></button>
      <button
        className="bg--red"
        onClick={() => {
          handleBgColorChange("red", uid, id);
        }}
      ></button>
      <button
        className="bg--yellow"
        onClick={() => {
          handleBgColorChange("yellow", uid, id);
        }}
      ></button>
      <button
        className="bg--white"
        onClick={() => {
          handleBgColorChange("white", uid, id);
        }}
      ></button>
    </div>
  );
};
