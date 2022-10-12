#!/bin/bash
#
##
### On boot, logdna-agent will start with these variables, to debug the system startup errors:
echo "" > /etc/logdna.conf
echo "hostname = $(hostname)--SYSTEM" >> /etc/logdna.conf &&
echo "app = SYSTEM" >> /etc/logdna.conf &&
echo "logdir = /var/log" >> /etc/logdna.conf &&
echo "key = b41c17f49899e674ac66414d26a7b0af" >> /etc/logdna.conf &&
/etc/init.d/logdna-agent restart

####
###
##
# const
cwd=$(dirname $(realpath $0))
rootdir=$cwd/..

# ports
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 1080
ufw allow 80/tcp
iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 443 -j REDIRECT --to-port 1443
ufw allow 443/tcp

# authenticate GIT
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/newssh

# update modules (while in development)
#cd pauls-pure-functions ||
#git add .
#git reset HEAD --hard
#git pull
#cd @ps/cconsole ||
#git add .
#git reset HEAD --hard
#git pull
