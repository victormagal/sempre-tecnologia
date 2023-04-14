import { gql } from '@apollo/client';

const GET_ALL_POSTS = gql`
  query {
    blogPosts {
      data {
        attributes {
          title
          slug
          description
        }
      }
    }
  }
`;

const GET_ALL_SLUGS = gql`
  query {
    blogPosts {
      data {
        attributes {
          slug
        }
      }
    }
  }
`;

const GET_POST = gql`
  query ($slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          content
        }
      }
    }
  }
`;

export { GET_ALL_POSTS, GET_ALL_SLUGS, GET_POST };
