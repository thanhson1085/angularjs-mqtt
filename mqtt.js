var kmqtt = angular.module('koor.mqtt', []);
kmqtt.provider('koor.mqtt', function() {
    return {
        '$get': function(){
            return mqtt.connect(url, options);
        }
    };
});
