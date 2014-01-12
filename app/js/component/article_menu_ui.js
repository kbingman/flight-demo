define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');

  return defineComponent(articleMenuUI, withHogan);

  function articleMenuUI() {
    this.defaultAttrs({
      newItemSelector: '[data-new="article"]',
      navItem: '[data-nav]'
    });

    this.render = function(e, data) {
      var markup = this.renderTemplate({
        template: 'articles/menu'
      });
      this.$node.html(markup);
    };

    this.newPage = function(e, data) {
      e.preventDefault();
      this.trigger('dataCreatePage', {
        title: 'untitled',
        content: '<p>Enter content here</p>'
      });
    };

    this.navigate = function(e, data) {
      e.preventDefault();
      var path = $(e.target).attr('href');

      this.trigger('navigateToURL', { path: path });
    };

    this.after('initialize', function () {
      this.render();
      this.on('click', {
        newItemSelector: this.newPage,
        navItem: this.navigate
      });
    });
  }

});
