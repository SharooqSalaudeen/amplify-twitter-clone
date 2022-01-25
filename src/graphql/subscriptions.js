/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          commentUserId
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          likeUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          commentUserId
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          likeUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          commentUserId
        }
        nextToken
        startedAt
      }
      Likes {
        items {
          id
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          likeUserId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
