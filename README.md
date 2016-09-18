A simple MQTT Provider for Angular 1.X

### Installation
```
bower install --save angularjs-mqtt
```

### Example
```
.controller('MqttCtrl', function($scope, kmqtt) {
    var client = kmqtt.connect('ws://mqtt_url');

    client.on("message", function(topic, payload) {
        console.log(topic, payload.toString());
    });

    client.subscribe('mqtt/demo');
    client.publish('mqtt/demo, 'a test message');
})
```
