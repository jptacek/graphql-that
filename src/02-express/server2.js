import { graphqlHTTP } from 'express-graphql';
import { schema, rootValue } from './schema/index.js';
import express, {json} from 'express';

async function main() {
  const server = express();
  server.use(express.json());
  const port =  process.env.PORT || 4000;

  // Example route
  // server.use('/', (req, res) => {
  //   res.send('Hello That Conference');
  // });

  // GraphQL 
  server.use(
    '/',
    graphqlHTTP({
      schema,
      rootValue,
      graphiql: true,
    })
  );
  
  // This line rus the server
  server.listen(port, () => {
    console.log(`Server URL: http://localhost:${port}/`);
  });
}

main();
