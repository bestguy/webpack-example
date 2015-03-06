ko = require "knockout"

class CoffeeScriptExample
  constructor: (message) ->
    @message = ko.observable(message)

module.exports = CoffeeScriptExample