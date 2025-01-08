import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const AboutPage = () => {
    return (
        <Layout p>
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
}

export const Head = () => {
    return (
        <>
        <title>About Page</title>
        <meta name="description" content="This is the about page" />
        </>
    )
}
export default AboutPage;