#!/bin/bash
#/etc/init.d/logdna-agent start

cwd=$(dirname $(realpath $0))
rootdir=$cwd/..

echo "$(date) ...... BEFORE SETUP ......" >> $rootdir/log/ECHO
bash $rootdir/_bash/1_setup.sh &&
echo "$(date) ...... BEFORE INSTALL ......" >> $rootdir/log/ECHO
bash $rootdir/_bash/2_install.sh &&
echo "$(date) ...... BEFORE CACHE ......" >> $rootdir/log/ECHO
bash $rootdir/_bash/3_cache.sh &&

echo "$(date) ...... BEFORE START PRODUCTION ......" >> $rootdir/log/ECHO
bash $rootdir/_bash/_start_pro.sh

