module.exports = {
  testPathIgnorePatterns: [
    "/home/marwa/Projects/nextjs-boilerplate/.next/",
    "/home/marwa/Projects/nextjs-boilerplate/node_modules/",
  ],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$":
      "/home/marwa/Projects/nextjs-boilerplate/node_modules/babel-jest",
  },
};
