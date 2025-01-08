import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';

const InstructionPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <h2>Welcome to My Cognitive Measure Experiment</h2>
      <h3>In this project, three cognitive tasks will be administered.</h3>
      <p>The first task will involve <em><strong>digit span task</strong></em> <br/>
      Here you will be presented with a series of digits and you will be required to recall and type them in the same order they were presented.<br/> </p>  
      That means if you are presented with '34' you will be required to type '34' in the same order they were presented.<br/>
      if you make a mistake, you can use the backspace key chance to correct it.<br/><br/><br/>

      Press the space key to continue with the instruction.<br/>

      
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


export default InstructionPage;