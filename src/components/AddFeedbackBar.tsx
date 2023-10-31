import Container from "./Container";

function AddFeedbackBar() {
  return (
    <div className="bg-slate-900 mb-10">
      <Container>
        <div className="flex py-3 justify-between items-center">
          <div className="flex space-x-2">
            <p>Sort by:</p>
            <p className="font-bold">Most Upvotes</p>
          </div>
          <div>
            <button className="flex bg-purple-600 p-2 px-4 rounded-xl font-semibold gap-2 items-center transition-all hover:bg-purple-700 focus:ring-2 ring-purple-500">
              <div className="mb-[2px] font-bold text-lg">+</div>
              Add Feedback
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddFeedbackBar;
