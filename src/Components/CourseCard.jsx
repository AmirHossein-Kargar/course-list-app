function CourseCard({ course }) {
  return (
    <div className="course-item p-5 rounded-3xl bg-zinc-50 mb-8 tracking-wider">
      <div className="flex items-center">
        <div className="course-item__img">
          <img
            src={course.image}
            alt={course.title}
            className="w-52 h-auto rounded-3xl overflow-hidden"
          />
        </div>
        <div className="course-item--detail flex-1 justify-self-start pl-6">
          <CourseCardBody
            title={course.title}
            description={course.description}
            rate={course.rate}
          />
          <CourseCardFooter course={course} />
        </div>
      </div>
    </div>
  );
}

export default CourseCard;

function CourseCardBody({ title, description, rate }) {
  return (
    <div className="course-item__body flex justify-between items-center gap-3 flex-1">
      <div>
        <h2 className="text-2xl font-extrabold">{title}</h2>
        <p className="text-base text-dark my-4">{description}</p>
      </div>
      <div className="rate font-medium">{rate} ⭐</div>
    </div>
  );
}

function CourseCardFooter({ course }) {
  const startedAt = new Date(course.start).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
    day: "numeric",
  });

  return (
    <div className="course-item__footer">
      <div className="tags flex gap-4 mb-4 flex-col w-max md:flex-row">
        {course.tags.map((tag) => (
          <span
            key={tag}
            className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-xl cursor-pointer tracking-wider capitalize"
          >
            {course.tags}
          </span>
        ))}
      </div>
      <div className="caption flex items-center justify-between">
        <div className="date text-dark text-sm">
          {startedAt}
        </div>
        <span
          className={`text-gray-800 text-xs font-semibold px-3 py-1 rounded-xl cursor-default ${
            course.status == "Upcoming"
              ? "bg-yellow-200"
              : course.status == "Active"
              ? "bg-green-200"
              : "bg-gray-200"
          }`}
        >
          {course.status}
        </span>
      </div>
    </div>
  );
}
