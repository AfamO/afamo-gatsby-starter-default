import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';

const Task2InstructionPage = () => {
  return (
    <Layout pageTitle="Shape Counting Game">
      <h3>Shape Counting Game</h3>
      
      <p>Now you will <em><strong>play a Shape Counting</strong></em> game <br/>
      but try to remember them in your head.<br/></p>

      <p>You will see a series of shapes(squares, triangles, and circles) one at a time.<br/></p>
      <p>Your job is to keep a MENTAL count for each type of shape.<br/></p>
      <p>You can keep count out loud  or in your head, but please <em>DO NOT</em> use your fingers or a pencil/pen and paper to count<br/></p>
      <p>After you see each shape series, you will be asked how many of each type of shape you saw.<br/></p>
      <p>Click <Link to='/start_task2'>Next</Link> to continue to task 2 page.<br/><br/>
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