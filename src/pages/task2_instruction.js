import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';

const Task2InstructionPage = () => {
  return (
    <Layout pageTitle="Shape Counting Game">
      <h3>Shape Counting Game</h3>
      
      <p>Please <em><strong>DO NOT</strong></em> read the numbers out loud during the task <br/>
      but try to remember them in your head.<br/></p>

      <p>For this task, you will be given shape to count.<br/></p>
      <p>The shapes will appear one after the other,<br/></p>
      <p>the list to be remembered will become a bit longer<br/></p>

      <p>Click <Link to='/start_task2'>Next to kick-start task2</Link> to continue.<br/>.<br/>
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