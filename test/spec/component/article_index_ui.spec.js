'use strict';

define(function(require) {

  var Templates = require('templates');
  var fixtures = require('fixtures/articles');
  var articles = fixtures.articles;

  describeComponent('component/article_index_ui', function () {

    describe('rendering', function() {

      beforeEach(function () {
        setupComponent();

        $(document).trigger('uiRenderPageIndex', articles);
      });

      it('renders a list of articles', function() {
        var articles = this.component.$node.find('li');
        expect(articles.length).toEqual(1);
      });

      it('renders a article title', function() {
        var title = this.component.$node.find('h1').first();
        expect(title.text().trim()).toEqual('The Title');
      });

    });

    describe('events', function() {

      beforeEach(function () {
        var template = Templates['articles/index'];
        var html = template.render({
          articles: articles
        });

        // Initialize the component and attach it to the DOM
        setupComponent(html);
      });

      it('triggers the "navigateToURL" event on click', function() {
        var eventSpy = spyOnEvent(document, 'navigateToURL');
        this.component.$node.find('.articleLink').click();

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
            path: '/articles/52a390c4ac727a0cfa000001'
        });
      });

    });

  });
});
