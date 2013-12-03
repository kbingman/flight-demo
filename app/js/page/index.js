define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var articleComponent = require('component/article_ui');
  var articleData = require('data/article_data');
  var hogan = require('flight-hogan/lib/hogan');
  

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    hogan.attachTo(document);
    articleData.attachTo(document);
    articleComponent.attachTo('[data-container="article"]');
  }

});
