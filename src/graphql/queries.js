/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchLikes = /* GraphQL */ `
  query SearchLikes(
    $filter: SearchableLikeFilterInput
    $sort: [SearchableLikeSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableLikeAggregationInput]
  ) {
    searchLikes(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
      items {
        id
        postID
        User {
          id
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        likeUserId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchComments = /* GraphQL */ `
  query SearchComments(
    $filter: SearchableCommentFilterInput
    $sort: [SearchableCommentSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableCommentAggregationInput]
  ) {
    searchComments(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
      items {
        id
        content
        postID
        User {
          id
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        commentUserId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: [SearchablePostSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchablePostAggregationInput]
  ) {
    searchPosts(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
      items {
        id
        content
        image
        userID
        Comments {
          nextToken
        }
        Likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const searchUsers = /* GraphQL */ `
  query SearchUsers(
    $filter: SearchableUserFilterInput
    $sort: [SearchableUserSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableUserAggregationInput]
  ) {
    searchUsers(filter: $filter, sort: $sort, limit: $limit, nextToken: $nextToken, from: $from, aggregates: $aggregates) {
      items {
        id
        email
        name
        tag
        picture
        lastOnlineAt
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      postID
      User {
        id
        email
        name
        tag
        picture
        lastOnlineAt
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      likeUserId
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes($filter: ModelLikeFilterInput, $limit: Int, $nextToken: String) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        User {
          id
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        likeUserId
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      postID
      User {
        id
        email
        name
        tag
        picture
        lastOnlineAt
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      commentUserId
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        postID
        User {
          id
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
        commentUserId
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      image
      userID
      Comments {
        items {
          id
          content
          postID
          createdAt
          updatedAt
          commentUserId
        }
        nextToken
      }
      Likes {
        items {
          id
          postID
          createdAt
          updatedAt
          likeUserId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        image
        userID
        Comments {
          nextToken
        }
        Likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      tag
      picture
      lastOnlineAt
      Posts {
        items {
          id
          content
          image
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        tag
        picture
        lastOnlineAt
        Posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
