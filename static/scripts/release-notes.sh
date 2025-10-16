#!/bin/bash

latest_tag=$(git rev-list -n 1 --first-parent --tags="*-$1" --no-walk)

git log --merges --pretty=format:"%h - %s" --date=short "$latest_tag".. | awk '{print "- " $0}'
