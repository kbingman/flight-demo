'use strict';

describeComponent('data/article_data', function () {

  beforeEach(function () {
    setupComponent();
  });
  
  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });
  
  it('should do something', function () {
    expect(true).toBe(true);
  });

});