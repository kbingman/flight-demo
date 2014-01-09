'use strict';
define(function (require) {

  var Templates = require('templates');

  describeComponent('component/article_ui', function () {

    // Initialize the component and attach it to the DOM
    beforeEach(function () {
      var template = Templates['articles/show.mustache'];
      var article = {
        '_id':'52a390c4ac727a0cfa000001',
        'title':'Title',
        'slug':'title',
        'created_at':'2013-12-07T13:19:00-08:00',
        'updated_at':'2013-12-07T13:19:00-08:00',
        'content':'text'
      }
      var html = template.render({
        article: article
      });

      setupComponent(html);
    });

    describe('Listens to dataLoadPages', function () {

      it('should trigger dataItems with current and new item', function () {
        var eventSpy = spyOnEvent(document, 'dataLoadPages');
        this.component.trigger('dataLoadPages');

        expect(eventSpy).toHaveBeenTriggeredOn(document);
      });

      it('should trigger the "dataUpdatePage" event on keyup', function() {
          var eventSpy = spyOnEvent(document, 'dataUpdatePage');
          this.component.$node.find('h1').click();
          expect(eventSpy).toHaveBeenTriggeredOn(document);
      });

    });

    // describe("when the headline is clicked", function() {
    //   it("triggers 'uiShowArticle' event", function() {
    //     spyOnEvent(document, 'uiShowArticle');
    //     this.component.click();
    //     expect('uiButtonClicked').toHaveBeenTriggeredOn(document);
    //   });
    // });


  });

});
