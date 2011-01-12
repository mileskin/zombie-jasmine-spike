#!/bin/sh

cd application
node foo-twitter-client.js port=8003 $@ &
