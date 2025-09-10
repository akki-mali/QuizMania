

const Question = ({ question, selectedAnswer, onAnswerSelect }) => {
  const getAnswerClassName = (index) => {
    let baseClass = "w-full p-4 text-left rounded-xl border-2 font-medium transition-all duration-300 focus:outline-none ";

    if (selectedAnswer === null) {
      return baseClass + "border-gray-200 hover:border-blue-300 hover:bg-blue-50 bg-white";
    }

    // Show selection feedback
    if (index === selectedAnswer) {
      if (index === question.correctAnswer) {
        return baseClass + "border-green-500 bg-green-100 text-green-800";
      } else {
        return baseClass + "border-red-500 bg-red-100 text-red-800";
      }
    } else if (index === question.correctAnswer) {
      return baseClass + "border-green-500 bg-green-100 text-green-800";
    } else {
      return baseClass + "border-gray-200 bg-gray-50 text-gray-600";
    }
  };

  const getAnswerIcon = (index) => {
    if (selectedAnswer === null) return null;
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8 leading-relaxed">
        {question.question}
      </h2>

      <div className="grid gap-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerSelect(index)}
            disabled={selectedAnswer !== null}
            className={getAnswerClassName(index)}
          >
            <div className="flex items-center justify-between">
              <span className="text-left">{option}</span>
              {getAnswerIcon(index)}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;