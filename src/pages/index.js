import React from "react";
import { Link, graphql } from "gatsby";
import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Personal from "../components/Personal";
import CodeImages from "../components/CodeImages";

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMarkdownRemark.edges;

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
            `nodejs`,
            `angularjs`,
            `material`,
            `web development`,
            `full stack`,
            `mongodb`,
            `github`
          ]}
        />
        <div className="bio-container">
          <Bio />
          <CodeImages />
          <Personal />
        </div>

        <div className="home-post-container">
          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug;
            return (
              <Link
                style={{ boxShadow: `none` }}
                to={node.fields.slug}
                key={node.fields.slug}
              >
                <div className="home-blog-post">
                  <h3>{title}</h3>
                  <small>{node.frontmatter.date}</small>
                  <p
                    className="text-content"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt
                    }}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "D, MMMM YYYY")
            title
            description
            category
          }
        }
      }
    }
  }
`;
