'use strict';
define(function(require) {

  var fixtures = require('fixtures/articles');
  var articles = fixtures.articles;
  var ajaxResponse = {
    done: {
      status: 200,
      responseText: JSON.stringify(articles)
    },
    fail: {
      status: 404,
      responseText: '{ error: "Not found" }'
    }
  };

  describeComponent('data/article_index_data', function () {
    var doneEventSpy;
    var failEventSpy;
    var request;

    beforeEach(function () {
      jasmine.Ajax.useMock();
      setupComponent();

      doneEventSpy = spyOnEvent(document, 'uiRenderPageIndex');
      failEventSpy = spyOnEvent(document, 'ajaxError');

      this.component.trigger('dataLoadPages');
      request = mostRecentAjaxRequest();
    });

    it('should use the correct URL', function() {
      expect(request.url).toEqual('/api/pages');
    });

    it('should use the GET method', function() {
      expect(request.method).toEqual('GET');
    });

    it('should trigger "uiRenderPageIndex" on success', function() {
      request.response(ajaxResponse.done);
      expect(doneEventSpy).toHaveBeenTriggeredOn(document);
    });

    it('should trigger "ajaxError" on 404', function() {
      request.response(ajaxResponse.fail);
      expect(failEventSpy).toHaveBeenTriggeredOn(document);
    });

  });

});
