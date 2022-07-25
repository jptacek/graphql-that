import { graphql } from "graphql";
import { schema, rootValue } from './schema/index.js';
 
console.log(rootValue);
const executeGraphQLRequest = async request => {
  const resp = await graphql(schema, request, rootValue);
  console.log(JSON.stringify(resp));
  console.log(resp.data);
};

executeGraphQLRequest( "{currentTime }");