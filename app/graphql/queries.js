import { gql } from '@apollo/client';

const getAllPosts = gql`
  query {
    blogPosts {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
          title
          updatedAt
          description
          slug
        }
      }
    }
  }
`;

const getAllCategories = gql`
  query {
    categories {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
`;

const getPost = gql`
  query ($slug: String!) {
    blogPosts(filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          image {
            data {
              attributes {
                url
              }
            }
          }
          content
          updatedAt
        }
      }
    }
  }
`;

const getPostsByCategory = gql`
  query ($category: String!) {
    blogPosts(filters: { category: { slug: { eq: $category } } }) {
      data {
        attributes {
          image {
            data {
              attributes {
                url
              }
            }
          }
          category {
            data {
              attributes {
                name
              }
            }
          }
          title
          updatedAt
          description
          slug
        }
      }
    }
  }
`;

export { getAllPosts, getAllCategories, getPost, getPostsByCategory };
