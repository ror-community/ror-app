'use strict';

module.exports = function(environment) {
  const pkg = require('../package.json');

  let ENV = {
    modulePrefix: 'ror-app',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    API_URL_V1: process.env.API_URL_V1 || "https://api.ror.org/v1",
    API_URL_V2: process.env.API_URL_V2 || "https://api.ror.org/v2",
    BASE_URL: process.env.BASE_URL || null,
    SENTRY_DSN: process.env.SENTRY_DSN || null,
    VERSION: pkg.version,
    APP_NAME: pkg.name,

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    launchDarkly: {
      clientSideId: process.env.LAUNCH_DARKLY_CLIENT_SIDE_ID,
      mode: process.env.LAUNCH_DARKLY_MODE || 'local',
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.launchDarkly.localFlags = {
      'v2_ui': true
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
