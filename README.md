Spike project for trying out Zombie.js with Jasmine
===================================================

Finally I had a chance to try out this excellent stack!

## Setup

First of all, you will need [node](http://nodejs.org/) and [npm](https://github.com/isaacs/npm).

You will need a couple of `node.js` modules too:

    npm install zombie@0.8.6 # currently fails with newer versions
    npm install html5
    npm install jasmine-node
    npm install express
    npm install jade

## Specs

To run the specs (every 3 seconds)

    watch -n 3 ./run-specs.sh

## TODO

* Unit tests for unhappy paths and corner cases using jasmine-node and https://github.com/mileskin/jasmine-fake-ajax
* Some more application features
* css using LESS (http://fadeyev.net/2010/06/19/lessjs-will-obsolete-css/)

Hope you enjoy, don't forget to follow [me](http://twitter.com/mileskin) on twitter!

