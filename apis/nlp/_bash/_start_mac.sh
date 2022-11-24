#!/bin/bash

cwd=$( cd "$(dirname "$0")" ; pwd -P )  
rootdir=$cwd/..
cd $rootdir

node --experimental-specifier-resolution=node dist/api/index.js