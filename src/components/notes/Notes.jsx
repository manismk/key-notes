import {
  Archive,
  ColorLens,
  Delete,
  Edit,
  Label,
  PushPin,
} from "@mui/icons-material";
import "./notes.css";

export const Notes = () => {
  return (
    <div className="notes">
      <div className="notes--title">Title</div>
      <div className="notes--content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
        veritatis porro maxime natus iure dicta nam vitae. Placeat quod enim
        earum est cum! Sit aspernatur quos molestiae iste pariatur?
      </div>
      <button class="btn icon--btn pin--btn">
        <PushPin />
      </button>
      <div className="notes--toolbar">
        <div></div>
        <div className="tools--container">
          <button class="btn icon--btn ">
            <Label />
          </button>
          <button class="btn icon--btn ">
            <ColorLens />
          </button>
          <button class="btn icon--btn ">
            <Edit />
          </button>
          <button class="btn icon--btn ">
            <Archive />
          </button>
          <button class="btn icon--btn ">
            <Delete />
          </button>
        </div>
      </div>
    </div>
  );
};
