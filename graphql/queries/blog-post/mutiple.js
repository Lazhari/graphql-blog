import {
    GraphQLList
} from 'graphql';

import blogPostType from '../../types/blog-post';
import getProjection from '../../get-projection';
import BlogPostModel from '../../../models/blog-post';

export default {
    type: new GraphQLList(blogPostType),
    args: {},
    resolve(obj, args, context, ast) {
        const projection = getProjection(ast.operation.selectionSet.selections[0]);

        return BlogPostModel
            .find()
            .populate({ path: 'userId' })
            .select(projection)
            .exec();
    }
};
