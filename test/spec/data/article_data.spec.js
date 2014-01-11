'use strict';
define(function(require) {

  var fixtures = require('fixtures/articles');
  var article = fixtures.article;
  var ajaxResponse = {
    success: {
      status: 200,
      responseText: JSON.stringify(article)
    },
    notFound: {
      status: 404,
      responseText: '{ error: "Not found" }'
    },
    serverError: {
      status: 500,
      responseText: '{ error: "Not found" }'
    }
  }

  describeComponent('data/article_data', function () {

    beforeEach(function () {
      jasmine.Ajax.useMock();
      setupComponent();
    });

    it('should use the correct URL', function () {
      this.component.trigger('dataLoadSinglePage', {
        id: '52a390c4ac727a0cfa000001'
      });
      var request = mostRecentAjaxRequest();
      expect(request.url).toEqual('/api/pages/52a390c4ac727a0cfa000001');
    });

    it('should use the correct method', function () {
      this.component.trigger('dataLoadPages');
      var request = mostRecentAjaxRequest();

      expect(request.method).toEqual('GET');
    });

    it('should trigger "uiRenderPage" on success', function () {
      var eventSpy = spyOnEvent(document, 'uiRenderPage');
      this.component.trigger('dataLoadSinglePage', {
        id: article.id
      });

      var request = mostRecentAjaxRequest();
      request.response(ajaxResponse.success);

      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });

    it('should trigger "ajaxError" on 404', function () {
      var eventSpy = spyOnEvent(document, 'ajaxError');
      this.component.trigger('dataLoadSinglePage', {
        id: article.id
      });

      var request = mostRecentAjaxRequest();
      request.response(ajaxResponse.notFound);

      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });

  });
});
