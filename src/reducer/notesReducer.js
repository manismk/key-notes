export const notesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_NOTES":
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            notes: action.payload.notes,
            createdAt: new Date().toLocaleString(),
          },
        ],
      };

    default:
      return 0;
  }
};
