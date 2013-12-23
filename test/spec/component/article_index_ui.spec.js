'use strict';

describeComponent('component/article_index_ui', function () {

    // Initialize the component and attach it to the DOM
    beforeEach(function () {
      var html = '<ul><li><h1><a href="test" class="articleLink">title</a></h1></ul></li>';
      setupComponent(html);
    });

    describe('the article index', function() {

        it('should render on "uiRenderPageIndex" event', function() {
            var eventSpy = spyOnEvent(document, 'uiRenderPageIndex');
            var articles = [{
                '_id':'52a390c4ac727a0cfa000001',
                'title':'Title',
                'slug':'title',
                'created_at':'2013-12-07T13:19:00-08:00',
                'updated_at':'2013-12-07T13:19:00-08:00',
                'content':'text'
            }]
            $(document).trigger('uiRenderPageIndex', articles);

            expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, articles);
        });

        it('should trigger the "navigateToURL" event when clicked', function() {
            var eventSpy = spyOnEvent(document, 'navigateToURL');
            this.component.$node.find('.articleLink').click();

            expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
                path: 'test'
            });
        });

    });

});
