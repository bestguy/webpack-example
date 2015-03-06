var ko = require('knockout');

function CJSExample(message) {
    this.message = ko.observable(message);
}

module.exports = CJSExample;