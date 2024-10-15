import CourseCard from "./CourseCard";
import EnglishLecturePic from "../assets/images/img1.jpg"
import DesignStrategy from "../assets/images/img2.jpg"
import BusinessLecture from "../assets/images/img3.jpg"
const courses = [
  {
    id: 1,
    title: "English Lecture",
    description: "language lessons with the most popular teachers",
    image: EnglishLecturePic,
    rate: "4.5",
    tags: ["languages"],
    start: "2021-08-01T20:46:30.615Z",
    status: "Completed",
  },
  {
    id: 2,
    title: "Design Strategy",
    description:
      "lesson on planning design concept and proper planning of work",
    image: DesignStrategy,
    rate: "4",
    tags: ["UI/UX design ", "web design"],
    start: "2023-07-01T20:46:30.615Z",
    status: "Upcoming",
  },
  {
    id: 3,
    title: "Business Lecture",
    description:
      "lectures on how to build your business safely without fare of new projects",
    image: BusinessLecture,
    rate: "3.9",
    tags: ["Marketing ", "Finance"],
    start: "2024-04-01T20:46:30.615Z",
    status: "Active",
  },
];

function CourseList() {
  return (
    <div className="course-list rounded-2xl mt-8">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}

export default CourseList;
