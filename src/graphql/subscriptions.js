/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePostByUserId = /* GraphQL */ `
  subscription OnCreatePostByUserId($userID: ID!) {
    onCreatePostByUserId(userID: $userID) {
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
export const onUpdateUserById = /* GraphQL */ `
  subscription OnUpdateUserById($id: ID!) {
    onUpdateUserById(id: $id) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
