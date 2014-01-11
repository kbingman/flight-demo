'use strict';
define(function(require) {

  var fixtures = require('fixtures/articles');
  var articles = fixtures.articles;
  var ajaxResponse = {
    success: {
      status: 200,
      responseText: JSON.stringify(articles)
    },
    notFound: {
      status: 404,
      responseText: '{ error: "Not found" }'
    },
    serverError: {
      status: 500,
      responseText: '{ error: "Not found" }'
    }
  };

  describeComponent('data/article_index_data', function () {

    beforeEach(function () {
      jasmine.Ajax.useMock();
      setupComponent();
    });

    it('should use the correct URL', function () {
      this.component.trigger('dataLoadPages');
      var request = mostRecentAjaxRequest();

      expect(request.url).toEqual('/api/pages');
    });

    it('should use the correct Method', function () {
      this.component.trigger('dataLoadPages');
      var request = mostRecentAjaxRequest();

      expect(request.method).toEqual('GET');
    });

    it('should trigger "uiRenderPageIndex" on success', function () {
      var eventSpy = spyOnEvent(document, 'uiRenderPageIndex');
      this.component.trigger('dataLoadPages');

      var request = mostRecentAjaxRequest();
      request.response(ajaxResponse.success);

      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });

  });

});
