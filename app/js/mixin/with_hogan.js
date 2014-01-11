define(function (require) {

  'use strict';

  var Templates = require('templates');

  return withHogan;

  function withHogan() {
    // Render a template with Hogan. Must provide request.template
    // @param request.template {String} Hogan template name
    // @param request.renderParams {Options} Optional Data
    //
    this.renderTemplate = function (request) {
      var template = Templates[request.template];
      var html = template.render(request.renderParams, request.partials);

      return html;
    };
  }

});
