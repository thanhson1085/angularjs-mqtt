var kmqtt = angular.module('kmqtt', []);
kmqtt.provider('kmqtt', function() {
    return {
        '$get': function(){
            return {
                connect: function(url, options) {
                    return mqtt.connect(url, options);
                }
            };
        }
    };
});
