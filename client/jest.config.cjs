module.exports = {
  testEnvironment: 'jsdom',
    moduleFileExtensions: ["js", "jsx"],
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest"
    },
    setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
  };
  