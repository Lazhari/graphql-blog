import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
} from 'graphql';

export default new GraphQLInputObjectType({
    name: 'BlogPostInput',
    fields: {
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        content: {
            type: GraphQLString
        },
        userId: {
            type: new GraphQLNonNull(GraphQLID)
        }
    }
});