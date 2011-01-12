#!/bin/sh

lsof -i tcp:8003 | awk '{print $2}' | tail -1 | xargs -I {} kill {}
