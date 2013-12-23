define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');
  var withUploader = require('mixin/with_uploader');

  return defineComponent(articleUI, withHogan, withUploader);

  function articleUI() {
    this.defaultAttrs({
        titleEl: '[data-attr]',
        imageUploader: '[data-uploader]',
        fileUploadPath: '/api/images'
    });

    this.watch = function(e, data) {
        var self = this;
        if (this.timer) {
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(function(){
            var $target = $(e.target)
            var attr = $target.data('attr');
            var value = $target.text();
            var id = $target.data('id');
            var data = {
                '_id': id
            }
            data[attr] = value;

            self.trigger('dataUpdatePage', data);
        }, 300);
    }

    this.update = function(e, data) {
        console.log(data);
    }

    this.render = function(e, data) {
        var markup = this.renderTemplate({
            template: 'articles/show.mustache',
            renderParams: data
        });

        this.$node.html(markup);
    }

    this.clicker = function(e){
        this.triggerUpload({
            'image[caption]': 'my snappy title'
        })
    }

    this.after('initialize', function () {
        this.on(document, 'uiRenderPage', this.render);
        this.on(document, 'uiRenderPageUpate', this.update);
        this.on('keyup', {
            titleEl: this.watch
        });
        this.on('click', {
            imageUploader: this.clicker
        });
    });
  }

});
