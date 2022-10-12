#!/bin/bash

cwd=$( cd "$(dirname "$0")" ; pwd -P )
rootdir=$cwd/..
cd $rootdir

pm2 stop all
pm2 delete all

npx nodemon --exec 'ts-node --esm --experimental-specifier-resolution=node api' -e ts,js,json
