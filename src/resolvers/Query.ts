import { Resolvers } from "../__generated__/resolvers-types";

export const Query: Resolvers = {
  Query: {
    thing(_parent, { id }, _context) {
      return { id, name: "Name" };
    },
    async catFact(_parent, _args, _context) {
      // https://catfact.ninja/fact

      const request = await fetch("https://catfact.ninja/fact");
      const response = await request.json();

      // @ts-ignore
      return { fact: response.fact };
    },
  },
};
