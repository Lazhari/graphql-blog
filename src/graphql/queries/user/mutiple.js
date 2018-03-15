import { GraphQLList } from 'graphql';

import userType from '../../types/user';
import getProjection from '../../get-projection';
import UserModel from '../../../models/user';

export default {
    type: new GraphQLList(userType),
    args: {},
    resolve(obj, args, context, ast) {
        const projection = getProjection(
            ast.operation.selectionSet.selections[0]
        );

        return UserModel.aggregate([
            {
                $project: projection,
            },
        ]).exec();
    },
};
