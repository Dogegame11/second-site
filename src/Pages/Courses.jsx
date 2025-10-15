import data from "../data/data.json";
import queryString from "query-string";
import { useState, useMemo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const SORT_KEYS = ["title", "slug", "id"];

function sortCourses(courses, key) {
  const sortedCourses = [...courses];
  if (!key || !SORT_KEYS.includes(key)) return sortedCourses;

  sortedCourses.sort((a, b) => a[key] - b[key]);
  return sortedCourses;
}

const Courses = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = queryString.parse(location.search);
  const [sortKey, setSortKey] = useState(query.sort);
  const sortedCourses = useMemo(() => sortCourses(data, sortKey), [sortKey]);

  useEffect(() => {
    if (!SORT_KEYS.includes(sortKey)) {
      navigate(".");
      setSortKey();
    }
  }, [sortKey, navigate]);

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        {sortKey ? `Courses sorted by ${sortKey}` : "Courses"}
      </h1>

      <div className="flex justify-center gap-6 mb-8">
        {SORT_KEYS.map((key) => (
          <label key={key} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={sortKey === key}
              onChange={() => setSortKey(sortKey === key ? undefined : key)}
            />
            <span className="text-gray-700">Sort by {key}</span>
          </label>
        ))}
      </div>

      <div className="grid gap-8 sm:grid-cols-3 lg:grid-cols-3">
        {sortedCourses.map((course) => (
          <Link
            to={course.slug}
            key={course.id}
            className="h-20 flex justify-center items-center group relative bg-white shadow-lg rounded-2xl overflow-hidden transition-transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {course.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
