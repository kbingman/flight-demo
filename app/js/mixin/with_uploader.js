define(function (require) {

  'use strict';

  return withUploader;

  function withUploader() {

    // Creates a file input, but does not attach it to the document
    // this lets us trigger it later when needed to open the upload
    // dialog. Any element can be used to trigger and thus we are
    // not limited to ugly and unstylable file inputs.

    this.setup = function () {
      var self = this;
      var name = 'uploader_' + this.identity;
      this.attr.fileInput = $('<input multiple type="file" name="' + name + '" id="' + name + '">');

    };

    this.post = function(e, options){
      // if (!this.attr.fileUploadPath) {
      //   throw 'you must specify a path to upload to';
      // }
      var events = options.events;
      var component = this;

      var fileData = new FormData();
      fileData.append('image[file]', options.file);
      // fileData.append('size', file.size);

      var xhr = $.extend(options.xhr, {
        context: this,
        contentType: false,
        cache: false,
        type: 'POST',
        data: fileData,
        processData: false,
        xhr: function() {
          var _xhr = $.ajaxSettings.xhr();

          if (_xhr.upload && options.progress) {
            _xhr.upload.addEventListener('progress', function(e){

              component.trigger(options.progress, {
                progress: e.loaded / e.total * 100
              })
            }, false);
          }

          return _xhr;
        }
      });

      var request = $.ajax(xhr);

      for (var e in events) {
        request[e]($.proxy(function() {
          var args = [].slice.call(arguments);
          var event = args.shift();

          if (typeof event === 'string') {
            this.trigger(event, args);
          } else if (typeof event === 'object') {
            this.trigger(event.node, event.event, args);
          }
        }, this, events[e]));
      }

      return request;
    }

    this.after('initialize', function () {
      this.setup();
      this.on('uploadFile', this.post);
    });

  }

});
