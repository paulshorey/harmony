#!/usr/bin/env bash

### To learn:
# args=("$@") # $@ = all arguments
# $# = number of arguments

function grf() {
  #  touch "$1";
  filename=$(basename "$1")
  fname="${filename%.*}"
  ext="${filename##*.}"
  # file contents
  value=$(cat "./plop-templates/styled.hbs") 2>/dev/null
  if [ "$value" = "" ]; then
    value=$(cat "./plop-templates/default.hbs")
  fi
  text=$(echo $value | sed s/\{\{pascalCase\ name\}\}/$fname/g)
  # write file
  if [ "$ext" = "js" ] || [ "$ext" = "ts" ]; then
    echo $text >$1
  else
    mkdir $1
    echo $text >$1/index.js
  fi
}

#############################################################
# NPM / YARN
#############################################################
function npm_b() {
  yarn run build
}
function npm_r() {
  yarn remove "$@"
}
function npm_i() {
  if [ $@ ]; then
    echo "yarn add $@"
    yarn add "$#"
  else
    echo "yarn install"
    yarn install
  fi
}
function npm_rebuild() {
  rm -rf .next 2>/dev/null
  npm run build
}
function npm_x() {
  rm -rf .next 2>/dev/null
  rm -rf node_modules 2>/dev/null
  rm package-lock.json 2>/dev/null
  rm yarn.lock 2>/dev/null
  npm install
}

#############################################################
# GIT
#############################################################

# NEW BRANCH
function ynew() {
  git checkout -b "$1"
}

# TEST BRANCH
function ytest() {
  git checkout "$1"
}

# DEPLOY BRANCH TO UAT
function yuat() {
  git checkout "$1"
  git push origin "$1"
}

# RESET TO HEAD
function yx() {
  # reset
  echo resetting to HEAD
  git fetch --all
  git add .
  # git reset HEAD -\-hard # revert to remote
  branch=$(git symbolic-ref --short HEAD);
  git reset --hard origin/$branch
  git pull
  # log
  echo "\n\n"
  echo "STATUS:"
  git status
}

# UNDO LAST COMMIT - ON LOCAL ONLY
function yz() {
  git reset HEAD~1 # undo to previous LOCAL commit (which has not been pushed)
}
# UNDO LAST COMMIT - ON REMOTE ALSO
function yzz() {
  echo resetting to previous commit
  git add .
  git reset -\-hard HEAD~1 # undo to previous REMOTE commit
  echo '\n\n You must still run "git push force" to save this operation \n'
}

# DELETE LOCAL
function yd() {
  # delete
  echo DELETING LOCAL $1
  git branch -D $1
  # log
  echo "\n\n"
  echo "STATUS:"
  git status
}

# DELETE LOCAL AND REMOTE
function ydd() {
  echo DELETING REMOTE $1
  echo "\n\n"
  # delete
  # if [ "$1" = "master" ]; then
  #   echo cannot delete master
  # elif [ "$1" = "main" ]; then
  #   echo CANNOT DELETE MAIN
  # elif [ "$1" = "staging" ]; then
  #   echo CANNOT DELETE MAIN
  # elif [ "$1" = "dev" ]; then
  #   echo CANNOT DELETE DEV
  # else
    git branch -D $1;
    git push origin :$1
  # fi
}

# UPDATE
function ya() {
  echo PULLING $1
  echo "\n"
  # update
  git fetch
  if [ $1 ]; then
    git checkout $1
    git pull
  else
    git pull
  fi
  # log
  echo "\n\n"
  echo "STATUS:"
  git status
}

# UPDATE (WITH GIT STASH / POP) - USE WHEN COLLABORATION
function yaa() {
  echo STASHING AND PULLING $1
  echo "\n"
  # update
  git stash
  git pull
  git stash pop
  # log
  echo "\n\n"
  echo "STATUS:"
  git status
}

# FIX MARKDOWN for GitHub flavor
function ymd() {
  echo gitmd disabled
  # 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' *.md;
  # 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' */*.md;
  # 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' */*/*.md;
  # 	perl -pi -e 's/[\s]*?\n/\ \ \n/g' */*/*/*.md;
}

# SAVE (BUT FIRST RUN DOCS)
function yds() {
  # First, go through and fix markdown files to be GitHub compatible
  gitmd

  # convert docs to html
  npm run docs

  # save
  ys $1
}

# COMMIT
function gcom() {
  # First, go through and fix markdown files to be GitHub compatible
  gitmd

  # branch=$(git symbolic-ref --short HEAD);
  # if [ $branch = dev ]
  # then
  # 	echo cannot merge $branch;
  # elif [ $1 = staging ] || [ $1 = master ]
  # then
  # 	echo cannot merge to $1;
  # else
  echo COMMITTING $1
  echo "\n\n"
  # pull
  git pull
  # git stash;
  # git pull;
  # git stash pop;
  # save
  git add .
  git commit -m $1
  # push
  #		echo "\n\n";
  #		echo PUSHING TO $branch;
  #		git push;
  # log
  echo "\n\n"
  echo "STATUS:"
  git status
  # fi;
}

function mx() {
  echo "ABORTING MERGE"
  echo "\n\n"
  git merge --abort 2>/dev/null
}

# SAVE
function ys() {
  # First, go through and fix markdown files to be GitHub compatible
  gitmd

  branch=$(git symbolic-ref --short HEAD)
  # if [ $branch = dev ]
  # then
  # 	echo cannot merge $branch;
  # elif [ $1 = staging ] || [ $1 = master ] || [ $1 = main ]
  # then
  # 	echo cannot merge to $1;
  # else
  echo COMMITTING $1
  echo "\n\n"
  # pull
  git add .
  git pull
  # git stash;
  # git pull;
  # git stash pop;
  # save
  git add .
  git commit -m $1
  # push
  echo "\n\n"
  echo PUSHING TO $branch
  git push
  # log
  echo "\n\n"
  echo "STATUS:"
  git status
  # fi;
}

# MERGE
function ym() {
  branch=$(git symbolic-ref --short HEAD)
  echo "MERGING $branch TO $1"
  echo "\n\n"

  # if [ $branch = dev ]
  # then
  # 	echo cannot merge $branch;
  # elif [ $1 = staging ] || [ $1 = master ] || [ $1 = main ]
  # then
  # 	echo cannot merge to $1;
  # else
  if [ $1 ]; then

    git fetch
    git checkout $1
    git pull

    if [ $2 ]; then
      2="merging $branch - $2"
    else
      2="merging $branch"
    fi

    echo $2
    git merge $branch -m $2
    git push

    # log
    echo "\n\n"
    echo "STATUS:"
    git status
  fi
  # fi;
}

# RENAME LOCAL AND REMOTE BRANCH
function ymv() {

  if [ $1 ]; then
    branch=$(git symbolic-ref --short HEAD)
    echo RENAMING $branch TO $1
    echo "\n\n"

    git branch -m $1
    git push origin -u $1
    git push origin --delete $branch

    echo DELETING LOCAL $1
    git checkout $1

    echo "\n\n"
    echo "STATUS:"
    git status

  else
    echo CAN NOT RENAME - missing argument "new branch name"
  fi
}

#############################################################
# DOCKER
#############################################################
function docker_killall() {
  docker stop $(docker ps -a -q)
  docker rm $(docker ps -a -q)
}
function docker_list() {
  docker container ls
}
function docker_cleanup() {
  docker rmi $(docker images -f "dangling=true" -q)
}
function docker_run_perfecta() {
  docker run \
    --name=perfecta \
    --rm \
    -v /ai/perfecta-web-ide/data:/home/perfecta/perfecta-web-ide/data \
    -p 8000:80 \
    -d \
    docker-registry.beyond.ai/pwi
}
