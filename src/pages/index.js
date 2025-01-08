import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Welcome Page">
      <h2>Welcome to My Cognitive Measure Experiment</h2>
    
      <form action="#">
      <label for="studentIdLabel">Enter the participant's student ID::</label><br/><br/><br/>
      <input type="text" id="studentIdLabel" name="studentId"/><br/><br/><br/>
      <button type="submit"><Link to='instruction'>Continue</Link></button>
      </form>

      
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


export default IndexPage;