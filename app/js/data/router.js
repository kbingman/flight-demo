define(function(defineComponent, router) {

  var defineComponent = require('flight/lib/component');
  var withRouter = require('flight-router/lib/with_route');

  return defineComponent(router, withRouter);

  function router() {

    // Triggers the first URL of our single page app on load
    this.initialRoute = function(path) {
      this.navigate(document.location.pathname, {
        forced: true
      });
    }

    this.listenToURL = function(e, data) {
      // console.log(data.path)
      this.navigate(data.path)
    }

    this.index = function() {
      this.trigger('dataLoadPages');
    };

    this.showArticle = function(data) {
      this.trigger('dataLoadSinglePage', {
        id: data.id
      });
    };

    this.after('initialize', function() {
      this.defineRoute({
          '/': 'index',
          '/articles/:id/': 'showArticle'
      });
      this.initialRoute();
      this.on('navigateToURL', this.listenToURL)
    });

  }
});