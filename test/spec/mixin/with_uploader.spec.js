define(function(require) {
  'use strict';

  describeMixin('mixin/with_uploader', function () {

    describe('image uploader with images', function() {

      beforeEach(function() {
        setupComponent();
      });

      it('creates a file input', function() {
        var fileInput = this.component.attr.fileInput;

        expect(fileInput[0].tagName).toEqual('INPUT');
      });

    });

    describe('image uploader with images', function() {

      var doneEventSpy;
      var uploadStartEventSpy;
      var fileUploadProgressSpy;
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
        fileUploadProgressSpy = spyOnEvent(document, 'fileUploadProgress');

        this.component.trigger('uploadFile', {
          file: 'image'
        });
        request = mostRecentAjaxRequest();
      });

      it('triggers "fileUploadstart"', function() {
        request.response(ajaxResponse.done);
        expect(uploadStartEventSpy).toHaveBeenTriggeredOn(document);
      });

      it('triggers "fileUploadProgressSpy"', function() {
        request.response(ajaxResponse.done);
        expect(fileUploadProgressSpy).toHaveBeenTriggeredOn(document);
      });

      it('returns the correct url, status and method on success', function() {
        request.response(ajaxResponse.done);
        expect(request.url).toEqual('/api/images');
      });

      it('returns the correct method on success', function() {
        request.response(ajaxResponse.done);
        expect(request.method).toEqual('POST');
      });

      it('returns the correct status on success', function() {
        request.response(ajaxResponse.done);
        expect(request.status).toEqual(200);
      });

    });

  });

});
