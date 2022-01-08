// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const PostStatus = {
  "DRAFT": "DRAFT",
  "PUBLISHED": "PUBLISHED"
};

const { User, Post, Comment } = initSchema(schema);

export {
  User,
  Post,
  Comment,
  PostStatus
};