import { gql } from "@apollo/client";

export const previewPost = `
    query PreviewPost($id: ID!, $idType: PostIdType!) {
      post(id: $id, idType: $idType) {
        databaseId
        slug
        status
      }
    }`;

export const getPaths = gql`
  query getPaths {
    posts(first: 10000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export const getHomePosts = gql`
  query AllPosts {
    posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
      edges {
        node {
          title
          excerpt
          slug
          date
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
              firstName
              lastName
              avatar {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const pageData = `
fragment pagedata on Page {
  id
  uri
  template {
    templateName
  }
  title
  content
  flexContent {
    fieldGroupName
 
  }
  author {
    node {
      name
      firstName
      lastName
      avatar {
        url
      }
    }
  }
}
`;

export const courseData = gql`
  fragment courseData on Course {
    id
    uri
    template {
      templateName
    }
    title
    date
    content
    featuredImage {
      node {
        srcSet
        sourceUrl
        altText
      }
    }

    author {
      node {
        name
        firstName
        lastName
        avatar {
          url
        }
      }
    }
  }
`;

export const getByUri = gql`
  query getPageByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ...pagedata
    }
  }
  ${pageData}
`;

export const getCourseByUri = gql`
  query getPageByUri($uri: String!) {
    nodeByUri(uri: $uri) {
      ...courseData
    }
  }
  ${courseData}
`;

// type is the page type such as Post or Page
export const FlexContent = (type) => {
  return `
  flexiblecontent {
    ... on ${type}_Flexcontent_Flexiblecontent_Testlayout {
      fieldGroupName
      testTitle
    }
  }
  `;
};

export const getHomePage = gql`
  query frontpage {
    nodeByUri(uri: "/") {
      ... on Page {
        hero {
          title
          subtitle
          heroimage {
            altText
            srcSet
            sourceUrl
          }
          herocolor
          cta {
            url
            title
            target
          }
        }
      }
    }
  }
`;

export const getScripts = gql`
  query getcookies {
    siteOptions {
      tracking_cookies {
        functionalCookies
        trackingCookies
      }
    }
  }
`;

export const GetMenu = gql`
  query getMenu($location: MenuLocationEnum) {
    menuItems(where: { location: $location }) {
      nodes {
        id
        parentId
        title: label
        uri
      }
    }
  }
`;

export const getCourses = gql`
  query getcourses($first: Int) {
    courses(first: $first) {
      nodes {
        uri
        id
        title
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            srcSet
            altText
          }
        }
      }
    }
  }
`;
