'use strict';

describeComponent('data/router', function () {

  beforeEach(function () {
    setupComponent();
  });

  describe('Listens to the URL', function () {

    it('should trigger "dataLoadPages" event', function () {
      var eventSpy = spyOnEvent(document, 'dataLoadPages');
      this.component.trigger('navigateToURL', {
        path: '/'
      });

      expect(eventSpy).toHaveBeenTriggeredOn(document);
    });

    it('should trigger "dataLoadSinglePage" event', function () {
      var eventSpy = spyOnEvent(document, 'dataLoadSinglePage');
      this.component.trigger('navigateToURL', {
        path: '/articles/51f13ff7ac727a4dc300000e'
      });

      expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
        id: '51f13ff7ac727a4dc300000e'
      });
    });

  });

});
