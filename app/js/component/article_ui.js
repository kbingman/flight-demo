define(function (require) {

  'use strict';

  var defineComponent = require('flight/lib/component');
  var withHogan = require('mixin/with_hogan');
  var withUploader = require('mixin/with_uploader');
  var withUploadEvents = require('mixin/with_upload_events');

  return defineComponent(articleUI, withHogan, withUploader,
    withUploadEvents);

  function articleUI() {
    this.defaultAttrs({
      titleEl: '[data-attr]',
      imageUploader: '[data-uploader]',
      fileUploadPath: '/api/images_',
      template: 'articles/show'
    });

    this.watch = function(e, data) {
      var $target = $(e.target);

      var attr = $target.data('attr');
      var value = $target.text().trim();
      var id = $target.data('id');
      var results = {
        '_id': id
      };

      results[attr] = value;

      this.trigger(document, 'dataUpdatePage', results);
    };

    this.update = function(e, data) {
      // console.log(data);
    };

    this.render = function(e, data) {
      var markup = this.renderTemplate({
        renderParams: data
      });
      this.$node.html(markup);
    };

    // These should be another mixin, just for handling the
    // Image UI stuff
    this.uploadImage = function(e){
      this.triggerUpload({
        'image[caption]': 'my snappy title'
      });
    };

    this.after('initialize', function () {
      this.on(document, 'uiRenderPage', this.render);
      this.on(document, 'uiRenderPageUpate', this.update);

      this.on(document, 'uploadFile', this.addImage);
      this.on(document, 'fileUploadProgress', this.showProgress);
      this.on(document, 'fileUploadDone', this.showUpload);

      this.on('keyup', {
        titleEl: this.watch
      });
      this.on('click', {
        imageUploader: this.uploadImage
      });
    });
  }

});
