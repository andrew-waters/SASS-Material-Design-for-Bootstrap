#!/bin/bash -e

if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

  echo -e "Starting to update gh-pages\n"

  #go to home and setup git
  cd $HOME
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis"

  #using token clone gh-pages branch
  git pull --quiet --branch=gh-pages https://$GITAUTH@github.com/band-x-media/SASS-Material-Design-for-Bootstrap.git gh-pages > /dev/null

  #go into diractory and copy data we're interested in to that directory
  cd gh-pages
  cp -Rf $HOME/demo/* .

  #add, commit and push files
  git add -f .
  git commit -m "Travis build $TRAVIS_BUILD_NUMBER pushed to gh-pages"
  git push -fq origin gh-pages > /dev/null

  echo -e "Updated gh-pages\n"

fi