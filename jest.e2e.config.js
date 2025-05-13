module.exports = {
    preset: 'jest-puppeteer',
    testEnvironment: 'jest-environment-puppeteer',
    testTimeout: 30000,
    testMatch: ['**/e2e/**/*.test.js'],
};
