import useQuizStore from "@/store/useQuiz";

const Question = () => {
  const {
    questions,
    currentQuestion,
    selectAnswer,
    answers,
    nextQuestion,
    prevQuestion,
    showScore,
    score,
    resetQuiz,
  } = useQuizStore();

  const question = questions[currentQuestion];
  const currentAnswer = answers[currentQuestion];

  const handleSelect = (optionIndex: any) => {
    selectAnswer(optionIndex);
  };

  return (
    <div className="w-3/4 p-6">
      <h3 className="text-2xl font-semibold">{question.question}</h3>
      <div className="mt-4">
        {question.options.map((option, index) => (
          <div key={index} className="my-2">
            <label className="flex items-center">
              <input
                type="radio"
                name={`qestion-${currentQuestion}`}
                checked={currentAnswer === index}
                onChange={() => handleSelect(index)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {currentQuestion > 0 && (
          <button
            onClick={prevQuestion}
            className="mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Previous
          </button>
        )}
      </div>

      {currentQuestion < questions.length - 1 ? (
        <button>Next</button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Question;
