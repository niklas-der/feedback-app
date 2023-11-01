import Feedback from "@/components/Feedback";
import { AddFeedbackBar, Header } from "./components";
import { mockFeedbacks } from "@/data/feedbacks";

function FeedbackOverview() {
  return (
    <div className="xl:flex justify-center">
      <Header />
      <div className="space-y-8">
        <AddFeedbackBar />
        {mockFeedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}

export default FeedbackOverview;
