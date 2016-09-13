var mqtt = angular.module('angularjs-mqtt', []);
mqtt.provider('angularjs-mqtt', function() {
    return {
        '$get': function(){
            return mqtt.connect(url, options);
        };
    };
});
