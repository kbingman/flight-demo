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

    this.get = function() {
      console.log('data')
      this.ajax({
        xhr: {
          url: 'http://localhost:5000' + '/api/pages',
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