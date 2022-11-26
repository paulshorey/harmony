#!/bin/bash

cwd=$( cd "$(dirname "$0")" ; pwd -P )
rootdir=$cwd/..
cd $rootdir

pm2 stop all < "/dev/null"
pm2 delete all < "/dev/null"

pm2 start ts-node -f -- --transpile-only --esm --experimental-specifier-resolution=node -r tsconfig-paths/register $rootdir/api

