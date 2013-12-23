define(function (require) {

    'use strict';
    
    return withUploader
    
    function withUploader() {

        var self = this;

        // Creates a file input, but does not attach it to the document
        // this lets us trigger it later when needed
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
            this.attr.fileUploadData = data;
            this.attr.fileInput.trigger('click');
        }

        this.upload = function(e, data){
            if (!this.attr.fileUploadPath) {
                throw 'you must specify a path to upload to';
            }

            var component = this;
            var xhr = new XMLHttpRequest();
            var formData = new FormData(this.attr.fileUploadData);
            
            console.log(data)

            formData.append('image[file]', data.file);
            formData.append('image[caption]', 'Caption');

            // Set up events
            xhr.upload.addEventListener('loadstart', onLoadstartHandler, false);
            xhr.upload.addEventListener('progress', onProgressHandler, false);
            xhr.upload.addEventListener('load', onLoadHandler, false);
            xhr.addEventListener('readystatechange', onReadystatechangeHandler, false);

            // Post the data to the given URL
            xhr.open('POST', this.attr.fileUploadPath, true);
            xhr.send(formData);

            // Callbacks. These need to be here to get proper access to the component
            function onLoadstartHandler(e) {
                console.log('on start');
                component.trigger('fileUploadstart');
            }

            function onLoadHandler(e) {
                console.log('on load');
                component.trigger('fileUpload');
            }

            function onProgressHandler(e) {
                var percent = e.loaded / e.total * 100;

                component.trigger('fileUploadProgress', { 
                    percent: percent 
                });
                console.log('on progress', percent);
            }

            function onReadystatechangeHandler(e) {
                var status = null;

                try {
                  status = e.target.status;
                }
                catch(error) {
                  return;
                }

                if (status == '200' && xhr.readyState == 4) {
                    component.trigger('fileUploadDone', {
                        file: e.target.responseText
                    });
                    console.log('on finish', e.target.responseText);
                }
            }
        }

        this.after('initialize', function () {
          this.setup();
          this.on('uploadFile', this.upload);
        });
    
    }

});