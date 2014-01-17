'use strict';
define(function(require) {

  var fixtures = require('fixtures/articles');
  var article = fixtures.article;
  var ajaxResponse = {
    done: {
      status: 200,
      responseText: JSON.stringify(article)
    },
    fail: {
      status: 404,
      responseText: '{ error: "Not found" }'
    }
  };

  describeComponent('data/article_data', function () {

    var doneEventSpy;
    var failEventSpy;
    var request;

    beforeEach(function () {
      jasmine.Ajax.useMock();
      setupComponent();

      doneEventSpy = spyOnEvent(document, 'uiRenderPage');
      failEventSpy = spyOnEvent(document, 'ajaxError');
      this.component.trigger('dataLoadSinglePage', {
        id: article._id
      });
      request = mostRecentAjaxRequest();
    });

    it('should use the correct URL', function() {
      var path = '/api/pages/52a390c4ac727a0cfa000001';
      expect(request.url).toEqual(path);
    });

    it('should use the correct method', function() {
      expect(request.method).toEqual('GET');
    });

    it('should trigger "uiRenderPage" on success', function() {
      request.response(ajaxResponse.done);
      expect(doneEventSpy).toHaveBeenTriggeredOnAndWith(document, article);
    });

    it('should trigger "ajaxError" on 404', function() {
      request.response(ajaxResponse.fail);
      expect(failEventSpy).toHaveBeenTriggeredOn(document);
    });

  });
});
