export const getSortedNotes = (notes, sort) => {
  if (sort === "newest")
    return [...notes].sort(
      (note1, note2) => note2.createdAt?.toDate() - note1.createdAt?.toDate()
    );
  if (sort === "oldest")
    return [...notes].sort(
      (note1, note2) => note1.createdAt?.toDate() - note2.createdAt?.toDate()
    );
  return notes;
};
