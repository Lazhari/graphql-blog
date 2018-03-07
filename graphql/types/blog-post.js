import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID
} from 'graphql';

import UserType from './user';

export default new GraphQLObjectType({
    name: 'BlogPost',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID)
        },
        title: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        userId: {
            type: UserType
        }
    }
});