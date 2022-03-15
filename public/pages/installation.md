# Installation Guide

## Prerequisites
This installation guide expects you to have the following tools installed:

* Node.js 16.14.0 or later. For more information on installing Node.js, please visit https://nodejs.org/en/.
* The Ember-CLI package using npm: ```npm install ember-cli```

Before installing the ember-solid-store add-on, you should first create a new Ember application or have an existing Ember application stored on your computer.
You can create a new Ember project using the command: ```ember new <application_name>```.

The following two steps cover the installation of the ember-solid-store add-on:

* ```ember install github:redpencilio/ember-solid-store```
* ```ember g ember-solid-store``` This command removes the ember-data package from your application, adds some necessary configuration files and implements a Solid authentication route.

After having installed the add-on, you can follow one of our tutorials or visit the API reference and build a new application.