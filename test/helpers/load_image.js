define(function(require) {

    return loadImage;

    function loadImage(callback) {
      var dataView;
      var xhr = new XMLHttpRequest();
      var fileReader = new FileReader();
      xhr.open('GET', '/base/test/fixtures/Tieboardingcraft.jpg', true);
      xhr.responseType = 'blob';
      xhr.onload = function() {
        // console.log(fileReader);
        fileReader.onload = function(e){
          var image = e.target.result;
          callback(image);
        };
        fileReader.readAsDataURL(this.response);
      };

      xhr.onerror = dump;
      xhr.send();
    }

});
