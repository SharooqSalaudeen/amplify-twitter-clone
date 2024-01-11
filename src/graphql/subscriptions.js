/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePostByUserId = /* GraphQL */ `
  subscription OnCreatePostByUserId($userID: ID!) {
    onCreatePostByUserId(userID: $userID) {
      id
      type
      content
      image
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          type
          content
          postId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          type
          postId
          userId
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      type
      email
      name
      tag
      picture
      lastOnlineAt
      posts {
        items {
          id
          type
          content
          image
          userId
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      type
      email
      name
      tag
      picture
      lastOnlineAt
      posts {
        items {
          id
          type
          content
          image
          userId
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      type
      email
      name
      tag
      picture
      lastOnlineAt
      posts {
        items {
          id
          type
          content
          image
          userId
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      type
      content
      image
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          type
          content
          postId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          type
          postId
          userId
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      type
      content
      image
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          type
          content
          postId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          type
          postId
          userId
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      type
      content
      image
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      comments {
        items {
          id
          type
          content
          postId
          userId
          createdAt
          updatedAt
        }
        nextToken
      }
      likes {
        items {
          id
          type
          postId
          userId
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      type
      content
      postId
      post {
        id
        type
        content
        image
        userId
        user {
          id
          type
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      type
      content
      postId
      post {
        id
        type
        content
        image
        userId
        user {
          id
          type
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      type
      content
      postId
      post {
        id
        type
        content
        image
        userId
        user {
          id
          type
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      type
      postId
      post {
        id
        type
        content
        image
        userId
        user {
          id
          type
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      type
      postId
      post {
        id
        type
        content
        image
        userId
        user {
          id
          type
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      type
      postId
      post {
        id
        type
        content
        image
        userId
        user {
          id
          type
          email
          name
          tag
          picture
          lastOnlineAt
          createdAt
          updatedAt
        }
        comments {
          nextToken
        }
        likes {
          nextToken
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        type
        email
        name
        tag
        picture
        lastOnlineAt
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
