'use strict';

var tests = Object.keys(window.__karma__.files).filter(function (file) {
  return (/\.spec\.js$/.test(file));
});

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base',

  paths: {
    'flight': 'app/bower_components/flight',
    'flight-router': 'app/bower_components/flight-router',

    // Application Components
    'component': 'app/js/component',
    'data': 'app/js/data',
    'mixin': 'app/js/mixin',
    'page': 'app/js/page',

    // Hogan Templating Support
    'hogan': 'app/bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
    'templates': 'app/js/templates',

    // Test Fixtures
    'fixtures': 'test/fixtures',
    'helpers': 'test/helpers'
  },

  // ask Require.js to load these files (all our tests)
  deps: tests,

  // start test run, once Require.js is done
  callback: window.__karma__.start
});
