# Meteor Cordova bluetooth state package

## What is it?

Cordova-bluetooth-state is a lightweight package allowing to check the bluetooth status (available or not) reactively in a Meteor application.

## Installation

Add the package in your Meteor application with this command:

```
meteor add 255kb:cordova-bluetooth-state
```

## Usage

You can either check the bluetooth status by using the Session variable `isBluetoothAvailable` or the global template `isBluetoothAvailable`: 

    Session.get('isBluetoothAvailable');

Or 
    
    {{#if isBluetoothAvailable}}
    
    {{/if}}
    
    {{#unless isBluetoothAvailable}}
    
    {{/unless}}
    
## Dependencies
- org.chromium.bluetooth@1.1.2

