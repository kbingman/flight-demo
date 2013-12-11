'use strict';

describeComponent('data/router', function () {

  beforeEach(function () {
    setupComponent();
  });

  describe('Listens to the URL', function () {

    it('should trigger dataLoadPages when navigating to the root URL', function () {
      var eventSpy = spyOnEvent(document, 'dataLoadPages');
      this.component.trigger('navigateToURL', {
        path: '/'
      });

      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });
    
    it('should trigger dataLoadSinglePage when navigating to an article', function () {
      var eventSpy = spyOnEvent(document, 'dataLoadSinglePage');
      this.component.trigger('navigateToURL', {
        path: '/articles/51f13ff7ac727a4dc300000e'
      });

      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });

  });

});