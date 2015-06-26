Session.setDefault('isBluetoothAvailable', false);

var adapterStateCallback = function(adapterState) {
    Session.set('isBluetoothAvailable', adapterState.available);
};

//global helper
Template.registerHelper('isBluetoothAvailable', function() {
    return Session.get('isBluetoothAvailable');
});

Meteor.startup(function () {
    chrome.bluetooth.getAdapterState(adapterStateCallback);

    chrome.bluetooth.onAdapterStateChanged.addListener(adapterStateCallback);
});