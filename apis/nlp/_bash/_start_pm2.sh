#!/bin/bash

cwd=$(dirname $(realpath $0))
rootdir=$cwd/..
cd $rootdir

pm2 stop all
pm2 delete all

pm2 start -f --node-args="--experimental-specifier-resolution=node" --restart-delay=3000 dist/api/index.js

