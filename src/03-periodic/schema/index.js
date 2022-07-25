import { buildSchema } from "graphql";


export const schema = buildSchema(`
  type Query {
    elements: [Element]
  }

  type Element {
    """Atomic number of the element"""
    atomicNumber: Int
    name: String,
  }
`);

let periodicElements = [{
  atomicNumber: 1,
  name: 'Hydrogen'

},{
  atomicNumber: 2,
  name: 'Helium'
}]

export const resolvers = {
    elements: () => {
      let elementsList = periodicElements.map((e) => {
        return {
          ...e,
        };
      });
      return elementsList;
    },
  Element: {
    id: (parent) => "id",
    name: (parent) => "name"
  }
}
