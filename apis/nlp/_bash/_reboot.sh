#!/bin/bash
#/etc/init.d/logdna-agent start

cwd=$(dirname $(realpath $0))
rootdir=$cwd/..

# deploy code
bash $rootdir/_bash/_deploy.sh 