import * as React from "react";
import { useState, useEffect } from "react";

const DigitSpan = () => {
  const [sequence, setSequence] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [mode, setMode] = useState("forward");

  // Function to generate a random sequence
  const generateSequence = (length) => {
    return Array.from({ length }, () => Math.floor(Math.random() * 10));
  };

  // Start the task
  const startTask = () => {
    const initialSequence = generateSequence(3); // Start with 3 digits
    setSequence(initialSequence);
    setUserInput("");
    setCurrentIndex(0);
    setScore(0);
    setMessage("");
    setStatus("");
    setIsPlaying(true);
    
  };

  // Get user input
  const handleInputChange = (e) => {
    const correctSequence = mode === "forward" ? sequence.join("") : sequence.slice().reverse().join("");
    const value = e.target.value;
    setUserInput(value);

    // Check if user input matches the sequence
    if (value === correctSequence) {
      setStatus("Correct!");
      setScore((prev) => prev + 1);
      const newSequence = generateSequence(sequence.length + 1);
      setSequence(newSequence);
      setUserInput("");
      setStatus("");
    } else if (value.length === sequence.length) {
      setStatus("Incorrect! Task over.");
      setIsPlaying(false);
    } else {
      //setStatus("Incorrect so far...");
    }
  };

  // Display the sequence temporarily
  useEffect(() => {
    if (isPlaying && sequence.length > 0) {
      setMessage("Memorize this sequence:");
      setUserInput("");
      //setStatus("");
      setTimeout(() => {
        setMessage("Enter the sequence:");
      }, sequence.length * 1000); // Show digits at 1 second per digit
    }
  }, [sequence, isPlaying]);

  return (
    <div>
      <h1>Digit Span Task</h1>
      {!isPlaying && (
        <div>
        <div>
        <label >
          Select Mode:
        </label>
        <select
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        
        >
          <option value="forward">Forward</option>
          <option value="backward">Backward</option>
        </select>
          </div> <br/><br/>
      
        <button onClick={startTask} >
          Start Task
        </button> </div>
      )}

      {isPlaying && (
        <>
          <p>{message}</p>
          {message === "Memorize this sequence:" && <h2>{sequence.join(" ")}</h2>}
          {message === "Enter the sequence:" && (
            <input
              type="text"
              value={userInput}
              onChange={handleInputChange}
            />
          )}
          <p>{status}</p>
          <div>Score: {score}</div>
        </>
      )}
    </div>
  );
};

export default DigitSpan;
