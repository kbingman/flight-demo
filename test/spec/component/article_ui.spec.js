'use strict';

describeComponent('component/article_ui', function () {

  // Initialize the component and attach it to the DOM
  beforeEach(function () {
    setupComponent();
  });

  it('should be defined', function () {
    expect(this.component).toBeDefined();
  });
  
  it('should do something', function () {
    expect(this.component.$node.html()).toContain('Title: World');
  });

});
