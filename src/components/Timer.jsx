import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeUp, isActive }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, onTimeUp]);

    const minutes = Math.floor(timeLeft / 60);
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const getProgressColor = () => {
    if (timeLeft > 6) return 'text-green-600';
    if (timeLeft > 3) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="flex items-center space-x-3">
      
      <span className={`text-sm font-medium ${getProgressColor()} bg-gray-100 px-2 py-1 rounded-lg`}>
        {timeLeft > 0 ? `${minutes}:${seconds}` : 'Time up!'}
      </span>
    </div>
  );
};

export default Timer;