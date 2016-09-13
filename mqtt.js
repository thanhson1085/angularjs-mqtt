var kmqtt = angular.module('kmqtt', []);
kmqtt.provider('kmqtt', function() {
    return {
        '$get': function(){
            return {
                connect: function(url, options) {
                    mqtt.connect(url, options);
                }
            };
        }
    };
});
