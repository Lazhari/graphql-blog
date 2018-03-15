import { GraphQLNonNull, GraphQLID } from 'graphql';

import userType from '../../types/user';
import getProjection from '../../get-projection';
import UserModel from '../../../models/user';

export default {
    type: userType,
    args: {
        _id: {
            name: '_id',
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    async resolve(root, params, options) {
        const projection = getProjection(options.fieldASTs[0]);
        const removedUser = await UserModel.findByIdAndRemove(params._id, {
            select: projection,
        }).exec();

        if (!removedUser) {
            throw new Error('Error removing blog post');
        }

        return removedAttendee;
    },
};
