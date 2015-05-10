(function (document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');
  app.appName = 'Polymer Core-List Demo';
  app.data = generateData();

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('template-bound', function() {
    console.log('Our app is ready to rock!');
  });
  
  app.resp = {};

  // Test data
  function generateData() {
    var data = [];
    for (var i = 0; i < 5; i++) {
      data.push({
        name: faker.name.findName(),
        avatar: faker.internet.avatar()
      });
    }
    return data;
  }

// wrap document so it plays nice with other libraries
// http://www.polymer-project.org/platform/shadow-dom.html#wrappers
})(wrap(document));
