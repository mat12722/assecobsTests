const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://qa-auth.assecobs.com/login?service=https://waproanyqa.assecobs.pl/';
    },
  },
});
