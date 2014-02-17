'use strict';

define(function(require) {
  var fixtures = {};

  fixtures.image = {
    '_id': '52a390c4ac727a0cfa000001',
    'title': 'The Title',
    'slug': 'title',
    'created_at': '2013-12-07T13:19:00-08:00',
    'updated_at': '2013-12-07T13:19:00-08:00',
    'path': '/path/to/image.png'
  }

  fixtures.images = [fixtures.images];
  fixtures.image = fixtures.image;

  return fixtures;

});
