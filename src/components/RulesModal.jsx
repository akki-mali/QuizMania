import { useEffect } from "react";

const RulesModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
    >

      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      ></div>


      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-2xl p-6 animate-fadeIn test-start">
        <h2 className="text-2xl font-bold mb-4">Quiz Rules</h2>
        <div className="mb-4">
          <p className="font-bold bg-gray-100 p-2">10-Second Timer</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Each question comes with a 10-second timer.</li>
            <li>If you don’t answer within the time limit, the app will automatically move to the next question.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-bold bg-gray-100 p-2">Manual Navigation</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You can navigate to the next question manually before the timer expires.</li>
            <li>Use the "Next" button to move ahead if you’re ready before the timer runs out.</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-bold bg-gray-100 p-2">Final Score and Performance Message</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>After all questions are answered, your final score will be displayed.</li>
              <li>Based on your performance, you will receive a personalized message:
                <ul className="list-disc pl-5 space-y-2">
                  <li>Great job!: If you score <strong>above 80%</strong>.</li>
                  <li>Well done!: If you score <strong>between 60% and 80%.</strong></li>
                  <li>Keep practicing!: If you score <strong>below 60%</strong>.</li>
                </ul>
                </li>
          </ul>
        </div>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          aria-label="Close modal"
        >
          ✕
        </button>
      </div>
    </div>

  )
}

export default RulesModal