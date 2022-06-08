const {graphql, buildSchema} = require('graphql');

let schema = buildSchema(`
    type Query {
        hello: String
    }
`);

let rootValue = {
    hello: () => {
        return 'Hello, Zain!';
    }
};

/**
 * This is an immediately invoked function expression to be used as async
 * function because of we need to use 'await' keyword
 */
(async () => {
    let response = await graphql({
        schema,
        source: '{hello}',
        rootValue
    });
    console.log(response);
})();
