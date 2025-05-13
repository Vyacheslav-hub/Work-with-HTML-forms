module.exports = {
  launch: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
  server: {
    command: 'npm run start',
    port: 9000,
    launchTimeout: 10000,
    debug: true,
  },
};
