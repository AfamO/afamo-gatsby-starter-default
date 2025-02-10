import { label } from 'framer-motion/client';
import React from 'react';

const OrangeSpots = () => {
  const spots = [
    { top: '10%', left: '50%', label: '2' },
    { top: '30%', left: '20%', label: '1' },
    { top: '30%', left: '80%', label: '3' },
    { top: '70%', left: '20%',  label: '6' },
    { top: '70%', left: '80%', label: '4' },
    { top: '90%', left: '50%', label: '5' },
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '20vw',
        height: '40vh',
        backgroundColor: '#fff',
        margin: '0 auto',
      }}
    >
      {spots.map((spot, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: spot.top,
            left: spot.left,
            transform: 'translate(-50%, -50%)',
            width: '2rem',
            height: '2rem',
            backgroundColor: '#FFA500', // Orange color
            borderRadius: '50%',
          }}
        >{spot.label}</div>
      ))}
    </div>
  );
};

export default OrangeSpots;
