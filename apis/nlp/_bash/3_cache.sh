#!/bin/bash

####
###
##
# const
cwd=$(dirname $(realpath $0))
rootdir=$cwd/..

# reset local storage
rm -rf $rootdir/tmp/localStorage-domainsAvailability
sleep 2
mkdir $rootdir/tmp/localStorage-domainsAvailability

# reset local storage
rm -rf $rootdir/tmp/localStorage-trustClientIPs
sleep 2
mkdir $rootdir/tmp/localStorage-trustClientIPs

# reset local storage
rm -rf $rootdir/tmp/localStorage-whois6
sleep 2
mkdir $rootdir/tmp/localStorage-whois6
