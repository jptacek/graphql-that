import { graphqlHTTP } from 'express-graphql';
import { schema, resolvers } from './schema/index.js';
import express, {json} from 'express';

async function main() {
  const server = express();
  server.use(json());
  const port =  process.env.PORT || 4000;

  // GraphQL 
  server.use(
    '/',
    graphqlHTTP({
      schema,
      rootValue: resolvers,
      graphiql: true,
    })
  );
  console.log(`schema`)
  
  // This line rus the server
  server.listen(port, () => {
    console.log(`Server URL: http://localhost:${port}/`);
  });
}

main();
