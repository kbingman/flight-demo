'use strict';

define(function(require) {

  describeComponent('component/article_menu_ui', function () {

    describe('events', function() {

      beforeEach(function () {
        setupComponent('<header class="v-main-header" data-container="menu"><a href="#" class="new">New</a><a href="/images" class="nav">Images</a></header>');
      });

      it('should trigger the "navigateToURL" event on click', function() {
        var eventSpy = spyOnEvent(document, 'navigateToURL');
        this.component.$node.find('.nav').click();

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          path: '/images'
        });
      });

      it('should trigger the "dataCreatePage" event on click', function() {
        var eventSpy = spyOnEvent(document, 'dataCreatePage');
        this.component.$node.find('.new').click();

        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          title: 'untitled'
        });
      });

    });

  });
});
