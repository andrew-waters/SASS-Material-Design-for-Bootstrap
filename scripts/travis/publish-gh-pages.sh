#!/bin/bash -e

if [ "$TRAVIS_PULL_REQUEST" == "false" ]; then

	echo -e "Starting to update gh-pages\n"

	jekyll build --source ./_docs --config ./_docs_config.prod.yml

	echo -e "Jekyll build successful\n"

#	copy pages to the home directory
	cp -R ./_site $HOME/pages

#	copy bootstrap fonts
	cp -R ./bower_components/bootstrap-sass-official/assets/fonts $HOME/pages/assets/fonts

#	copy material design fonts
	cp -R ./assets/fonts $HOME/pages/assets/fonts

#	go to home and setup git
	cd $HOME
	git config --global user.email "andrew@band-x-media.co.uk"
	git config --global user.name "Andrew Waters"

#	using token clone gh-pages branch
	curl -H 'Authorization: token $GITAUTH' https://github.com/band-x-media/SASS-Material-Design-for-Bootstrap.git
	git clone --quiet --branch=gh-pages https://andrew-waters:$GITAUTH@github.com/band-x-media/SASS-Material-Design-for-Bootstrap.git gh-pages > /dev/null

#	go into diractory and copy data we're interested in to that directory
	cd gh-pages
	git remote rm origin
	git remote add origin https://andrew-waters:$GITAUTH@github.com/band-x-media/SASS-Material-Design-for-Bootstrap.git

	cp -Rf $HOME/pages/* .

#	add, commit and push files
	git add -f .
	git commit -m "Travis build $TRAVIS_BUILD_NUMBER"
	git push -fq origin gh-pages > /dev/null

	echo -e "Changes published to gh-pages branch\n"

fi
