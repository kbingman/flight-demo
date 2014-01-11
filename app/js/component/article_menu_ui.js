define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');

  return defineComponent(articleMenuUI, withHogan);

  function articleMenuUI() {
    this.defaultAttrs({
      newItemSelector: 'a.new',
      navItem: 'a.nav'
    });

    this.render = function(e, data) {
      var markup = this.renderTemplate({
        template: 'articles/menu.mustache'
      });
      this.$node.html(markup);
    }

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
      this.render();
      this.on('click', {
        newItemSelector: this.click,
        navItem: this.navigate
      });
    });
  }

});
