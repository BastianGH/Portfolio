import { Link } from "react-router-dom";
import "./pagenotfound.css";

export const PageNotFound = () => {
  return (
    <div className="pagenotfound">
      <h1>Ugh, seems you got in quite a dark place... Are you lost buddy ?</h1>
      <img src="assets/images/Dennis_SpongeBob_Movie.webp" alt="" />
      <div className="notfound-link">
        <span>Come back to the right way,</span>
        <Link to="/">HERE</Link>
      </div>
    </div>
  );
};
