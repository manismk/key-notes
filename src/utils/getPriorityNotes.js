import { getSortedNotes } from "./getSortedNotes";

export const getPriorityNotes = (notes, priority, sort) => {
  if (priority === "all") return getSortedNotes(notes, sort);
  return getSortedNotes(
    notes.filter((note) => note.priority === priority),
    sort
  );
};
