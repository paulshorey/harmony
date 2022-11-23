#!/bin/bash
#/etc/init.d/logdna-agent start
#
# This is run by /etc/crontab on reboot
#

cwd=$(dirname $(realpath $0))
rootdir=$cwd/..

# deploy code
bash $rootdir/_bash/_deploy.sh 