Spike project for trying out [Zombie.js](http://zombie.labnotes.org/) with [Jasmine](http://pivotal.github.com/jasmine/)
===================================================

Finally I had a chance to try out this excellent stack!

## Setup

First of all, you will need [node](http://nodejs.org/) and [npm](https://github.com/isaacs/npm).

You will need a couple of node.js modules too:

    npm install zombie
    npm install html5
    npm install jasmine-node
    npm install express
    npm install jade
    npm install tav

## Specs

To run all specs with [watchr](https://github.com/mynyml/watchr) after each change to some production/test js file:

    watchr specs.watchr

To run the zombie acceptance specs

    ./run-acceptance-specs.sh

To run the unit specs:

Setup JSTD (once only)

* Start JSTD server (and leave it open): `./start-jstd-server.sh`
* Open `http://localhost:8088/` with browser and click "Capture This Browser" and leave the page open. With firefox you can debug while running the tests with firebug!

and then call

    ./run-unit-specs.sh

There's also a neat way to run all specs:

    ./run-all-specs.sh

jQuery.ajax is faked during the unit tests using [jasmine-fake-ajax](https://github.com/mileskin/jasmine-fake-ajax)

## Launching the application

If you are interested in manually fiddling with the application (not much to see though), you may start the server by calling

    cd ./application && node ./foo-twitter-client.js --port=8082

Scripts

    ./start-application.sh
    ./stop-application.sh

are using port 8003 and are ment to be used by the specs only. This enables keeping the application running in isolation from the specs.

## TODO

* Some more application features
* css using [Less.js](http://fadeyev.net/2010/06/19/lessjs-will-obsolete-css/) or [Stylus](http://tjholowaychuk.com/post/3167096936/stylus-0-4-0-released)

Hope you enjoy, don't forget to [follow me on twitter](http://twitter.com/mileskin)!

