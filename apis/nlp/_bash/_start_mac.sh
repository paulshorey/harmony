#!/bin/bash

cwd=$( cd "$(dirname "$0")" ; pwd -P )
rootdir=$cwd/..
cd $rootdir

pm2 stop all
pm2 delete all

pm2 start --node-args="--experimental-specifier-resolution=node --inspect" --watch api/index.js

pm2 log 