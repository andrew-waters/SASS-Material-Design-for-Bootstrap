# SASS Material Design for Bootstrap

[![Build Status](https://travis-ci.org/band-x-media/SASS-Material-Design-for-Bootstrap.svg?branch=master)](https://travis-ci.org/band-x-media/SASS-Material-Design-for-Bootstrap)

## Introduction

The purpose of this repository is to extend, within Bootstrap, the options available to the developer / designer in line with the Google Material Design concepts.

View the [preview site](http://code.band-x.media/SASS-Material-Design-for-Bootstrap/)

## Developing

Install SASS and Bower if you need them then install bower components

```
sudo gem install sass
sudo npm install -g bower
bower install
```

### Install Grunt and plugins:

```
npm install grunt --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-cssmin --save-dev
```

Update NPM

```
npm update -g
```

Run Grunt:

```
grunt
```

Grunt will then watch for changes in the SASS directories and rebuild the files and dist on changes


## Documentation

Documentation is generated using [Jekyll](http://jekyllrb.com) and resides in the `_docs` directory.

To build and serve the docs, install Jekyll, change to the `_docs` directory and then launch the server:

```
gem install jekyll
cd _docs
jekyll serve
```

You will then get the Server Address, something similar to [http://127.0.0.1:4000/SASS-Material-Design-for-Bootstrap/](http://127.0.0.1:4000/SASS-Material-Design-for-Bootstrap/).

You can then view the docs at that address.

## Links

[Bootstrap](http://getbootstrap.com), [Google Material Design](http://www.google.com/design/spec/material-design)
