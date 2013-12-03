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

    });

    this.after('initialize', function () {
      // console.log('attached')
    });
  }

});