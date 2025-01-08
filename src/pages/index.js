import * as React from 'react';

import { Link } from 'gatsby';
import Layout from  '../components/layout';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I am making this by following Gatsby tutorial.</p>
      </Layout>
  );
}

export const Head = () => <title>Home Page</title>


export default IndexPage;