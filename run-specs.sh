#!/bin/sh

echo "Starting application..."
./start-application.sh
/usr/bin/env node spec/lib/jasmine-node/specs.js --specs-dir=$PWD/spec/js/ $@
echo "Stopping application..."
./stop-application.sh
