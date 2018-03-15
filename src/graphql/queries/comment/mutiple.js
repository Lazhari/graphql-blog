import { GraphQLList, GraphQLNonNull, GraphQLID } from 'graphql';

import commentType from '../../types/comment';
import getProjection from '../../get-projection';
import CommentModel from '../../../models/comment';

export default {
    type: new GraphQLList(commentType),
    args: {
        postId: {
            name: 'postId',
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve(obj, args, context, ast) {
        const projection = getProjection(
            ast.operation.selectionSet.selections[0]
        );

        return CommentModel.find({
            postId: args.postId,
        })
            .select(projection)
            .exec();
    },
};
