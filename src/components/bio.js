/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div className="bio">
            <div>
              <Image
                fixed={data.avatar.childImageSharp.fixed}
                alt={author}
                style={{
                  marginBottom: 0,
                  minWidth: "150px",
                  minHeight: "150px",
                  borderRadius: `100%`,
                  margin: "10px",
                  maxHeight: "300px",
                  maxWidth: "300px"
                }}
                imgStyle={{
                  borderRadius: `50%`
                }}
              />
              <h2 style={{ textAlign: "center" }}>{author}</h2>
              <h3>
                <i className="fa fa-map-marker"></i>&nbsp;&nbsp;Southampton{" "}
              </h3>
            </div>
          </div>
        );
      }}
    />
  );
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;

export default Bio;
