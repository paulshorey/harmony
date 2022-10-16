#!/bin/bash

cwd=$( cd "$(dirname "$0")" ; pwd -P )
rootdir=$cwd/..
cd $rootdir

pm2 stop all
pm2 delete all

# pm2 start ecosystem.config.js
pm2 start --watch=api --node-args="--experimental-specifier-resolution=node" --restart-delay=3000 api/index.js

pm2 log

