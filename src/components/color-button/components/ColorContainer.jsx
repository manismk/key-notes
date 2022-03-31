import { handleBgColorChange } from "../../../services";

export const ColorContainer = ({
  uid,
  id,
  isFromForm,
  handleFormColorChange,
}) => {
  return (
    <div className="color--container">
      <button
        className="bg--green"
        onClick={() => {
          !isFromForm && handleBgColorChange("green", uid, id);
          isFromForm && handleFormColorChange("green");
        }}
      ></button>
      <button
        className="bg--red"
        onClick={() => {
          !isFromForm && handleBgColorChange("red", uid, id);
          isFromForm && handleFormColorChange("red");
        }}
      ></button>
      <button
        className="bg--yellow"
        onClick={() => {
          !isFromForm && handleBgColorChange("yellow", uid, id);
          isFromForm && handleFormColorChange("yellow");
        }}
      ></button>
      <button
        className="bg--white"
        onClick={() => {
          !isFromForm && handleBgColorChange("white", uid, id);
          isFromForm && handleFormColorChange("white");
        }}
      ></button>
    </div>
  );
};
