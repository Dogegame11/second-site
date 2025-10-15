import data from "../data/data.json";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();

  console.log(location);
  const course = data.find((course) => course.slug === params.courseSlug);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  return (
    <div>
      <>
        <h1>single Course info</h1>
        <h2>{course?.title}</h2>
        <h2>{course?.slug}</h2>
        <h2>{course?.id}</h2>
        <Link
          className="text-amber-300 hover:text-amber-600"
          to=".."
          relative="path"
        >
          All courses
        </Link>
      </>
    </div>
  );
};

export default SingleCourse;
