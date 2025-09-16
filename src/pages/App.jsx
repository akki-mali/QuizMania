import React, { useState, Suspense, lazy } from "react"
import Header from "../components/Header"
import WelcomePage from "../components/WelcomePage";

const Quiz = lazy(() => import("../components/Quiz"))
const Results = lazy(() => import("../components/Results"))

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
        return (
          <Suspense fallback={null}>
            <AsyncQuiz
              selectedCategory={selectedCategory}
              onQuizComplete={handleQuizComplete}
            />
          </Suspense>
        );
      case 'results':
        return (
          <Suspense fallback={null}>
            {quizResult ? (
              <Results result={quizResult} onRestart={handleRestart} />
            ) : null}
          </Suspense>
        );
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

function AsyncQuiz({ selectedCategory, onQuizComplete }) {
  const [questions, setQuestions] = React.useState(null)

  React.useEffect(() => {
    let cancelled = false
    import("../data/quizData.js").then(module => {
      if (cancelled) return
      const quizData = module.QuizData[selectedCategory]
      setQuestions(quizData?.questions ?? [])
    })
    return () => { cancelled = true }
  }, [selectedCategory])

  if (!questions) return null

  return (
    <Quiz
      questions={questions}
      category={selectedCategory}
      onQuizComplete={onQuizComplete}
    />
  )
}