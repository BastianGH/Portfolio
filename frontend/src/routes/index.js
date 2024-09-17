import { Routes, Route } from "react-router-dom";
import { Home, Experience } from "../pages";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default Routing;
