import { filterActions } from "../constant";
import { getPriorityNotes, getSortedNotes } from "../utils";

let allNotes = [];

export const filterReducer = (state, action) => {
  switch (action.type) {
    case filterActions.NOTES_CHANGE:
      allNotes = action.payload.notes;
      return {
        ...state,
        filteredNotes: getPriorityNotes(
          action.payload.notes,
          state.priority,
          state.sort
        ),
      };
    case filterActions.SORT_CHANGE:
      return {
        ...state,
        filteredNotes: getSortedNotes(state.filteredNotes, action.payload.sort),
        sort: action.payload.sort,
      };

    case filterActions.PRIORITY_CHANGE:
      return {
        ...state,
        filteredNotes: getPriorityNotes(
          allNotes,
          action.payload.priority,
          state.sort
        ),
        priority: action.payload.priority,
      };
    default:
      return state;
  }
};
