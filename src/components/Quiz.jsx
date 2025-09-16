import React, { useState, useEffect } from 'react';
import Question from './Question';
import Timer from './Timer';
import ProgressBar from './ProgressBar';

const Quiz = ({ questions, category, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(new Array(questions.length).fill(null));
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  useEffect(() => {
    if (timeUp) {
      handleNextQuestion();
    }
  }, [timeUp]);

  const handleAnswerSelect = (answerIndex) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answerIndex);

      const newAnswers = [...userAnswers];
      newAnswers[currentQuestionIndex] = answerIndex;
      setUserAnswers(newAnswers);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Calculate results
      const correctAnswers = userAnswers.reduce((count, answer, index) => {
        if (answer !== null && answer === questions[index].correctAnswer) {
          return count + 1;
        }
        return count;
      }, 0);

      const unansweredQuestions = userAnswers.filter(answer => answer === null).length;

      const result = {
        totalQuestions: questions.length,
        correctAnswers,
        unansweredQuestions,
        category,
      };

      onQuizComplete(result);
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setTimeUp(false);
    }
  };

  const handleSkipQuestion = () => {
    handleNextQuestion();
  };

  const handleTimeUp = () => {
    setTimeUp(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        <div className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-gray-600">
               {currentQuestionIndex + 1} / {questions.length}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Timer
                  duration={10}
                  onTimeUp={handleTimeUp}
                  isActive={true}
                  key={currentQuestionIndex}
                />
              </div>
            </div>
          </div>
          <ProgressBar current={currentQuestionIndex + 1} total={questions.length} />
        </div>

        {/* Question */}
        <div className=" p-8">
          <Question
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
          />

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">


            <div className="flex space-x-3">
              <button
                onClick={handleNextQuestion}
                className="px-6 py-3 bg-dark-pink text-white rounded-xl font-medium hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Next
              </button>
              <button
                onClick={handleSkipQuestion}
                className="px-6 py-3 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                Skip
              </button>

            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;