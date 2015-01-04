#!/bin/sh
set -e
cd "$(dirname "$(readlink -f "$0")")"
grunt build
docker build -t dflemstr/dflemstr.name:latest .
docker push dflemstr/dflemstr.name
