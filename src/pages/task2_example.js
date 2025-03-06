import * as React from "react";
import Layout from "../components/layout.js";
import { Link } from "gatsby";
import ShapeCountingGameExample from "../components/ShapeCountingExample.js";

const StartTask2Page = () => {
  return (
    <Layout pageTitle="Shape Counting Game Example">
      <ShapeCountingGameExample />
      <br/><br/><br/>
      Click <Link to='/task2_practice'>Continue</Link> to practice the <strong>Shape Counting</strong> game.<br/>
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