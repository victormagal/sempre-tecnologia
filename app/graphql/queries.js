import { gql } from '@apollo/client';

const getAllPosts = gql`
  query ($page: Int!, $pageSize: Int!) {
    blogPosts(
      pagination: { page: $page, pageSize: $pageSize }
      sort: "publishedAt:desc"
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
          publishedAt
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

const getAllSlides = gql`
  query {
    slideshows {
      data {
        attributes {
          banner_desktop {
            data {
              attributes {
                url
              }
            }
          }
          banner_mobile {
            data {
              attributes {
                url
              }
            }
          }
          link
        }
      }
    }
  }
`;

const getAllStates = gql`
  query {
    estados {
      data {
        id
        attributes {
          uf
          label
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
          publishedAt
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
      sort: "publishedAt:desc"
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
          publishedAt
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

const getTestimonies = gql`
  query {
    depoimentos {
      data {
        id
        attributes {
          name
          rule
          description
        }
      }
    }
  }
`;

export {
  getAllPosts,
  getAllCategories,
  getAllSlides,
  getAllStates,
  getPost,
  getPostsByCategory,
  getTestimonies
};
