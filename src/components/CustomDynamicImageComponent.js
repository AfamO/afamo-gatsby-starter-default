import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { 
    cartoonImage
  } from './layout.module.css';

const CustomDynamicImageComponent = ({ imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 300)
          }
        }
      }
    }
  `)

  // Find the image by its relative path
  const image = data.allFile.nodes.find(
    (node) => node.relativePath === imageName
  )

  if (!image) {
    return <div>Image not found</div>
  }

  return (
    <div>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt="Dynamic Image"
        className={cartoonImage}
      />
    </div>
  )
}

export default CustomDynamicImageComponent;