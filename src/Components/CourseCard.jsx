function CourseCard(props) {
  
    return (
      <div className="course-item p-5 rounded-3xl bg-zinc-50 mb-8 tracking-wider">
        <div className="flex items-center">
          <div className="course-item__img">
            <img
              src={props.course.imageUrl}
              alt=""
              className="w-52 h-auto rounded-3xl overflow-hidden"
            />
          </div>
          <div className="course-item--detail flex-1 justify-self-start pl-6">
            <div className="course-item__body flex justify-between items-center gap-3 flex-1">
              <div>
                <h2 className="text-2xl font-extrabold">
                  {props.course.title}
                </h2>
                <p className="text-base text-dark my-4">
                  {props.course.description}
                </p>
              </div>
              <div className="rate">{props.course.rate}</div>
            </div>
            <div className="course-item__footer">
              <div className="tags flex gap-4 mb-4">
                {props.course.tags.map((tag) => (
                  <span key={tag} className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-xl cursor-pointer tracking-wider">
                    {props.course.tags}
                  </span>
                ))}
              </div>
              <div className="caption flex items-center justify-between">
                <div className="date text-dark text-sm">
                  {new Date(props.course.start).toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                  })}
                </div>
                <span className="bg-green-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-xl cursor-default">
                  {props.course.status}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CourseCard;