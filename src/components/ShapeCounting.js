import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import  Button  from "@mui/material/button";

const ShapeCountingGame = () => {
  const [shapes, setShapes] = useState([]); // Stores the currently displayed shapes
  const [userInput, setUserInput] = useState({ circle: 0, square: 0, triangle: 0 }); // User's input for each shape type
  const [gameState, setGameState] = useState("not_started"); // "not_started", "displaying", "finished"
  const [shapeCounts, setShapeCounts] = useState({ circle: 0, square: 0, triangle: 0 }); // Tracks the count of each shape displayed
  const [round, setRound] = useState(1); // Tracks the current round
  const [score, setScore] = useState(0); // Tracks the user's score
  const [timer, setTimer] = useState(null); // Timer for shape display

  const shapeTypes = ["circle", "square", "triangle"];

  const startGame = () => {
    setGameState("displaying");
    setShapes([]);
    setShapeCounts({ circle: 0, square: 0, triangle: 0 });
    setUserInput({ circle: 0, square: 0, triangle: 0 });
    setRound(1);
    setScore(0);
    displayShapesSequentially();
  };

  const displayShapesSequentially = () => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < 4) { // Display 5 shapes sequentially
        const randomShape = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
        const newShape = {
          type: randomShape,
          color: `hsl(${Math.random() * 360}, 70%, 80%)`,
        };
        setShapes([newShape]);
        setShapeCounts((prev) => ({
          ...prev,
          [randomShape]: prev[randomShape] + 1,
        }));
        count++;
      } else {
        clearInterval(interval);
        setShapes([]);
        setGameState("finished");
      }
    }, 1000); // Change shape every second
    setTimer(interval);
  };

  const resetGame = () => {
    setGameState("not_started");
    setShapes([]);
    setShapeCounts({ circle: 0, square: 0, triangle: 0 });
    setUserInput({ circle: 0, square: 0, triangle: 0 });
    setRound(1);
    setScore(0);
    if (timer) clearInterval(timer);
  };

  const handleInputChange = (shapeType, value) => {
    setUserInput((prev) => ({
      ...prev,
      [shapeType]: parseInt(value) || 0,
    }));
  };

  const verifyCounts = () => {
    const isCorrect = shapeTypes.every(
      (shape) => userInput[shape] === shapeCounts[shape]
    );

    if (isCorrect) {
      setScore((prevScore) => prevScore + 10);
      alert("Correct! You counted accurately.");
    } else {
      alert(
        `Incorrect! The correct counts were: \nCircle: ${shapeCounts.circle}, Square: ${shapeCounts.square}, Triangle: ${shapeCounts.triangle}.`
      );
    }

    if (round < 5) {
      setRound((prevRound) => prevRound + 1);
      setShapeCounts({ circle: 0, square: 0, triangle: 0 });
      setUserInput({ circle: 0, square: 0, triangle: 0 });
      setGameState("displaying");
      displayShapesSequentially();
    } else {
      alert(`Game Over! Your final score is ${score}. Thanks for playing.`);
      resetGame();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      {gameState === "not_started" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Shape Counting Game</h1>
          <Button onClick={startGame}>Start Game</Button>
        </div>
      )}

      {gameState === "displaying" && (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-center my-4">Round {round}: Observe the shapes!</h2>
          {shapes.map((shape, index) => (
            <motion.div
              key={index}
              className={shape.type}
              style={{
                backgroundColor: shape.color,
              }}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1.5 }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </div>
      )}

      {gameState === "finished" && (
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Round {round} Complete!</h1>
          <p className="text-lg mb-4">Enter the count for each shape:</p>
          <div className="mb-4">
            {shapeTypes.map((shape) => (
              <div key={shape} className="mb-2">
                <label className="mr-2 capitalize">{shape}:</label>
                <input
                  type="number"
                  value={userInput[shape] || ""}
                  onChange={(e) => handleInputChange(shape, e.target.value)}
                  className="border border-gray-300 rounded p-2"
                />
              </div>
            ))}
          </div>
          <div>
            <Button onClick={verifyCounts} className="mr-2">Submit</Button>
            <Button onClick={resetGame}>Restart</Button>
          </div>
          <h2 className="text-lg font-semibold mt-4">Current Score: {score}</h2>
        </div>
      )}

      <style jsx>{`
        .circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }
        .square {
          width: 100px;
          height: 100px;
        }
        .triangle {
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          border-bottom: 100px solid;
        }
      `}</style>
    </div>
  );
};

export default ShapeCountingGame;
