'use strict';

describeMixin('mixin/with_uploader', function () {

  var xhr = new XMLHttpRequest();
  var fileReader = new FileReader();

  xhr.open('GET', '/base/test/fixtures/Tieboardingcraft.jpg', true);
  xhr.responseType = 'blob';
  xhr.addEventListener('load', onLoadHandler, false);
  xhr.onerror = dump;
  xhr.send();

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });

  function onLoadHandler() {
    if (xhr.status !== 200) {
      return
    }

    // ileReader.onload = function (evt) {
    //  // Read out file contents as a Data URL
    //  var result = evt.target.result;
    //  // Set image src to Data URL
    //  // console.log(result)
    //    it('should be defined', function () {
    //      expect(result).toBeDefined();
    //    });
    // ;
    // Load blob as Data URL
    fileReader.readAsDataURL(xhr.response);

  }

});
