define(function (require) {

  'use strict';

  /**
  * Module dependencies
  */

  var defineComponent = require('flight/lib/component');
  var withAjax = require('mixin/with_ajax');

  /**
  * Module exports
  */

  return defineComponent(articleData, withAjax);

  /**
   * Module function
   */

  function articleData() {
    this.defaultAttrs({
      baseUrl: 'http://localhost:5000'
    });

    this.get = function(e) {
      console.log('data')
      console.log(e)
      this.ajax({
        xhr: {
          url: '/api/pages',
          type: 'GET'
        },
        events: {
          done: 'uiRenderPageIndex',
          fail: 'ajaxError'
        }
      });
    }

    this.after('initialize', function () {
      this.on(document, 'dataLoadPages', this.get);
    });
  }

});