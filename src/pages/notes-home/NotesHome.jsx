import { Navbar, Notes } from "../../components";
import "./notesHome.css";

export const NotesHome = () => {
  return (
    <>
      <Navbar />
      <div className="main--container">
        <div className="notes--container">
          <Notes />
          <Notes />
        </div>
      </div>
    </>
  );
};
