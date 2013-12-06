define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */
  var router = require('data/router');
  var articleUI = require('component/article_ui');
  var articleIndexUI = require('component/article_index_ui');
  var newArticleComponent = require('component/new_article_ui');
  var articleIndexData = require('data/article_index_data');
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
    articleIndexData.attachTo(document);
    newArticleComponent.attachTo(document);
    articleIndexUI.attachTo('[data-container="article"]');
    articleUI.attachTo('[data-container="article"]');
    
    router.attachTo(document);
  }

});
