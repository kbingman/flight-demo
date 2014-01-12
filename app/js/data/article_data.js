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

    this.fetch = function(e, data) {
      // if (this.timer) {
      //     clearTimeout(this.timer);
      // }

      // this.timer = setTimeout(function(){
      // }, 0);
      this.ajax({
        xhr: {
          url: '/api/pages/' + data.id,
          type: 'GET'
        },
        events: {
          done: 'uiRenderPage',
          fail: 'ajaxError'
        }
      });
    };

    this.create = function(e, data) {
      this.ajax({
        xhr: {
          url: '/api/pages',
          type: 'POST',
          data: { page: data }
        },
        events: {
          done: 'uiRenderPage',
          fail: 'ajaxError'
        }
      });
    };

    this.update = function(e, data) {
      // console.log(data)
      this.ajax({
        xhr: {
          url: '/api/pages/' + data._id,
          type: 'POST',
          data: {
            'page': data,
            '_method': 'PUT'
          }
        },
        events: {
          done: 'uiRenderPageUpate',
          fail: 'ajaxError'
        }
      });
    };

    this.after('initialize', function () {
      this.on(document, 'dataLoadSinglePage', this.fetch);
      this.on(document, 'dataCreatePage', this.create);
      this.on(document, 'dataUpdatePage', this.update);
    });
  }

});
