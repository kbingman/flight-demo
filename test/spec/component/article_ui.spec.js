'use strict';

describeComponent('component/article_ui', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    var html = '<ul><li><h1>click</h1></ul></li>';
    setupComponent(html);
    // prepareComponent(html);
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  describe('Listens to dataLoadPages', function () {
    
    it('and triggers dataItems with current item and the new one', function () {
      var eventSpy = spyOnEvent(document, 'dataLoadPages');
      this.component.trigger('dataLoadPages');


      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });
    
    describe("when the headline is clicked", function() {
      it("triggers 'uiShowArticle' event", function() {
        spyOnEvent(document, 'uiShowArticle');
        this.component.click();
        expect('uiButtonClicked').toHaveBeenTriggeredOn(document);
      });
    });

  });


});
