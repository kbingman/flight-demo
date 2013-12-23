define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');

  return defineComponent(articleIndexUI, withHogan);

  function articleIndexUI() {
    this.defaultAttrs({
      menuItemSelector: '.articleLink',
    });

    this.navigate = function(e, data) {
      e.preventDefault();
      var path = $(e.target).attr('href');

      this.trigger('navigateToURL', { path: path });
    }

    this.render = function(e, data) {
        console.log('render')
      var markup = this.renderTemplate({
        template: 'articles/index.mustache',
        renderParams: {
          articles: data
        }
      });

      this.$node.html(markup);
    }

    this.after('initialize', function () {
      this.on(document, 'uiRenderPageIndex', this.render);
      this.on('click', {
        menuItemSelector: this.navigate
      });
    });
  }

});
