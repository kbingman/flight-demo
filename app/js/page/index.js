define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var articleComponent = require('component/article_ui');
  var articleData = require('data/article_data');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    articleData.attachTo(document);
    articleComponent.attachTo('[data-container="article"]');
  }

});
