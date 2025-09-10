import { Trophy } from 'lucide-react';

const Results = ({ result }) => {
  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);

  const getPerformanceFeedback = () => {
    if (percentage >= 80) {
      return {
        title: "Great Job!",
        message: "You've mastered this topic! Your knowledge is impressive.",
        color: "text-green-600",
        bgColor: "bg-green-100",
        borderColor: "border-green-200"
      };
    } else if (percentage >= 60) {
      return {
        title: "Well Done!",
        message: "You have a solid understanding. Keep up the excellent work!",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200"
      };
    } else {
      return {
        title: "Keep Practicing!",
        message: "Every expert was once a beginner. Practice makes perfect!",
        color: "text-orange-600",
        bgColor: "bg-orange-100",
        borderColor: "border-orange-200"
      };
    }
  };

  const feedback = getPerformanceFeedback();

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Results Header */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Score Display */}
        <div className=" p-8 mb-6">
          <div className="text-center mb-8">
            <h3 className="text-gray-600 text-xl">Your Score</h3>
            <div className={`text-6xl font-bold mb-2 ${feedback.color}`}>
              {percentage}%
            </div>
            <h4 className="text-2xl font-bold ">{feedback.title}</h4>
          </div>

          {/* Stats */}
          <div className='border-1 p-6 rounded-xl  w-full md:w-3/4 mx-auto'>
            <p className='text-center mb-2'>Out of 10 Question</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="text-center">
                <div className="text-xl font-bold text-green-600 mb-1">
                  {result.correctAnswers}
                  <span className="text-sm"> Correct</span>
                </div>

              </div>

              <div className="text-center">
                <div className="text-xl font-bold text-red-600 mb-1">
                  {result.totalQuestions - result.correctAnswers - result.unansweredQuestions}
                  <span className=" text-sm"> Incorrect</span>
                </div>

              </div>

              <div className="text-center">
                <div className="text-xl font-bold text-gray-600 mb-1">
                  {result.unansweredQuestions}
                  <span className=" text-sm"> Not answered</span>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="w-[200px] mx-auto flex space-x-4">
          <button
            onClick={() => window.location.reload()}
            className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;