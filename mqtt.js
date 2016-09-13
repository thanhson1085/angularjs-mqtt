var kmqtt = angular.module('kmqtt', []);
kmqtt.provider('kmqtt', function() {
    return {
        '$get': function(){
            return mqtt.connect(url, options);
        }
    };
});
