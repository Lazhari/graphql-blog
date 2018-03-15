import { GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { Types } from 'mongoose';

import commentType from '../../types/comment';
import getProjection from '../../get-projection';
import CommentModel from '../../../models/comment';

export default {
    type: commentType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve(obj, args, context, ast) {
        const projection = getProjection(
            ast.operation.selectionSet.selections[0]
        );

        return CommentModel.findById(args.id)
            .select(projection)
            .exec();
    },
};
