import { ButtonVariants } from "@/types";
import { Button, Container } from "@/components";
import { BsPlus } from "react-icons/bs";

function AddFeedbackBar() {
  return (
    <div className="bg-slate-900 mb-10 md:bg-transparent">
      <Container>
        <div className="flex py-3 justify-between items-center md:bg-slate-900 md:rounded-lg md:p-6 md:mt-8">
          <div className="flex space-x-2 items-center">
            <div className="hidden md:block font-bold text-lg pr-5">
              6 Suggestions
            </div>
            <p>Sort by:</p>
            <p className="font-bold">Most Upvotes</p>
          </div>
          <div>
            <Button
              text="Add Feedback"
              variant={ButtonVariants.Purple}
              icon={<BsPlus />}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddFeedbackBar;
