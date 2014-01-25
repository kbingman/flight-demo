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

      it('triggers the "navigateToURL" event on click', function() {
        var eventSpy = spyOnEvent(document, 'navigateToURL');
        this.component.$node.find('.nav').click();

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          path: '/images'
        });
      });

      it('triggers the "dataCreatePage" event on click', function() {
        var eventSpy = spyOnEvent(document, 'dataCreatePage');
        this.component.$node.find('.new').click();

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          title: 'untitled',
          content: '<p>Enter content here</p>'
        });
      });

    });

  });
});
