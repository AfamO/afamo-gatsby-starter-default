import * as React from "react"

import Layout from "../components/layout.js"
import { Link } from "gatsby"
import DigitSpan from "../components/DigitSpan.js"

const StartTask1Page = () => {
    return (
        <Layout pageTitle="DigitSpan Page">
        <DigitSpan />
        </Layout> )
}
        

export const Head = () => {
    return (
        <>
        <title>DigitSpan Page</title>
        <meta name="description" content="This is the digit span page" />
        </>
    )
}

export default StartTask1Page;