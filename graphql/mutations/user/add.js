import {
    GraphQLNonNull,
    GraphQLBoolean
} from 'graphql';

import userInputType from '../../types/user-input';
import UserModel from '../../../models/user';

export default {
    type: GraphQLBoolean,
    args: {
        data: {
            name: 'data',
            type: new GraphQLNonNull(userInputType)
        }
    },
    async resolve (root, params, options) {
        const user = new UserModel(params.data);
        const newUser = await user.save();

        if (!newUser) {
            throw new Error('Error adding new blog post');
        }
        return true;
    }
};
