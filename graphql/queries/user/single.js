import {
    GraphQLList,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';
import {Types} from 'mongoose';

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
    resolve (root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);

        return UserModel
        .findById(params.id)
        .select(projection)
        .exec();
    }
};
