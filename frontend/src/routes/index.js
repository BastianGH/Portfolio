import { Routes, Route } from "react-router-dom";
import {
  Home,
  Experience,
  Achievements,
  Details,
  About,
  PageNotFound,
} from "../pages";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
        <Route path="/Portfolio/experience" element={<Experience />} />
        <Route path="/Portfolio/achievements" element={<Achievements />} />
        <Route path="/Portfolio/achievements/:id" element={<Details />} />
        <Route path="/Portfolio/about" element={<About />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
