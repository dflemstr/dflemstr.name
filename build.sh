#!/bin/sh
set -e
cd "$(dirname "$(readlink -f "$0")")"
npm install
bower install
grunt
docker build -t dflemstr/dflemstr.name:latest .
docker push dflemstr/dflemstr.name
