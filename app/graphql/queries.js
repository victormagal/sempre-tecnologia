import { gql } from '@apollo/client';

const getAllPosts = gql`
  query ($page: Int!, $pageSize: Int!) {
    blogPosts(pagination: { page: $page, pageSize: $pageSize }) {
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
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
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
  query ($category: String!, $page: Int!, $pageSize: Int!) {
    blogPosts(
      filters: { category: { slug: { eq: $category } } }
      pagination: { page: $page, pageSize: $pageSize }
    ) {
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
      meta {
        pagination {
          page
          pageSize
          pageCount
          total
        }
      }
    }
  }
`;

export { getAllPosts, getAllCategories, getPost, getPostsByCategory };
