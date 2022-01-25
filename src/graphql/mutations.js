/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
