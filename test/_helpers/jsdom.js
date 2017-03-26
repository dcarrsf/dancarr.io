require('babel-register')();
// Low-level jsdom.jsdom
const jsdom = require('jsdom').jsdom;
// Create document and window
global.document = jsdom('');
global.window = document.defaultView;
// Populate Properties
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
