import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';

const NextInstructionPage = () => {
  return (
    <Layout pageTitle="Next Instruction Page">
      <h2>Welcome to My Cognitive Measure Experiment</h2>
      <h3>Digit Span Task</h3>
      
      <p>Please <em><strong>DO NOT</strong></em> read the numbers out loud during the task <br/>
      but try to remember them in your head.<br/></p>

      <p>For this task, it is more important to be accurate than fast.<br/></p>
      <p>You will start with a list of three digits and every second trial,<br/></p>
      <p>the list to be remembered will become a bit longer<br/></p>

      <p>Click <Link to='/start_task1'>Next to kick-start task1</Link> to continue.<br/>.<br/>
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


export default NextInstructionPage;