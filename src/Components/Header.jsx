const courseStatus = ["All", "Active", "Upcoming", "Completed"];
function Header() {
  return (
    <div className="course-status flex gap-4 flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mt-4 tracking-wide">
        My Courses (3)
      </h1>
      <div className="flex gap-4">
        {courseStatus.map(status => {
          return <button key={status}>{status}</button>
        })}
      </div>
    </div>
  );
}

export default Header;
