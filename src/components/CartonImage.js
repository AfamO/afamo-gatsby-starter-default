import React from "react";
import { StaticImage } from "gatsby-plugin-image";
//import { motion } from 'framer-motion';
import { 
    cartoonContainer,
    cartoonImage
} from './layout.module.css';

const CartonImage = () => {
  return (
    <div className={cartoonContainer}>
    <StaticImage
      alt="Cartoon Image"
      src="../images/jill.jpg"
      className={cartoonImage}
    />
    </div>
  );
}

export default CartonImage;