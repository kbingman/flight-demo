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

      it('renders the article title', function() {
        var title = this.component.$node.find('[data-attr="title"]');

        expect(title.text().trim()).toEqual('The Title');
      });

      it('renders the article slug', function() {
        var slug = this.component.$node.find('[data-attr="slug"]');

        expect(slug.text().trim()).toEqual('title');
      });

      it('renders the article content', function() {
        var content = this.component.$node.find('[data-attr="content"]');

        expect(content.text().trim()).toEqual('text');
      });

    });

    describe('Events', function () {

      var eventSpy

      beforeEach(function () {
        var template = Templates['articles/show'];
        var html = template.render(article);
        eventSpy = spyOnEvent(document, 'dataUpdatePage');

        setupComponent();
        // Why does this component need this?

        this.component.$node.html(html);
      });

      it('triggers the "dataUpdatePage" event on title keyup', function() {
        var el = this.component.$node.find('[data-attr="title"]');
        // Changes the title
        el.text('New Title');
        el.trigger('keyup');

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          _id: '52a390c4ac727a0cfa000001',
          title: 'New Title'
        });
      });

      it('triggers the "dataUpdatePage" event on slug keyup', function() {
        var el = this.component.$node.find('[data-attr="slug"]');

        // Changes the title
        el.text('new-slug');
        el.trigger('keyup');

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          _id: '52a390c4ac727a0cfa000001',
          slug: 'new-slug'
        });
      });

    });

  });

});
