import { filterActions } from "../../constant";
import { useFilter } from "../../context";
import "./filter.css";

const priorityData = [
  { id: "priorityAll", value: "all", labelName: "All" },
  { id: "priorityHigh", value: "high", labelName: "High" },
  { id: "PriorityMedium", value: "medium", labelName: "Medium" },
  { id: "priorityLow", value: "low", labelName: "Low" },
];

const changeHandler = (e, filterDispatch) => {
  filterDispatch({
    type: filterActions.PRIORITY_CHANGE,
    payload: { priority: e.target.value },
  });
};

export const Filters = () => {
  const { filterState, filterDispatch } = useFilter();

  return (
    <div className="filter--container">
      <div>
        <label htmlFor="sortByTime" className="m-r-1">
          Sort By
        </label>
        <select
          id="sortByTime"
          value={filterState?.sort}
          onChange={(e) =>
            filterDispatch({
              type: filterActions.SORT_CHANGE,
              payload: { sort: e.target.value },
            })
          }
        >
          <option value="newest">Newest On Top</option>
          <option value="oldest">Oldest On Top</option>
        </select>
      </div>
      <div className="priority--container">
        <p>Priority</p>
        {priorityData.map((priority) => (
          <span key={priority.id}>
            <input
              type="radio"
              id={priority.id}
              className="priority--radio"
              name="priority"
              value={priority.value}
              checked={filterState.priority === priority.value ? true : false}
              onChange={(e) => changeHandler(e, filterDispatch)}
            />
            <label htmlFor={priority.id} className="radio--label">
              {priority.labelName}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};
