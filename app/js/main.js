'use strict';

requirejs.config({
  baseUrl: '',
  paths: {
    'hogan': 'bower_components/hogan/web/builds/',
    // Flight
    'flight': 'bower_components/flight',
    'flight-hogan': 'bower_components/flight-hogan',
    'flight-router': 'bower_components/flight-router',

    // Application Components
    'component': 'js/component',
    'data': 'js/data',
    'mixin': 'js/mixin',
    'page': 'js/page',

    // Hogan Templating Support
    // 'text': 'bower_components/text/text',
    // 'hgn': 'bower_components/requirejs-hogan-plugin/hgn',
    // 'hogan': 'bower_components/requirejs-hogan-plugin/hogan'
  },
  shim: {
    'hogan': {
      exports: 'Hogan'
    }
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger'
  ],

  function(compose, registry, advice, withLogging) {
    // debug.enable(true);
    compose.mixin(registry, [advice.withAdvice, withLogging]);

    require(['page/index'], function(initializeIndex) {
      initializeIndex();
    });
  }
);
