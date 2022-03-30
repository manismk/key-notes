export const handleNotesValidation = (title, note) => {
  if (title.length === 0 && note.length === 0)
    return "Title and Note can't be empty";
  if (title.length && note.length === 0) return "Note can't be Empty";
  if (note.length && title.length === 0) return "Title can't be Empty";
  return "";
};
