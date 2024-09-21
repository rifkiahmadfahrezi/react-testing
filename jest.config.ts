import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  // Add this to handle TypeScript and JSX/TSX files
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest', // Use babel-jest for transforming TypeScript and JSX/TSX files
  },
  testEnvironment: 'jsdom', // Use jsdom for simulating a browser-like environment for testing React components
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Support for these file extensions
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // Ignore node_modules by default
};

export default config;
