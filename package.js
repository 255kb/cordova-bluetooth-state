Package.describe({
    name: '255kb:cordova-bluetooth-state',
    version: '2.1.0',
    summary: 'Reactive bluetooth status for Meteor Cordova apps.',
    git: 'https://github.com/255kb/cordova-bluetooth-state',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');

    api.use(['reactive-var', 'templating'], 'client');

    Cordova.depends({
        "cordova-plugin-bluetooth-status": "1.0.3"
    });

    api.addFiles(['client/bluetooth.js'], 'web.cordova');

    api.export('BluetoothStatus', 'web.cordova')
});