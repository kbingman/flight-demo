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

            var $target = $(e.target)
            var attr = $target.data('attr');
            var value = $target.text().trim();
            var id = $target.data('id');
            var data = {
                '_id': id
            };
            data[attr] = value;

            self.trigger(document, 'dataUpdatePage', data);
        };

        this.update = function(e, data) {
            // console.log(data);
        };

        this.render = function(e, data) {
            var markup = this.renderTemplate({
                template: 'articles/show.mustache',
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

        this.addImage = function(e, data){
            if (!FileReader){
                return;
            }

            var reader = new FileReader();
            var image = this.image = new Image();

            this.$node.append(image);

            reader.readAsDataURL(data.file);
            reader.onload = function(e){
                image.src = e.target.result;
            };
        };

        this.showProgress = function(e, data) {
            console.log(data);
        };

        this.showUpload = function(e, data) {
            var image = this.image;
            var imageData = JSON.parse(data.response);
            var temp = new Image();
            temp.src = imageData.path;

            temp.onload = function() {
                image.src = imageData.path;
            };
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
