/** @type {import('jest').Config} */
export default {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest"
  },
};
