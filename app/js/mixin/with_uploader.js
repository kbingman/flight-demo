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

      // On change, grabs the file list
      this.attr.fileInput.on('change', function(){
        var files = this.files;
        Array.prototype.forEach.call(files, function(file){
          self.trigger('uploadFile', {
            file: file
          });
        });
        // console.log(self.attr);
      });
    };

    // Triggers the file dialog
    this.triggerUpload = function(data) {
      this.attr.uploadFormData = data;
      this.attr.fileInput.trigger('click');
    };

    this.upload = function(e, data){
      if (!this.attr.fileUploadPath) {
        throw 'you must specify a path to upload to';
      }
      var component = this;
      var fileData = new FormData();
      // fileData.append('filename', file.name);
      // fileData.append('mimetype', file.type);
      fileData.append('image[file]', data.file);
      // fileData.append('size', file.size);

      $.ajax({
        url: this.attr.fileUploadPath,
        type: 'POST',
        data: fileData,
        contentType: false,
        cache: false,
        processData: false,
        xhr: function() {
          var _xhr = $.ajaxSettings.xhr();
          if (_xhr.upload) {
            console.log('fileUploadstart')
            _xhr.upload.addEventListener('progress', onProgressHandler, false);
            _xhr.upload.addEventListener('loadstart', onLoadstartHandler, false);
            _xhr.upload.addEventListener('load', onLoadHandler, false);
          }
          return _xhr;
        }
      });

      function onLoadstartHandler(e) {
        console.log('fileUploadstart')
        component.trigger('fileUploadstart', {
          file: data.file
        });
      }

      function onLoadHandler(e) {
        console.log('fileUpload')
        component.trigger('fileUpload');
      }

      function onProgressHandler(e) {
        var percent = e.loaded / e.total * 100;

        component.trigger('fileUploadProgress', {
          percent: percent
        });
      }
    }

    this.after('initialize', function () {
      this.setup();
      this.on('uploadFile', this.upload);
    });

  }

});
