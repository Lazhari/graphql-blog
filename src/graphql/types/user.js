import {
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLString,
    GraphQLID,
} from 'graphql';
import { GraphQLEmail } from 'graphql-custom-types';
export default new GraphQLObjectType({
    name: 'User',
    fields: {
        _id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        email: {
            type: GraphQLEmail,
        },
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        summary: {
            type: GraphQLString,
        },
    },
});
