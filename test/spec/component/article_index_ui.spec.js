'use strict';

describeComponent('component/article_index_ui', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    var html = '<ul><li><h1><a href="test" class="articleLink">click</a></h1></ul></li>';
    setupComponent(html);
  });

    describe("when the headline is clicked", function() {

      it("triggers 'navigateToURL' event", function() {
        var eventSpy = spyOnEvent(document, 'navigateToURL');
        this.component.$node.find('a').click();

        expect(eventSpy).toHaveBeenTriggeredOn(document);
      });

    });

});
