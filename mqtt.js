var mqtt = angular.module('angular-mqtt', []);
mqtt.provider('angular-mqtt', function() {
    return {
        '$get': function(){
            return mqtt.connect(url, options);
        };
    };
});
