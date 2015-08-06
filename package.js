Package.describe({
    name: '255kb:cordova-bluetooth-state',
    version: '2.0.1',
    summary: 'Reactive bluetooth status for Meteor Cordova apps.',
    git: 'https://github.com/255kb/cordova-bluetooth-state',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use(['reactive-var', 'templating'], 'client');

    //currently a tarball until Meteor 1.2 with npm cordova repository support is released
    Cordova.depends({
        "cordova-plugin-bluetooth-status": "https://github.com/255kb/cordova-plugin-bluetooth-status/tarball/78c38d5ff8b4cad7758297f3b8724a31de4f211b"
    });

    api.addFiles(['client/bluetooth.js'], 'web.cordova');

    api.export('BluetoothStatus', 'web.cordova')
});