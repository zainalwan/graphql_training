const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {buildSchema} = require('graphql');
const app = express();
const port = 3000;

let root = {
    hello: () => {
        return 'Hi, there!';
    }
};

let schema = buildSchema(`
    type Query {
        hello: String
    }
`);

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}));

app.listen(port);
console.log('GraphQL running on http://localhost:3000/graphql');
