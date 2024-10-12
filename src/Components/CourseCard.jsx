function CourseCard() {
    return (
      <div
        // key={course.id}
        className="course-item p-5 rounded-3xl bg-white mb-8"
      >
        <div className="flex items-center">
          <div className="course-item__img">
            <img
              src="/public/images/img1.jpg"
              alt=""
              className="w-52 h-auto rounded-3xl overflow-hidden"
            />
          </div>
          <div className="course-item--detail flex-1 justify-self-start pl-6">
            <div className="course-item__body flex justify-between items-center gap-3 flex-1">
              <div>
                <h2 className="text-2xl font-extrabold">React.js Course</h2>
                <p className="text-base text-dark my-4">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Officia, aspernatur.
                </p>
              </div>
              <div className="rate">4</div>
            </div>
            <div className="course-item__footer">
              <div className="tags flex gap-4 mb-4">
                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-xl cursor-pointer">
                  Front End
                </span>
                <span className="bg-gray-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-xl cursor-pointer">
                  Front End
                </span>
              </div>
              <div className="caption flex items-center justify-between">
                <div className="date text-dark text-sm">
                  {new Date().toLocaleDateString("en-US", {
                    month: "short",
                    year: "numeric",
                    day: "numeric",
                  })}
                </div>
                <span className="bg-green-200 text-gray-800 text-xs font-medium px-3 py-1 rounded-xl cursor-default">
                  Completed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default CourseCard;