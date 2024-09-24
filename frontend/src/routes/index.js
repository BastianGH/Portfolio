import { Routes, Route } from "react-router-dom";
import {
  Home,
  Experience,
  Achievements,
  Details,
  Tools,
  About,
  PageNotFound,
} from "../pages";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/achievements/:id" element={<Details />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default Routing;
