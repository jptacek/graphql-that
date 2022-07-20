import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
} from "graphql";

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        },
      },
      goodbye: {
        type: GraphQLFloat,
        resolve() {
          const pi=3.141;
          return pi;
        },
      },
    },
  }),
});

var source = "{ hello, goodbye }";

graphql({ schema, source }).then((result) => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});
