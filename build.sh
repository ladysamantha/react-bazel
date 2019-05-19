#!/usr/bin/env bash

set -e

echo >/dev/stderr "make sure the :bundle target is still available"

npx bazel build :bundle