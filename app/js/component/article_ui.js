define(function (require) {

  'use strict';

  /**
  * Module dependencies
  */

  var defineComponent = require('flight/lib/component');
  var withHogan = require('flight-hogan/lib/with_hogan');
  var hogan = require('hogan');
  
  console.log(hogan)
  // var router = require('bower_components/flight-router/lib/with_route');

  /**
  * Module exports
  */

  return defineComponent(articleUI, withHogan);

  /**
   * Module function
   */

  function articleUI() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {
      var helloWorld = this.renderTemplate({
        template: 'Hello, {{name}}!',
        renderParams: {
          name: 'World'
        }
      });

      this.$node.html(helloWorld);
    });
  }

});
