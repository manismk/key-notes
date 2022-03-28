export const handleNotesValidation = (title, note) => {
  let error = "";
  if (title.length === 0 && note.length === 0)
    error = "Title and Note can't be empty";
  if (title.length && note.length === 0) error = "Note can't be Empty";
  if (note.length && title.length === 0) error = "Title can't be Empty";
  return { error };
};
