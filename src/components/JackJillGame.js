import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {StaticImage } from 'gatsby-plugin-image';
import { 
  cartoonImage
} from './layout.module.css';
import CustomDynamicImageComponent from "../components/CustomDynamicImageComponent.js";
import { s } from 'framer-motion/client';


const JackJillMemoryTestGame = () => {
  const [currentRound, setCurrentRound] = useState(1);
  const [jackHand, setJackHand] = useState("left"); // Jack's current hand holding the ball
  const [coveredSpot, setCoveredSpot] = useState(3); // Spot Jack's ball covers
  const [playerAnswer1, setPlayerAnswer1] = useState(null); // Player's answer to Question 1
  const [playerAnswer2, setPlayerAnswer2] = useState(null); // Player's answer to Question 2
  const [score, setScore] = useState(0);
  const[isJackVisible, setIsJackVisible] = useState(true); // manages Jack's visibility
  const [currJackImage, setCurrentJackImage] = useState("jack_left_3.jpg"); // Jack's current hand holding the ball

  // Reset and initialize a new round
  const startNewRound = () => {
    alert("Starting New Round!");
    const randomHand = Math.random() < 0.5 ? "left" : "right";
    const randomSpot = Math.floor(Math.random() * 6) + 1; // Random spot from 1 to 6
    setJackHand(randomHand);
    setCoveredSpot(randomSpot);
    setPlayerAnswer1(null);
    setPlayerAnswer2(null);
    setCurrentRound(currentRound + 1);
    setCurrentJackImage("jack_"+randomHand+"_"+randomSpot+".jpg");
    //"../images/jack_left_1.jpg"
  };

  // Handle player's answers
  const submitAnswers = () => {
    let roundScore = 0;

    // Question 1: Is Jack holding the ball in the same hand as Jill?
    if (playerAnswer1 === (jackHand === "left" ? "Same" : "Different")) {
      roundScore += 10;
    }

    // Question 2: Which spot is covered?
    if (parseInt(playerAnswer2) === coveredSpot) {
      roundScore += 20;
    }

    setScore(score + roundScore);
    startNewRound();
    setIsJackVisible(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#f3f3f3' }}>
      
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Round: {currentRound}</p>
      <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Score: {score}</p>
      <p style={{ fontSize: '1.2rem' }}>Is Jack holding the ball in the same hand as Jill?</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginTop: '-5rem' }}>
        {/* Jill */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
        >
          <div
            style={{ backgroundColor: '#ffcc66', padding: '1rem', borderRadius: '10%' }}
          >
            Jill<br/>
            <StaticImage
            alt="Jill"
            src="../images/jill.jpg"
            className={cartoonImage}
            />

          </div>
        </motion.div>

        {/* Jack */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.5 }}
        >
          {isJackVisible && (
          <div
            style={{ backgroundColor: '#99cc66', padding: '0.2rem', borderRadius: '10%' }}
          >
            Jack<br/>
            <CustomDynamicImageComponent imageName={currJackImage}  />
          </div> )}
        </motion.div>
      </div>

      {/* Question 1 */}
      <div style={{ marginBottom: '1rem'}}>
        
        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
          <button
            style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', border: 'none' }}
            className={playerAnswer1 === "Same" ? "selected" : ""}
            onClick={() => {
              setPlayerAnswer1("Same");
              setIsJackVisible(!isJackVisible);
            }}
          >
            Same
          </button>
          <button
            style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', backgroundColor: '#dc3545', color: 'white', cursor: 'pointer', border: 'none' }}
            className={playerAnswer1 === "Different" ? "selected" : ""}
            onClick={() => {
              setPlayerAnswer1("Different");
              setIsJackVisible(!isJackVisible);
            }}
          >
            Different
          </button>
        </div>
      </div>

      {/* Question 2 */}
      <div style={{ marginBottom: '0rem' }}>
        <p style={{ fontSize: '1.2rem', marginTop: '-3.5rem' }}>Which orange's spot number did Jack's ball cover?</p>
        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
          {Array.from({ length: 6 }, (_, i) => (
            <button
              key={i + 1}
              style={{ padding: '0.5rem 1rem', borderRadius: '0.25rem', backgroundColor: '#6c757d', color: 'white', cursor: 'pointer', border: 'none' }}
              className={playerAnswer2 === (i + 1).toString() ? "selected" : ""}
              onClick={() => setPlayerAnswer2((i + 1).toString())}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        style={{ marginTop: '1.5rem', padding: '0.75rem 1.5rem', backgroundColor: '#28a745', color: 'white', borderRadius: '0.25rem', cursor: 'pointer', border: 'none' }}
        disabled={!playerAnswer1 || !playerAnswer2}
        onClick={submitAnswers}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Submit Answers
      </motion.button>
    </div>
  );
};

export default JackJillMemoryTestGame;
