'use strict';

define(function(require) {

  var Templates = require('templates');
  var fixtures = require('fixtures/articles');
  var article = fixtures.article;

  describeComponent('component/article_ui', function () {

    describe('rendering', function() {

      beforeEach(function () {
        setupComponent();

        $(document).trigger('uiRenderPage', article);
      });

      it('should render the article title', function() {
        var title = this.component.$node.find('[data-attr="title"]');

        expect(title.text().trim()).toEqual('The Title');
      });

      it('should render the article slug', function() {
        var slug = this.component.$node.find('[data-attr="slug"]');

        expect(slug.text().trim()).toEqual('title');
      });

      // it('should render the article slug', function() {
      //   var content = this.component.$node.find('p').text().trim();

      //   expect(content).toEqual('content');
      // });

    });

    describe('Events', function () {

      beforeEach(function () {
        var template = Templates['articles/show.mustache'];
        var html = template.render(article);

        setupComponent();
        // Why does this component need this?
        this.component.$node.html(html);
      });

      it('should trigger the "dataUpdatePage" event on keyup', function() {
        var eventSpy = spyOnEvent(document, 'dataUpdatePage');
        var titleEl = this.component.$node.find('[data-attr="title"]');
        // Changes the title
        titleEl.text('New Title');
        titleEl.trigger('keyup');

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          _id: '52a390c4ac727a0cfa000001',
          title: 'New Title'
        });
      });

    });

  });

});
