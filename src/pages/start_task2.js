import * as React from "react";
import Layout from "../components/layout.js";
import ShapeCountingGame from "../components/ShapeCounting.js";
import { Link } from "gatsby";

const StartTask2Page = () => {
  return (
    <Layout pageTitle="Shape Counting Game">
      <ShapeCountingGame />
      <br/><br/><br/>
      Click <Link to='/task3_instruction'>Next</Link> to continue  with the instruction for task 3.<br/>
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