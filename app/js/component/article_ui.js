define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');

  return defineComponent(articleUI, withHogan);

  function articleUI() {
    this.defaultAttrs({

    });

    this.render = function(e, data) {

      var markup = this.renderTemplate({
        template: 'article.mustache',
        renderParams: data
      });

      this.$node.html(markup);
    }

    this.after('initialize', function () {
      this.on(document, 'uiRenderPage', this.render);
      this.on('click', {
       
      });
    });
  }

});
