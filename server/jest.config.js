export default {
     testEnvironment: 'node',
     testMatch: [
          '<rootDir>/test/**/*.(test|spec).(ts|tsx|js|mjs)',
     ],
     coveragePathIgnorePatterns: [
          '<rootDir>/node_modules/',
          '<rootDir>/test/helpers/',
     ],
     clearMocks: true,
}