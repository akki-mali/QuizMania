import React from 'react';
import { Trophy } from 'lucide-react';

const Results = ({ result }) => {
  const percentage = Math.round((result.correctAnswers / result.totalQuestions) * 100);

  const getPerformanceFeedback = () => {
    if (percentage >= 80) {
      return {
        title: "🎉 Outstanding Performance!",
        message: "You've mastered this topic! Your knowledge is impressive.",
        color: "text-green-600",
        bgColor: "bg-green-100",
        borderColor: "border-green-200"
      };
    } else if (percentage >= 60) {
      return {
        title: "👏 Great Job!",
        message: "You have a solid understanding. Keep up the excellent work!",
        color: "text-blue-600",
        bgColor: "bg-blue-100",
        borderColor: "border-blue-200"
      };
    } else if (percentage >= 40) {
      return {
        title: "📚 Good Effort!",
        message: "You're on the right track. A bit more practice will help you improve!",
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
        borderColor: "border-yellow-200"
      };
    } else {
      return {
        title: "💪 Keep Learning!",
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
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Quiz Complete!
          </h1>
          <p className="text-gray-600 capitalize text-lg">
            {result.category.replace(/([A-Z])/g, ' $1')} Quiz Results
          </p>
        </div>

        {/* Score Display */}
        <div className=" p-8 mb-6">
          <div className="text-center mb-8">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              {percentage}%
            </div>
            <p className="text-gray-600 text-lg">Final Score</p>
          </div>

          {/* Stats */}
          <div className='border-1 p-6 rounded-xl w-[500px] mx-auto'>
            <p className='text-center mb-2'>Out of 10 Question</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">
                  {result.correctAnswers}
                  <span className="text-sm"> Correct</span>
                </div>

              </div>

              <div className="text-center">

                <div className="text-2xl font-bold text-red-600 mb-1">
                  {result.totalQuestions - result.correctAnswers - result.unansweredQuestions}
                  <span className=" text-sm"> Incorrect</span>
                </div>

              </div>

              <div className="text-center">

                <div className="text-2xl font-bold text-gray-600 mb-1">
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

        {/* Achievement Badge */}
        {percentage >= 80 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full font-medium shadow-lg">
              <Trophy className="w-5 h-5 mr-2" />
              Quiz Master Achievement Unlocked!
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Results;