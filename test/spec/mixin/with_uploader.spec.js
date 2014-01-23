define(function(require) {
  'use strict';

  describeMixin('mixin/with_uploader', function () {

    describe('image uploader with images', function() {

      beforeEach(function() {
        setupComponent();
      });

      it('is defined', function() {
        expect(this.component).toBeDefined();
      });

      it('creates a file input', function() {
        var fileInput = this.component.attr.fileInput;

        expect(fileInput[0].tagName).toEqual('INPUT');
      });

    });

    describe('image uploader with images', function() {

      var loadImage = require('helpers/load_image');
      var hasImage = false;
      var image;
      var doneEventSpy;
      var uploadStartEventSpy;
      var fileUploadEventSpy;
      var request;

      var ajaxResponse = {
        done: {
          status: 200,
          responseText: 'fibble'
        },
        fail: {
          status: 404,
          responseText: '{ error: "Not found" }'
        }
      };

      beforeEach(function() {

        jasmine.Ajax.useMock();

        setupComponent({
          fileUploadPath: '/api/images'
        });

        uploadStartEventSpy = spyOnEvent(document, 'fileUploadstart');
        fileUploadEventSpy = spyOnEvent(document, 'fileUpload');
        // fileUploadErrorEventSpy = spyOnEvent(document, 'fileUpload');
        // Loads a test image, then uses Jasmine's aync features
        // to wait for it
        loadImage(function(requestedImage) {
          image = requestedImage;
          hasImage = true;
        });

        waitsFor(function() {
          return hasImage;
        }, 'Never retrieved file', 5000);
      });

      it('loads the image', function() {
        runs(function() {
          expect(image).toBeDefined();
        });
      });

      it('triggers "fileUploadstart"', function() {

        runs(function() {
          this.component.trigger('uploadFile', {
            file: image
          });

          request = mostRecentAjaxRequest();
          request.response(ajaxResponse.done);

          // expect(uploadStartEventSpy).toHaveBeenTriggeredOn(document);
        });

      });

      it('attaches the file to the input', function() {
        // doneEventSpy = spyOnEvent(document, 'uiRenderPage');

        runs(function() {
          this.component.trigger('uploadFile', {
            file: image
          });
          request = mostRecentAjaxRequest();
          request.response(ajaxResponse.done);

          expect(request.url).toEqual('/api/images');
          expect(request.method).toEqual('POST');
          expect(request.status).toEqual(200);

          // expect(fileUploadEventSpy).toHaveBeenTriggeredOn(document);
        });

      });

    });

  });

});
