import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'CommentInput',
    fields: {
        postId: {
            type: new GraphQLNonNull(GraphQLID),
        },
        userId: {
            type: new GraphQLNonNull(GraphQLID),
        },
        body: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
});
