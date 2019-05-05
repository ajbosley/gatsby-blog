import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Resume extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = data.site.siteMetadata.title

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="404: Not Found" />
                <div style={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "10px" }}>
                    <p>Good things come to those who wait.</p>
                </div>
            </Layout>
        )
    }
}

export default Resume

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
