'use strict';

define(function(require) {
  var fixtures = {};

  fixtures.article = {
    '_id': '52a390c4ac727a0cfa000001',
    'title': 'The Title',
    'slug': 'title',
    'created_at': '2013-12-07T13:19:00-08:00',
    'updated_at': '2013-12-07T13:19:00-08:00',
    'content': 'text'
  }

  fixtures.articles = [fixtures.article];

  return fixtures;

});
