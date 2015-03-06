var $ = require('jquery');
var ko = require('knockout');

require('knockout-punches');
ko.punches.enableAll();
ko.punches.attributeInterpolationMarkup.enable();

// ## Modules

// CommonJS
var CJSExample = require('./CJSExample.js');
var cjs = new CJSExample('CommonJS, like node, is cool');

// AMD
var AMDExample = require('./AMDExample.js');
var amd = new AMDExample('require.js sux');

// Coffee
var CoffeeScriptExample = require('./Example.coffee');
var coffee = new CoffeeScriptExample('CoffeeScript is kinda cool');

// ES6
var ES6Example = require('./example/Example.es6').default;
var es6 = new ES6Example();

// JSON
var json = require('./Example.json');


// ## Styles

// CSS
require('./Example.css');

// LESS
require('./Example.less');

// Templates

// Jade
var jade = require('./Example.jade');

// Markdown
var md = require('./Example.md');

// Fake model to bind the above models to the view:
var model = {
    cjs: cjs,
    amd: amd,
    coffee: coffee,
    es6: es6,
    json: json,
    jade: jade,
    md: md
}

$(function() {
    ko.applyBindings(model);
});