import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class BlogCategories extends React.Component {
  constructor() {
    super()
    this.state = {
      dateFilter: true,
      dateRange: '',
      categoryFilter: { category: 'all' },
      categoryList: '',
      filteredPosts: [],
      posts: [],
      categories: [],
      openDropdown: false
    }
    this.changeCategory = this.changeCategory.bind(this);
    this.changeDate = this.changeDate.bind(this);

    this.filterPostsByCategory = this.filterPostsByCategory.bind(this);
    this.filterPostsByDate = this.filterPostsByDate.bind(this);

  }
  changeCategory(category) {
    this.setState({ categoryFilter: category });
    this.filterPostsByCategory(category);
  }
  changeDate(type) {
    if (this.state.dateFilter === type) {
      this.setState((prevState) => ({ dateFilter: !prevState.dateFilter }))
    } else {
      this.setState({ dateFilter: type })
    }
    this.filterPostsByDate(type);
  }
  filterPostsByDate(type) {
    if (type === false) {
      // descending
      this.state.filteredPosts.sort((a, b) => { return (new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)) });
    } else {
      // ascending
      this.state.filteredPosts.sort((a, b) => { return (new Date(a.node.frontmatter.date) - new Date(b.node.frontmatter.date)) });
    }
  }
  filterPostsByCategory(category) {
    if (category.category === 'all') {
      this.setState({ filteredPosts: this.state.posts }, () => { this.filterPostsByDate(this.state.dateFilter) });
    } else {
      let list = this.state.posts;
      let filteredList = list.filter((item) => {
        return (item.node.frontmatter.category === category.category)
      })
      this.setState({ filteredPosts: filteredList });
      this.filterPostsByDate(this.state.dateFilter);
    }
  }
  componentWillMount() {
    if (this.props && this.props.data.allMarkdownRemark && this.props.data.allMarkdownRemark.edges) {
      let cats = [];
      for (let post of this.props.data.allMarkdownRemark.edges) {
        if (post.node) {
          cats.push(post.node.frontmatter.category);
        }
      }
      let uniq = cats.filter((item, pos, ar) => ar.indexOf(item) === pos)

      this.setState({
        posts: this.props.data.allMarkdownRemark.edges,
        filteredPosts: this.props.data.allMarkdownRemark.edges,
        categories: uniq
      });
    }
  }
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog Categories" />
        <h1 className="ht-title" style={{ textAlign: "center", paddingTop: "20px" }}>Welcome to the blog!</h1>
        <div className="blog-list-container">
          <div className="blog-filters">
            <div className="date-filter dropdown">
              {
                this.state.dateFilter &&
                <div className="filter-title" onClick={() => { this.changeDate(false) }}>
                  <h3>Date</h3>
                  <div>
                    <span>ASC&nbsp;</span>
                    <i className="fa fa-chevron-down"></i>
                  </div>
                </div>
              }
              {
                !this.state.dateFilter &&
                <div className="filter-title" onClick={() => { this.changeDate(true) }}>
                  <h3>Date</h3>
                  <div>
                    <span>DESC&nbsp;</span>
                    <i className="fa fa-chevron-up"></i>
                  </div>
                </div>
              }
            </div>
            <div className="category-filter dropdown">

              {
                !this.state.openDropdown &&
                <div className="filter-title" onClick={() => this.setState({ openDropdown: true })}>
                  <h3>Categories</h3>
                  <i className="fa fa-plus"></i>
                </div>
              }
              {
                this.state.openDropdown &&
                <div className="filter-title" onClick={() => this.setState({ openDropdown: false })}>
                  <h3>Categories</h3>
                  <i className="fa fa-minus"></i>
                </div>
              }
              {
                this.state.openDropdown &&
                (<div className="category-filter-option">
                  <span>All</span>
                  {this.state.categoryFilter.category === 'all' && <i style={{ paddingLeft: "10px" }} className="fa fa-square"></i>}
                  {this.state.categoryFilter.category !== 'all' && <i style={{ paddingLeft: "10px" }} className="fa fa-square-o" onClick={() => { this.changeCategory({ category: 'all' }) }}></i>}
                </div>)
              }
              {this.state.openDropdown && this.state.categories.map((category, i) => {
                return (<div key={i} className="category-filter-option">
                  <span>{category}</span>
                  {this.state.categoryFilter.category === category && <i style={{ paddingLeft: "10px" }} className="fa fa-square"></i>}
                  {this.state.categoryFilter.category !== category && <i style={{ paddingLeft: "10px" }} className="fa fa-square-o" onClick={() => { this.changeCategory({ category }) }}></i>}
                </div>)
              })}
            </div>
          </div>

          {this.state.filteredPosts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <Link style={{ boxShadow: `none` }} to={node.fields.slug} key={node.fields.slug} >
                <div className="gridItem">
                  <div className="gridItemTitle">
                    <h3>{title}</h3>
                  </div>
                  <div className="gridItemContent">
                    <p className='text-content'
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt || "",
                      }}
                    />
                  </div>
                  <div className="gridItemFilters">
                    <p>{node.frontmatter.date || ""}</p>
                    {node.frontmatter.category && <p>{node.frontmatter.category || ""}</p>}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </Layout>
    )
  }
}

export default BlogCategories

export const pageQuery = graphql`
  query {
          site {
        siteMetadata {
          title
        }
        }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC }) {
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
`