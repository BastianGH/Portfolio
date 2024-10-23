import { Link } from "react-router-dom";
import "./pagenotfound.css";

export const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <h1>Ugh, seems you got in quite a dark place... Are you lost buddy ?</h1>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/Dennis_SpongeBob_Movie.webp`}
        alt="thug"
      />
      <div className="notfound-link">
        <span>Come back to the right way,</span>
        <Link to="/Portfolio">HERE</Link>
      </div>
    </div>
  );
};
