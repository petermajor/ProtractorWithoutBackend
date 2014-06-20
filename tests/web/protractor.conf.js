exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'restaurant/*_specs.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:55555/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
