import Question from "./Question";
import Sidebar2 from "./Sidebar2";

const QuizLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar2 />

      <div className="flex-1 flex flex-col items-center justify-center">
        <Question />
      </div>
    </div>
  );
};

export default QuizLayout;
