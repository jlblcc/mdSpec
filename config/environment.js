'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'mdspec',
    podModulePrefix: 'mdspec/pods',
    environment,
    emberPouch: {},
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

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    contentSecurityPolicy: {
      //'default-src': ["'none'"],
      'script-src': ["'self' 'unsafe-eval' *.google.com *.gstatic.com"],
      'font-src': ["'self'"],
      'connect-src': ["'self'"],
      'img-src': ["'self' data:"],
      'style-src': ["'self' 'unsafe-inline' *.google.com *.googleapis.com *.gstatic.com"],
      'media-src': ["'self' *.gstatic.com *.googleapis.com"]
    }
  };

  if(environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.emberPouch.localDb = 'dev';
    //ENV.emberPouch.remoteDb = 'http://localhost:5984/my_couch';

    ENV.contentSecurityPolicy = {
      'script-src': ["'self' 'unsafe-eval' *.google.com *.gstatic.com"],
      'font-src': ["'self'"],
      'connect-src': ["'self'"],
      'img-src': ["'self' data:"],
      'style-src': ["'self' 'unsafe-inline' *.google.com *.googleapis.com *.gstatic.com"],
      'media-src': ["'self' *.gstatic.com *.googleapis.com"]
    }
  }

  if(environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if(environment === 'staging') {
    ENV.rootURL = '/mdSpec';
    ENV.locationType = 'hash';
    ENV.emberPouch.localDb = 'mdspec';
  }

  if(environment === 'production') {
    // here you can enable a production-specific feature
    ENV.emberPouch.localDb = 'mdspec';

    ENV.rootURL = '/mdSpec';
    ENV.locationType = 'hash';
  }
  return ENV;
};
