import React from 'react';
import { graphql } from 'gatsby';
// import { Link } from 'gatsby';

// Removed ../ bcz in gatsby-node.js we used webpack absolute imports
import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import BlogPostCard from 'components/BlogPostCard';
import PageNavigation from 'components/PageNavigation';
// import Image from "components/image"

//pagecontext is default comes from gatsby-node-js
const IndexPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <PageNavigation
          currentPage={pageContext.currentPage}
          numPages={pageContext.numPages}
        />
        {posts.map(({ node }, i) => {
          const title = node.frontmatter.title || 'No title';
          return (
            <BlogPostCard
              key={node.fields.slug}
              slug={node.fields.slug}
              title={title}
              date={node.frontmatter.date}
              readingTime={node.fields.readingTime.text}
              excerpt={node.excerpt}
              image={node.frontmatter.image.childImageSharp.fluid}
            />
          );
        })}
      </main>
    </Layout>
  );
};

export default IndexPage;

//This query will get injected automatically when we build our site
export const indexQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      filter: { frontmatter: { type: { eq: "post" }, published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            readingTime {
              text
            }
          }
          frontmatter {
            date
            title
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`;
