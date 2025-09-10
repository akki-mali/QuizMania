import React, { useState } from "react"
import { QuizData } from "../data/quizData.js"
import Quiz from "../components/Quiz"
import Results from "../components/Results"
import Header from "../components/Header"
import WelcomePage from "../components/WelcomePage";

const App = () => {
  const [currentState, setCurrentState] = useState('welcome');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [userName, setUserName] = useState('');
  const [quizResult, setQuizResult] = useState(null);

   const handleStartQuiz = (name, category) => {
    setUserName(name);
    setSelectedCategory(category);
    setCurrentState('quiz');
  };

  const handleQuizComplete = (result) => {
    setQuizResult(result);
    setCurrentState('results');
  };

  const handleRestart = () => {
    setCurrentState('welcome');
    setSelectedCategory('');
    setUserName('');
    setQuizResult(null);
  };

  const renderCurrentState = () => {
    switch (currentState) {
      case 'welcome':
        return <WelcomePage onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        const quizData = QuizData[selectedCategory];
        return (
          <Quiz
            questions={quizData.questions}
            category={selectedCategory}
            userName={userName}
            onQuizComplete={handleQuizComplete}
          />
        );
      case 'results':
        return quizResult ? (
          <Results result={quizResult} onRestart={handleRestart} />
        ) : null;
      default:
        return <WelcomePage onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <>
      <Header />
        {renderCurrentState()}
    </>

  )
}
export default App