define(function (require) {

  'use strict';

  var Templates = require('templates');

  return withUploadEvents;

  function withUploadEvents() {

    this.showProgress = function(e, data) {
      console.log(data);
    };

    this.showUpload = function(e, data) {
      var image = this.image;
      var imageData = JSON.parse(data.response);
      var temp = new Image();
      temp.src = imageData.path;

      temp.onload = function() {
        image.src = imageData.path;
      };
    };

    this.addImage = function(e, data){
      if (!FileReader){
        return;
      }

      var reader = new FileReader();
      var image = this.attr.image = new Image();

      this.$node.append(image);

      reader.readAsDataURL(data.file);
      reader.onload = function(e){
        image.src = e.target.result;
      };
    };

  }

});
