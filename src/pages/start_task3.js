import * as React from "react";
import Layout from "../components/layout.js";
import JackJillMemoryTestGame from "../components/JackJillGame.js";
//import CartonImage from   "../components/CartonImage.js" <CartonImage />


const StartTask3Page = () => {
  return (
    <Layout pageTitle="Jack and Jill Memory Test">
      
      <JackJillMemoryTestGame />
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Jack and Jill Memory Test Game</title>
      <meta name="description" content="This is the Jack and Jill Memory Test game page" />
    </>
  );
};

export default StartTask3Page;