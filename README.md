# Meteor Cordova bluetooth state package

## What is it?

Cordova-bluetooth-state is a lightweight package allowing to check the Bluetooth status reactively in a Meteor application.

It is using the following Cordova plugin: [cordova-plugin-bluetooth-status](https://www.npmjs.com/package/cordova-plugin-bluetooth-status).

## Installation

Add the package in your Meteor application with this command:

```
meteor add 255kb:cordova-bluetooth-state
```

## Usage

The package exports the `BluetoothStatus` object in the global scope.

You can either check the Bluetooth status by using the object member `isEnabled` (a ReactiveVar) or the global template `BluetoothStatus.isEnabled`: 

    BluetoothStatus.isEnabled.get()

Or 
    
    {{#if BluetoothStatus.isEnabled}}
    
    {{/if}}
    
## Dependencies

- [cordova-plugin-bluetooth-status@1.0.0](https://www.npmjs.com/package/cordova-plugin-bluetooth-status)

  
## Changelog

### v2.0.0:
- changing Cordova plugin dependency from org.chromium.bluetooth to cordova-plugin-bluetooth-status
- rewrite of the package to use new plugin
- use of ReactiveVar instead of Session