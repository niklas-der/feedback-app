import { useState } from "react";
import "./App.css";
import AddFeedbackBar from "./components/AddFeedbackBar";
import Feedback from "./components/Feedback";
import Header from "./components/Header";
import { mockFeedbacks } from "./mock/feedbacks";

function App() {
  const [feedbacks] = useState(mockFeedbacks);

  return (
    <div>
      <Header />
      <AddFeedbackBar />
      <div className="space-y-8">
        {feedbacks.map((feedback) => (
          <Feedback feedback={feedback} />
        ))}
      </div>
    </div>
  );
}

export default App;
