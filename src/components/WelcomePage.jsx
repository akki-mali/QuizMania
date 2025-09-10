import React, { useState } from 'react';
import RulesModal from '../components/RulesModal'

const topics = [
  { id: 'javascript', label: 'Javascript Basic' },
  { id: 'angular', label: 'Angular Basic' },
  { id: 'react', label: 'React.js Advance' },
  { id: 'flutter', label: 'Flutter' },
];

const WelcomePage = ({ onStartQuiz }) => {
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleStartQuiz = () => {
    if (fullName.trim() && selectedTopic) {
      onStartQuiz(fullName.trim(), selectedTopic);
    }
  };

  const isFormValid = fullName.trim() && selectedTopic;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="w-full max-w-2xl">
          {/* Welcome Title */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl text-gray-800 mb-4">
              Welcome to{' '}
              <span className="text-dark-pink font-normal">QUIZ</span>
              <span className="text-dark-pink font-bold">Mania</span>
            </h1>
            <div className='bg-gray-100 p-3 rounded-lg text-start mx-auto w-full  md:w-3/4'>
              <p className="text-gray-600 text-lg mb-2 ">
                Please read all the rules about this quiz before you start.
              </p>
              <button className="text-dark-pink font-medium" onClick={()=> setIsRulesOpen(true)}>Quiz rules</button>
            </div>
          </div>
          <RulesModal  isOpen={isRulesOpen} onClose={()=>setIsRulesOpen(false)}/>

          {/* Form */}
          <div className="space-y-8 w-full md:w-3/4 mx-auto">
            {/* Full Name Input */}
            <div>
              <label className="block text-gray-700 font-medium mb-3">
                Full name
              </label>
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Topic Selection */}
            <div>
              <label className="block text-gray-700 font-medium mb-4">
                Please select topic to continue
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {topics.map((topic) => (
                  <label
                    key={topic.id}
                    className="flex items-center p-4 bg-white border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="radio"
                      name="topic"
                      value={topic.id}
                      checked={selectedTopic === topic.id}
                      onChange={(e) => setSelectedTopic(e.target.value)}
                      className="w-5 h-5 text-pink-600 border-gray-300 focus:ring-pink-500"
                    />
                    <span className="ml-3 text-gray-700 font-medium">
                      {topic.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Start Quiz Button */}
            <div className="pt-4">
              <button
                onClick={handleStartQuiz}
                disabled={!isFormValid}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${isFormValid
                    ? 'bg-dark-pink hover:bg-pink-600 text-white shadow-lg hover:shadow-xl '
                    : 'bg-dark-pink text-white cursor-not-allowed opacity-50 hover:shadow-none'
                  }`}
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;