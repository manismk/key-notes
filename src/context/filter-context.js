import { createContext, useContext, useEffect, useReducer } from "react";
import { filterActions } from "../constant";
import { filterReducer } from "../reducer/filterReducer";
import { useNotes } from "./";

const FilterContext = createContext();

const FilterProvider = ({ children }) => {
  const { notes } = useNotes();
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    filteredNotes: notes,
    sort: "newest",
    priority: "all",
  });

  useEffect(() => {
    filterDispatch({
      type: filterActions.NOTES_CHANGE,
      payload: { notes: notes },
    });
  }, [notes]);

  return (
    <FilterContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { FilterProvider, useFilter };
