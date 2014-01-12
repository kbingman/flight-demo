'use strict';

describeComponent('data/router', function () {

  beforeEach(function () {
    setupComponent();
  });

  describe('Router', function () {

    describe('root page', function() {
      var eventSpy;
      var path = '/';

      beforeEach(function () {
        eventSpy = spyOnEvent(document, 'dataLoadPages');
        this.component.trigger('navigateToURL', {
          path: path
        });
      });

      it('should trigger "dataLoadPages" event', function () {
        expect(eventSpy).toHaveBeenTriggeredOn(document);
      });

      it('should update the URL', function () {
        expect(window.location.pathname).toEqual(path);
      });
    });

    describe('article page', function() {
      var eventSpy;
      var path = '/articles/51f13ff7ac727a4dc300000e';

      beforeEach(function () {
        eventSpy = spyOnEvent(document, 'dataLoadSinglePage');
        this.component.trigger('navigateToURL', {
          path: path
        });
      });

      it('should trigger "dataLoadSinglePage" event', function () {
        expect(eventSpy).toHaveBeenTriggeredOnAndWith(document, {
          id: '51f13ff7ac727a4dc300000e'
        });
      });

      it('should update the URL', function () {
        expect(window.location.pathname).toEqual(path);
      });
    });

  });

});
