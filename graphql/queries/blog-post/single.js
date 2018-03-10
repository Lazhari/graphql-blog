import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull
} from 'graphql';
import {
  Types
} from 'mongoose';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blog-post';

export default {
  type: blogPostType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve(obj, args, context, ast) {
    const projection = getProjection(ast.operation.selectionSet.selections[0]);
    return BlogPostModel
      .findById(args.id)
      .populate({
        path: 'userId'
      })
      .select(projection)
      .exec();
  }
};