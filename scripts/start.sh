#!/bin/bash

# Recompile
npm run compile

# Run the integration
node ./dst/run.js
