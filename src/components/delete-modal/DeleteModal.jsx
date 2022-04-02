import "./deleteModal.css";

export const DeleteModal = ({ closeModal, labelName, deleteLabel }) => {
  return (
    <>
      <div className="modal modal--alert z-5">
        <h5 className="modal--heading heading--4">
          Delete "{labelName}" label from all the notes?
        </h5>
        <p className="modal--text">
          Deleting "{labelName}" label will remove it from all the notes that
          has been tagged with "{labelName}" label. It will not delete the note
          only the label will be deleted. Are you sure you want to delete "
          {labelName}" label?
        </p>
        <div className="modal--actions">
          <button className="btn btn--secondary" onClick={closeModal}>
            Cancel
          </button>
          <button className="btn btn--primary" onClick={deleteLabel}>
            Delete
          </button>
        </div>
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </>
  );
};
