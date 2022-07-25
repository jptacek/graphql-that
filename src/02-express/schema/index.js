import { buildSchema } from "graphql";

export const schema = buildSchema(`

 """Root schema query"""
  type Query {

    """Time the query was excecuted"""
    currentTime: String!
  }
`);

export const rootValue = {
  currentTime: () => {
    return new Date().toISOString();
  },
};
