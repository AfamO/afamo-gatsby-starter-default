import * as React from "react";
import Layout from "../components/layout.js";
import ShapeCountingGame from "../components/ShapeCounting.js";

const StartTask2Page = () => {
  return (
    <Layout pageTitle="Shape Counting Game">
      <ShapeCountingGame />
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