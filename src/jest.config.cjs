
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFiles: ['./jest.setup.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'identity-obj-proxy', 
  },
};


