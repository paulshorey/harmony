#!/bin/bash
#
##
### Debug PM2
echo "" > /etc/logdna.conf
echo "hostname = $(hostname)--PM2" >> /etc/logdna.conf &&
echo "app = PM2" >> /etc/logdna.conf &&
echo "logdir = /root/.pm2/logs" >> /etc/logdna.conf &&
echo "key = b41c17f49899e674ac66414d26a7b0af" >> /etc/logdna.conf &&
/etc/init.d/logdna-agent restart

####
##
# const
cwd=$(dirname $(realpath $0))
rootdir=$cwd/..
cd $rootdir

pm2 stop all
pm2 delete all

# in case server was not running
pm2 start -f --node-args="--experimental-specifier-resolution=node" --restart-delay=3000 api/index.js

