import { Resolvers } from "../types";

// Computed Field

const resolvers: Resolvers = {
  User: {
    isMe: ({ id }, _, { loggedInUser }) => {
      if (!loggedInUser) {
        return false;
      }
      return id === loggedInUser.id;
    },
  },
};

export default resolvers;
