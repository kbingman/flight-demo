define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');

  return defineComponent(newArticleUI);

  function newArticleUI() {
    this.defaultAttrs({
      newItemSelector: 'a.new',
      navItem: 'a.nav'
    });

    this.click = function(e, data) {
      e.preventDefault();
      this.trigger('dataCreatePage', {
        title: 'untitled'
      })
    }

    this.navigate = function(e, data) {
      e.preventDefault();
      var path = $(e.target).attr('href');

      this.trigger('navigateToURL', { path: path });
    }

    this.after('initialize', function () {
      this.on('click', {
        newItemSelector: this.click,
        navItem: this.navigate
      });
    });
  }

});
