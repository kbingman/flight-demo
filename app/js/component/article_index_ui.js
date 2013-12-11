define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');

  return defineComponent(articleIndexUI, withHogan);

  function articleIndexUI() {
    this.defaultAttrs({
      menuItemSelector: '.articleLink',
    });

    this.click = function(e, data) {
      e.preventDefault();
      var path = $(e.target).attr('href');
      console.log(path)

      this.trigger('navigateToURL', { path: path });
    }

    this.render = function(e, data) {
      console.log('hey')

      var markup = this.renderTemplate({
        template: 'index.mustache',
        renderParams: {
          articles: data
        }
      });

      this.$node.html(markup);
    }

    this.after('initialize', function () {
      this.on(document, 'uiRenderPageIndex', this.render);
      this.on('click', {
        menuItemSelector: this.click
      });
    });
  }

});
