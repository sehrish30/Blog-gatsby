import React from 'react';
import { graphql } from 'gatsby';
// import { Link } from 'gatsby';

// Removed ../ bcz in gatsby-node.js we used webpack absolute imports
import SEO from 'components/SEO';
import Layout from 'components/Layout';
import Hero from 'components/Hero';
import BlogPostCard from 'components/BlogPostCard';
// import Image from "components/image"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <main>
        <BlogPostCard />
      </main>
    </Layout>
  );
};

export default IndexPage;

//This query will get injected automatically when we build our site
export const indexQuery = graphql`
  query blogListQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
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
