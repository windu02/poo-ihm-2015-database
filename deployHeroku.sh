#!/bin/bash

heroku login
heroku ps:scale web=0
commitMess=`date +"%D %T"`
git add .
git commit -m "v $commitMess"
heroku config:set NPM_CONFIG_PRODUCTION=false
git push heroku master
heroku ps:scale web=1