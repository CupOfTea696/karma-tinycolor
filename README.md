karma-tinycolor
=============

[TinyColor](https://github.com/bgrins/TinyColor) for [Karma](http://karma-runner.github.io)

Installation
------------

Install the plugin from npm:

```sh
$ npm install karma-tinycolor --save-dev
```
Or from Github:

```sh
$ npm install 'git+https://github.com/CupOfTea696/karma-tinycolor.git' --save-dev
```

Instructions on how to install karma can be found [here](http://karma-runner.github.io/0.13/intro/installation.html)

## Configuration

In your Karma configuration:

* add `require('karma-tinycolor')` to the plugins list, and
* add `tinycolor` to the `frameworks` key

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    frameworks: ['tinycolor', ... ],
    
        .
        .
        .
  });
};
```

Usage
-----

This karma plugin simply loads and installs the global `tinycolor` namespace object.

License
-------

The MIT License (MIT)
