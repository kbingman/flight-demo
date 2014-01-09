'use strict';

define(function (require) {

    var Templates = require('templates');

    describeComponent('component/article_index_ui', function () {

    // Initialize the component and attach it to the DOM
    beforeEach(function () {
      var template = Templates['articles/index.mustache'];
      var articles = [{
        '_id':'52a390c4ac727a0cfa000001',
        'title':'Title',
        'slug':'title',
        'created_at':'2013-12-07T13:19:00-08:00',
        'updated_at':'2013-12-07T13:19:00-08:00',
        'content':'text'
      }];
      var html = template.render( {
        articles: articles
      });

      setupComponent(html);
    });

    describe('the article index', function() {

        // it('should render on "uiRenderPageIndex" event', function() {
        //     var eventSpy = spyOnEvent(document, 'uiRenderPageIndex');
        //     var articles = this.articleData;
//
        //     $(document).trigger('uiRenderPageIndex', articles);
//
        //     expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, articles);
        // });

        it('should trigger the "navigateToURL" event on clicked', function() {
          var eventSpy = spyOnEvent(document, 'navigateToURL');
          this.component.$node.find('.articleLink').click();

          expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
              path: '/articles/52a390c4ac727a0cfa000001'
          });

        });

    });

});
});


