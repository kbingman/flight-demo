define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');
  var withRouter = require('bower_components/flight-router/lib/with_route');

  return defineComponent(articleIndexUI, withHogan, withRouter);

  function articleIndexUI() {
    this.defaultAttrs({
      menuItemSelector: 'li h1',
    });

    this.click = function(e, data) {
      e.preventDefault();
      var path = $(e.target).attr('href');
      console.log(path);
      this.navigate(path);
    }

    this.render = function(e, data) {

      var markup = this.renderTemplate({
        template: 'index.mustache',
        renderParams: {
          articles: data
        }
      });

      this.$node.html(markup);
    }

    this.after('initialize', function () {
      // this.render();
      // this.trigger('dataLoadPages');
      this.on(document, 'uiRenderPageIndex', this.render);
      this.on('click', {
        menuItemSelector: this.click
      });
    });
  }

});
