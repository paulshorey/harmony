#!/usr/bin/env bash

# This is just an example placeholder script. Prevents pushing directly to main/master.
branch=$(git symbolic-ref --short HEAD)
if [ "$branch" = main ] || [ "$branch" = master ]; then
  cannot push to "$branch"
  exit 1
fi

# TODO: Add more functionality
