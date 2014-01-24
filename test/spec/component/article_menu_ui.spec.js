'use strict';

define(function(require) {

  var Templates = require('templates');

  describeComponent('component/article_menu_ui', function () {

    describe('events', function() {

      beforeEach(function () {
        var template = Templates['articles/menu'];
        var html = template.render();

        // Initialize the component and attach it to the DOM
        setupComponent(html);
      });

      it('should render the nav links', function() {
        var navLinks = this.component.$node.find('.nav');

        expect(navLinks.length).to.equal(2);
      });

      it('should render the new article links', function() {
        var newArticleLinks = this.component.$node.find('.new');

        expect(newArticleLinks.length).to.equal(1);
      });

      // it('should trigger the "navigateToURL" event on click', function() {
      //   var eventSpy = spyOnEvent(document, 'navigateToURL');
      //   this.component.$node.find('.nav').click();
//
      //   expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
      //     path: '/images'
      //   });
      // });
//
      // it('should trigger the "dataCreatePage" event on click', function() {
      //   var eventSpy = spyOnEvent(document, 'dataCreatePage');
      //   this.component.$node.find('.new').click();
//
      //   expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
      //     title: 'untitled',
      //     content: '<p>Enter content here</p>'
      //   });
      // });

    });

  });
});
