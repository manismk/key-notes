import "./home.css";
import { heroImg } from "../../assets/";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container grid grid--2--cols">
      <div className="content--container">
        <div className="content">
          <h1 className="heading--1">
            <span>Key</span> Notes
          </h1>
          <div className="content--description">
            <p className="tagline"> Get organized. Remember everything </p>
            <p>
              Manage your daily tasks and workflow in a modern way and boost
              your efficiency without any efforts.
            </p>
          </div>
          <div className="cta--container">
            <button className="btn btn--primary">
              Start Note taking journey
            </button>
            <Link className="link link--primary m-r-1" to="/login">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
      <div className="image--container">
        <img className="img--res" src={heroImg} alt="" />
      </div>
    </div>
  );
};
