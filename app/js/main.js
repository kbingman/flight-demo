'use strict';

requirejs.config({
  baseUrl: '',
  paths: {

    // Flight
    'flight': 'bower_components/flight',
    'flight-router': 'bower_components/flight-router',

    // Application Components
    'component': 'js/component',
    'data': 'js/data',
    'mixin': 'js/mixin',
    'page': 'js/page',

    // Hogan Templating Support
    'hogan': 'bower_components/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
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
    'flight/lib/logger',
    'flight-router/lib/with_route'
  ],

  function(compose, registry, advice, withLogging, withRouter) {
    // debug.enable(true);
    // console.log(withRouter)
    compose.mixin(registry, [advice.withAdvice, withLogging]);

    require(['page/index'], function(initializeIndex) {
      initializeIndex();
    });
  }
);
