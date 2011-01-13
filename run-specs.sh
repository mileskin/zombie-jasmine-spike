#!/bin/sh

echo "Starting application..."
./start-application.sh
/usr/bin/env node ./run-specs.js
echo "Stopping application..."
./stop-application.sh
