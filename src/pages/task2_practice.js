import * as React from "react";
import Layout from "../components/layout.js";
import { Link } from "gatsby";
import ShapeCountingPractice from "../components/ShapeCountingPractice.js";

const StartTask2Page = () => {
  return (
    <Layout pageTitle="Shape Counting Game Practice">
      <ShapeCountingPractice />
      
    </Layout>
  );
};

export const Head = () => {
  return (
    <>
      <title>Shape Counting Game</title>
      <meta name="description" content="This is the shape counting game page" />
    </>
  );
};

export default StartTask2Page;