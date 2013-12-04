define(function (require) {

  'use strict';

  /**
  * Module dependencies
  */

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');

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
    
    this.render = function(request) {
      var markup = this.renderTemplate({
        template: 'article.mustache',
        renderParams: {
          name: 'World'
        }
      });

      this.$node.html(markup);
    }

    this.after('initialize', function () {
      this.render();
    });
  }

});
