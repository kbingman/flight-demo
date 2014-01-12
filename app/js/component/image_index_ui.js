define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');

  return defineComponent(articleIndexUI, withHogan);

  function articleIndexUI() {
    this.defaultAttrs({
      menuItemSelector: '.imageLink',
    });

    this.navigate = function(e, data) {
      e.preventDefault();
      // var path = $(e.target).attr('href');
      //
      // this.trigger('navigateToURL', { path: path });
    };

    this.render = function(e, data) {
      var markup = this.renderTemplate({
        template: 'images/index',
        renderParams: {
          images: data
        }
      });

      this.$node.html(markup);
    };

    this.after('initialize', function () {
      this.on(document, 'uiRenderImageIndex', this.render);
      this.on('click', {
        menuItemSelector: this.navigate
      });
    });
  }

});
