import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';

const Task2InstructionPage = () => {
  return (
    <Layout pageTitle="Shape Counting Game Instruction Page">
      <h3>Welcome to Shape Counting Game</h3><br/>
      
      <p>Now you will <em><strong>play a Shape Counting</strong></em> game <br/>
      <br/><br/></p>

      <p>You will see a series of shapes(squares, triangles, and circles) one at a time.<br/></p>
      <p>Your job is to keep a MENTAL count for each type of shape.<br/></p>
      <p>You can keep count out loud  or in your head, but please <em>DO NOT</em> use your fingers or a pencil/pen and paper to count<br/></p>
      <p>After you see each shape series, you will be asked how many of each type of shape you saw.<br/></p>
      <p>Click <Link to='/task2_example'>Continue</Link> to see an example.<br/><br/>
      </p>
      
      </Layout>
  );
}

export const Head = () => {
  return (
    <>
    <title>Home Page</title>
    <meta name="description" content="This is the home page" />
    </>
  )
}


export default Task2InstructionPage;