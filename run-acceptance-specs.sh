#!/bin/sh

echo "Starting application..."
./start-application.sh
/usr/bin/env node ./run-acceptance-specs.js
echo "Stopping application..."
./stop-application.sh
echo "Done."