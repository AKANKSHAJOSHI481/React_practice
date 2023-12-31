import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
export default function Card({ course, likedCourses, setLikedCourses }) {
  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      // already liked, so have to remove from
      setLikedCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed!!");
    } else {
      // have to insert the course in liked course
      if (likedCourses.length === 0) {
        setLikedCourses([course.id]);
      } else {
        setLikedCourses((prev) => [...prev, course.id]);
      }
      toast.success("Liked Successfully!!");
    }
  }
  return (
    <div className="w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80">
      <div className="relative">
        <img src={course.image.url} alt=""></img>
        <div className="w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center">
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontsize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontsize="1.75rem" />
            )}
          </button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-white font-semibold text-lg leading-6">
          {course.title}
        </p>
        <p className="text-white mt-2">
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
}
