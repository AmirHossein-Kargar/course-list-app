function App() {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold mt-4">My Courses (3)</h1>
      <div className="course-list bg-white rounded-2xl mt-4">
        <div className="course-item p-4 rounded-2xl bg-white mb-8 flex">
          <div className="course-item__img">
            <img src="/public/images/img1.jpg" alt="" className="w-60 h-auto rounded-2xl overflow-hidden" />
          </div>
          <div className="course-item--detail flex-1 justify-self-start p-4 pr-0">
            <div className="course-item__body flex justify-between items-center gap-3 flex-1 mb-6">
                <div>
                    <h2 className="text-2xl font-extrabold mb-2">React.js Course</h2>
                    <p className="text-base text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, aspernatur.</p>
                </div>
                <div className="course-item__footer">
                  <div className="tags"></div>
                </div>
                <div className="rate">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App