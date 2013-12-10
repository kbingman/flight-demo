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

    this.fetch = function(e, data) {
      this.ajax({
        xhr: {
          url: 'http://localhost:5000' + '/api/pages/' + data.id,
          type: 'GET'
        },
        events: {
          done: 'uiRenderPage',
          fail: 'ajaxError'
        }
      });
    }

    this.create = function(e, data) {
      this.ajax({
        xhr: {
          url: 'http://localhost:5000' + '/api/pages',
          type: 'POST',
          data: { page: data }
        },
        events: {
          done: 'uiRenderPage',
          fail: 'ajaxError'
        }
      });
    }

    this.after('initialize', function () {
      this.on(document, 'dataLoadSinglePage', this.fetch);
      this.on(document, 'dataCreatePage', this.create);
    });
  }

});