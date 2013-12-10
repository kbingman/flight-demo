define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(newArticleUI);

  function newArticleUI() {
    this.defaultAttrs({
      newItemSelector: 'a.new',
    });

    this.click = function(e, data) {
      e.preventDefault();
      this.trigger('dataCreatePage', {
        title: 'untitled'
      })
    }

    this.after('initialize', function () {
      this.on('click', {
        newItemSelector: this.click
      });
    });
  }

});
