import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "gatsby";
//import  Button  from "@material-ui/core/Button";

const ShapeCountingPractice = () => {
  const [shapes, setShapes] = useState([]); // Stores the currently displayed shapes
  const [userInput, setUserInput] = useState({ circle: 0, square: 0, triangle: 0 }); // User's input for each shape type
  const [gameState, setGameState] = useState("not_started"); // "not_started", "displaying", "finished","user_input_entered"
  const [shapeCounts, setShapeCounts] = useState({ circle: 0, square: 0, triangle: 0 }); // Tracks the count of each shape displayed
  const [round, setRound] = useState(1); // Tracks the current round
  const [score, setScore] = useState(0); // Tracks the user's score
  const [timer, setTimer] = useState(null); // Timer for shape display
 

  const shapeTypes = ["circle", "square", "triangle"];

  useEffect(() =>{
    startGame();
  },[]);

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
   startGame();
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
    setGameState("user_input_entered");

    if (isCorrect) {
      setScore((prevScore) => prevScore + 10);
      alert("Correct! You counted accurately.");
    } else {
      alert(
        `Incorrect! The correct counts were: \nCircle: ${shapeCounts.circle}, Square: ${shapeCounts.square}, Triangle: ${shapeCounts.triangle}.`
      );
      
    }

    /**
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
     */
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center relative">
      {gameState === "user_input_entered" && (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">The the correct number of each shape was:</p>
          <div>
          {shapeTypes.map((shapeTypes, index) => (
            <p key={index}>
              <strong>{shapeTypes.charAt(0).toUpperCase() + shapeTypes.slice(1)}</strong>:{" "}
              {shapeCounts[shapeTypes]}
            </p>
          ))}
        </div><br/>

          <p className="text-2xl font-bold mb-4">Your answers:</p>

          <div>
          {shapeTypes.map((shapeTypes, index) => (
            <p key={index}>
              <strong>{shapeTypes.charAt(0).toUpperCase() + shapeTypes.slice(1)}</strong>:{" "}
              {userInput[shapeTypes]}
            </p>
          ))}
        </div>
        <div>
          <p>Would you like to practice the <b>Shape Counting</b> game again?</p>
            <button onClick={()=>setGameState('about_to_start')} className="mr-2">No, I am ready to continue</button>
            <button onClick={resetGame}>Yes, practice again</button>
          </div>
          
        </div>
        
      )}
      {gameState === "about_to_start" && (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4"> Great job!</p>
          <br/>
         

 <p>You are now finished practicing the Shape Counting game.</p>

<span>
Next, you will play the actual game.
The series will be longer in the real game than in the practice round.
Remember to keep a running count of each type of shape you see.

You will play 5 rounds of the game. From now on you will not receive feedback after each round.
Good luck!
</span>   
<p className="text-2xl font-bold mb-4">Click the link below to begin.</p><br/>

<Link to='/start_task2'>Start</Link> to practice the <strong>Shape Counting</strong> game.<br/>
        </div>
        
      )}

      {gameState === "displaying" && (
        <div className="w-full h-full flex flex-col items-center justify-center">
        <h2 className="text-lg font-semibold text-center my-4">Observe the shapes!</h2>
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
      )};
      

      {gameState === "finished" && (
        <div className="text-center">
         
          <p className="text-lg mb-4">Select the count for each shape:</p>
          <div className="mb-4">
            
        <p>How many <b>circles</b> did you count?</p>
      <div>
        {[...Array(8)].map((_, i) => (
          <label key={i} style={{ margin: "5px", display: "inline-block" }}>
          <input
            type="radio"
            name="circles"
            value={i}
           
            onChange={() => handleInputChange("circle", i)}
            style={{ marginRight: "5px" }}
          />
          {i}
        </label>
        ))}
      </div>

       <p>How many <b>squares</b> did you count?</p>
      <div>
        {[...Array(8)].map((_, i) => (
          <label key={i} style={{ margin: "5px", display: "inline-block" }}>
            <input
              type="radio"
              name="squares"
              value={i}
              
              onChange={() => handleInputChange("square", i)}
              style={{ marginRight: "5px" }}
            />
            {i}
          </label>
        ))}
      </div>

       <p>How many  <b>triangles</b> did you count?</p>
      <div>
        {[...Array(8)].map((_, i) => (
          <label key={i} style={{ margin: "5px", display: "inline-block" }}>
            <input
              type="radio"
              name="triangles"
              value={i}
              
              onChange={() => handleInputChange("triangle", i)}
              style={{ marginRight: "5px" }}
            />
            {i}
          </label>
        ))}
      </div>
      
          </div>
          <div>
            <button onClick={verifyCounts} className="mr-2">Submit</button>
          </div>
         
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

export default ShapeCountingPractice;
