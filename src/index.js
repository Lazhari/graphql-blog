import express from 'express';
import graphqlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import config from 'config';

import schema from './graphql';

const app = express();

// Application running port
const PORT = process.env.PORT || config.has('PORT') ? config.get('PORT') : 8080;

// GraphqQL server route
app.use(
    '/graphql',
    graphqlHTTP(req => ({
        schema,
        pretty: true,
        graphiql: true,
    }))
);

// Connect mongo database
mongoose.connect('mongodb://localhost/graphql');

// start server
const server = app.listen(PORT, () => {
    console.log('Listening at port', server.address().port);
});

export default server;
