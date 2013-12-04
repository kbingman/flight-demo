'use strict';

requirejs.config({
  baseUrl: '',
  paths: {
    
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
    'hogan': 'bower_components/hogan/build/hogan',
    'templates': 'js/templates',
    // 'text': 'bower_components/text/text',
    // 'hgn': 'bower_components/requirejs-hogan-plugin/hgn',
    // 'hogan': 'bower_components/requirejs-hogan-plugin/hogan'
  }
});

require(
  [
    'flight/lib/compose',
    'flight/lib/registry',
    'flight/lib/advice',
    'flight/lib/logger'
  ],

  function(compose, registry, advice, withLogging, Hogan) {
    // debug.enable(true);
    compose.mixin(registry, [advice.withAdvice, withLogging]);

    require(['page/index'], function(initializeIndex) {
      initializeIndex();
    });
  }
);
