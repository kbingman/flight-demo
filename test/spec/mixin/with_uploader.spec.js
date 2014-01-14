'use strict';

describeMixin('mixin/with_uploader', function () {

  var hasData = false, image;

  it('is defined', function () {
    expect(this.component).toBeDefined();
  });

  describe('javaclassstreamreader', function() {

    // Initialize the component and attach it to the DOM
    beforeEach(function () {
      setupComponent();

      loadSimpleDataView(function(dataView) {
        image = dataView;
        hasData = true;
      });

      waitsFor(function() {
        return hasData;
      }, 'Never retrieved file', 5000);
    });

    it('loads the image', function() {
      runs(function() {
        expect(image).toBeDefined();
      });
    });

  });

});

function loadSimpleDataView(callback) {
  var dataView;
  var xhr = new XMLHttpRequest();
  var fileReader = new FileReader();
  xhr.open('GET', '/base/test/fixtures/Tieboardingcraft.jpg', true);
  xhr.responseType = 'blob';
  xhr.onload = function() {
    console.log(FileReader);
    fileReader.onload = function(e){
      // console.log('fileReader');
      var image = e.target.result;
      callback(image);
    };
    fileReader.readAsDataURL(this.response);
  };

  xhr.onerror = dump;
  xhr.send();
}
