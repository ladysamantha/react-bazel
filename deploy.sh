#!/usr/bin/env bash

set -e

mkdir -p prod

cp dist/bin/bundle.min.js prod

# change permissions just so I can overwrite the file later
chmod 644 prod/bundle.min.js

npx hs prod