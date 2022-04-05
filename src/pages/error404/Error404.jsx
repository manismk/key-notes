import { errorImg } from "../../assets";
import { Navbar } from "../../components";
import "./error404.css";

export const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className="main--container">
        <h3 className="heading--3 text--center m-b-1">Page Not Found</h3>
        <div className="image--404--container">
          <img className="img--res" src={errorImg} alt="" />
        </div>
      </div>
    </>
  );
};
