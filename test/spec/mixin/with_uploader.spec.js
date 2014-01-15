'use strict';

describeMixin('mixin/with_uploader', function () {

  var hasImage = false;
  var image;

  it('is defined', function () {
    expect(this.component).toBeDefined();
  });

  describe('image uploader', function() {

    // Initialize the component and attach it to the DOM
    beforeEach(function () {
      setupComponent();

      loadImage(function(requestedImage) {
        image = requestedImage;
        hasImage = true;
      });

      waitsFor(function() {
        return hasImage;
      }, 'Never retrieved file', 5000);
    });

    it('loads the image', function() {
      runs(function() {
        expect(image).toBeDefined();
      });
    });

  });

});

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
