import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import { Types } from 'mongoose';

import UserType from '../../types/user';
import getProjection from '../../get-projection';
import UserModel from '../../../models/user';

export default {
    type: UserType,
    args: {
        id: {
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(obj, args, context, ast) {
        const projection = getProjection(ast.operation.selectionSet.selections[0]);

        return UserModel
            .findById(args.id)
            .select(projection)
            .exec();
    }
};
