Package.describe({
    name: '255kb:cordova-bluetooth-state',
    version: '1.0.1',
    summary: 'Reactive bluetooth status for Meteor Cordova apps.',
    git: 'https://github.com/255kb/cordova-bluetooth-state',
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.0');

    api.use(['session', 'templating'], 'client');

    Cordova.depends({
        "org.chromium.bluetooth": "1.1.2"
    });

    api.addFiles(['client/bluetooth.js'], 'web.cordova');
});