import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />

        <h1 className="blog-title h1-title">{post.frontmatter.title}</h1>
        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
        <h3 style={{ textAlign: "center" }}>Category:&nbsp;&nbsp;<span style={{ fontWeight: "lighter" }}>{post.frontmatter.category}</span></h3>
        <p className="blog-post-content" style={{ textAlign: "center", fontSize: "10px !important", marginBottom: "50px !important" }}>
          <strong>Posted on -</strong> {post.frontmatter.date}
        </p>

      </Layout >
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
                category
        description
      }
    }
  }
`
