define(function (require) {
  'use strict';

  var fixtures = require('fixtures/articles');
  var articles = fixtures.articles;
  var Templates = require('templates');

  console.log(sinon.spy);

  describeComponent('component/article_index_ui', function () {

    describe('rendering', function() {

      beforeEach(function () {
        setupComponent();

        $(document).trigger('uiRenderPageIndex', articles);
      });

      it('should render a list of articles', function() {
        var articles = this.component.$node.find('li');
        expect(articles.length).to.equal(1);
      });

      it('should render a article title', function() {
        var title = this.component.$node.find('h1').first();
        expect(title.text().trim()).to.equal('The Title');
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

      // it('should trigger the "navigateToURL" event on click', function() {
      //   var eventSpy = spyOnEvent(document, 'navigateToURL');
      //   this.component.$node.find('.articleLink').click();

      //   expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
      //       path: '/articles/52a390c4ac727a0cfa000001'
      //   });
      // });

    });

  });

});
