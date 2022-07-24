import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Query {
    currentTime: String!
  }
`);

export const rootValue = {
  currentTime: () => {
    return new Date().toISOString();
  },
};
