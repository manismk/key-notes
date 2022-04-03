import { useAuth } from "../../context";
import { handlePriority } from "../../services";

export const PriorityDropdown = ({
  color,
  selected,
  id,
  isFromForm,
  handleFormPriorityChange,
}) => {
  const { user } = useAuth();

  return (
    <select
      className={`bg--${color}`}
      value={selected}
      onChange={(e) => {
        !isFromForm && handlePriority(e.target.value, user.uid, id);
        isFromForm && handleFormPriorityChange(e.target.value);
      }}
    >
      <option value="high">High</option>
      <option value="medium">Medium</option>
      <option value="low">Low</option>
    </select>
  );
};
