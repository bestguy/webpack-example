define(['knockout'] , function (ko) {

    function AMDExample(message) {
        this.message = ko.observable(message);
    }

    return AMDExample;
});