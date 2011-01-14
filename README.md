Spike project for trying out [Zombie.js](http://zombie.labnotes.org/) with [Jasmine](http://pivotal.github.com/jasmine/)
===================================================

Finally I had a chance to try out this excellent stack!

## Setup

First of all, you will need [node](http://nodejs.org/) and [npm](https://github.com/isaacs/npm).

You will need a couple of node.js modules too:

    npm install zombie@0.8.6 # currently fails with newer versions
    npm install html5
    npm install jasmine-node
    npm install express
    npm install jade
    npm install tav

## Specs

To run the specs (every 3 seconds)

    watch -n 3 ./run-specs.sh

## Launching the application

If you are interested in manually fiddling with the application (not much to see though), you may start the server by calling

    node ./application/foo-twitter-client.js

which uses port 8002 by default (may be overriden by using port={port} argument). Scripts

    ./start-application.sh
    ./stop-application.sh

are using port 8003 and are ment to be used by the specs only. This enables keeping the application running in isolation from the specs.

## TODO

* Unit tests for unhappy paths and corner cases using [jasmine-node](https://github.com/mhevery/jasmine-node) and [jasmine-fake-ajax](https://github.com/mileskin/jasmine-fake-ajax)
* Some more application features
* css using [Less.js](http://fadeyev.net/2010/06/19/lessjs-will-obsolete-css/)

Hope you enjoy, don't forget to [follow me on twitter](http://twitter.com/mileskin)!

