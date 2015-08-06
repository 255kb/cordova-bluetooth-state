BluetoothStatus = {
    isEnabled: new ReactiveVar(false)
};

//global helper
Template.registerHelper('BluetoothStatus.isEnabled', function() {
    return BluetoothStatus.isEnabled.get();
});

Meteor.startup(function () {
    //init cordova bluetooth plugin
    cordova.plugins.BluetoothStatus.initPlugin();

    //populate initial adapter state
    BluetoothStatus.isEnabled.set(cordova.plugins.BluetoothStatus.BTenabled);

    //listen to plugin events
    window.addEventListener('BluetoothStatus.enabled', function () {
        BluetoothStatus.isEnabled.set(true);
    });

    window.addEventListener('BluetoothStatus.disabled', function () {
        BluetoothStatus.isEnabled.set(false);
    });
});




