#!/bin/bash

####
###
##
# const
cwd=$(dirname $(realpath $0))
rootdir=$cwd/..

# pull main project
cd $rootdir
rm package-lock.json
git add .
git reset HEAD --hard
git pull

# install main project
# PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true npm install --production --prune
# "puppeteer-core": "^10.4.0",
npm install --production --prune

