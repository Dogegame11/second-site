import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import Courses from "./Pages/Courses";
import SingleCourse from "./Pages/singleCourse";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
          </Route>

          <Route path="*" element={<h1>Page not found!</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
