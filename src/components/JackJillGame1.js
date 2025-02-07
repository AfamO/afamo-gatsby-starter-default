import React, { useState, useEffect } from 'react';


// Base character images (without balls)
const JILL_IMAGE = 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=300&q=80';
const JACK_IMAGE = 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=300&q=80';

// Ball positions around Jack (6 positions)
const ballPositions = [
  { x: 30, y: 0 },     // Right (same as Jill's position)
  { x: -30, y: 0 },    // Left
  { x: 0, y: -30 },    // Top
  { x: 0, y: 30 },     // Bottom
  { x: -20, y: -20 },  // Top-left
  { x: 20, y: -20 },   // Top-right
];

const JackJillGame= () => {
  const [score, setScore] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [jackBallPosition, setJackBallPosition] = useState(0);
  const [isCorrect, setIsCorrect] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    if (gameStarted) {
      const interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [gameStarted]);

  const generateNewRound = () => {
    if (!gameStarted) setGameStarted(true);
    setJackBallPosition(Math.floor(Math.random() * 6));
    setIsCorrect(null);
  };

  useEffect(() => {
    generateNewRound();
  }, []);

  const handleAnswer = (answer) => {
    const isSamePosition = jackBallPosition === 0; // Position 0 is right side (same as Jill)
    const correct = (answer === 'same' && isSamePosition) || 
                   (answer === 'different' && !isSamePosition);
    
    setIsCorrect(correct);
    setTotalAttempts(prev => prev + 1);
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setTimeout(generateNewRound, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Jack and Jill Ball Position Game
          </h1>
          <div className="flex justify-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              
              <span className="text-xl font-semibold">
                {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold">
                Score: {score}/{totalAttempts}
              </span>
            </div>
            <button
              onClick={() => {
                setScore(0);
                setTotalAttempts(0);
                setTimer(0);
                setGameStarted(false);
                generateNewRound();
              }}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Restart
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-20 mb-12">
          {/* Jill's side */}
          <div className="relative">
            <img
              src={JILL_IMAGE}
              alt="Jill"
              className="w-48 h-64 object-cover rounded-lg"
            />
            {/* Jill's ball - always on the right */}
            <div className="absolute right-[-20px] top-[50%] transform -translate-y-1/2">
              <div className="w-8 h-8 bg-blue-500 rounded-full shadow-lg" />
            </div>
            <p className="text-center mt-2 text-xl font-semibold">Jill</p>
          </div>

          {/* Jack's side */}
          <div className="relative">
            <img
              src={JACK_IMAGE}
              alt="Jack"
              className="w-48 h-64 object-cover rounded-lg"
            />
            {/* Jack's ball - position varies */}
            <div 
              className="absolute transition-all duration-300"
              style={{
                left: `${ballPositions[jackBallPosition].x}px`,
                top: `${50 + ballPositions[jackBallPosition].y}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="w-8 h-8 bg-orange-500 rounded-full shadow-lg" />
            </div>
            <p className="text-center mt-2 text-xl font-semibold">Jack</p>
          </div>
        </div>

        {isCorrect !== null && (
          <div className={`text-center mb-6 p-3 rounded-lg ${
            isCorrect ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {isCorrect ? 'Correct!' : 'Wrong!'}
          </div>
        )}

        <div className="flex justify-center gap-4">
          <button
            onClick={() => handleAnswer('same')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
          >
            Same
          </button>
          <button
            onClick={() => handleAnswer('different')}
            className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg font-semibold"
          >
            Different
          </button>
        </div>

        <div className="mt-8 text-center text-gray-700">
          <p className="text-lg">
            Compare Jack and Jill's ball positions. Click "Same" if Jack's ball is in the same position as Jill's (right side),
            or "Different" if it's in any other position.
          </p>
        </div>
      </div>
    </div>
  );
}

export default JackJillGame;

export const Head = () => <title>Jack and Jill Ball Position Game</title>