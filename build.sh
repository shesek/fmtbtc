#!/bin/bash

babel fmtbtc.js > dist/fmtbtc.js
browserify -s fmtbtc fmtbtc.js | tee dist/fmtbtc.bundle.js | uglifyjs -cm > dist/fmtbtc.bundle.min.js
