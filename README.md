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

### Install Grunt, required plugins and update NPM:

```
npm install grunt --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-jekyll --save-dev
npm install grunt-contrib-concurrent --save-dev
npm update -g
```

Run Grunt:

```
grunt
```

Grunt will then watch concurrently for changes to docs, js and scss files and build each as required.

### Documentation

The documentation is generated using [Jekyll](http://jekyllrb.com) and resides in the `docs` directory. When you run `grunt` we automatically set up a Jekyll server [locally](http://127.0.0.1:4000/SASS-Material-Design-for-Bootstrap/) with the docs running.

Any changes to the source files we be built and the local docs will be updated.

## Links

[Bootstrap](http://getbootstrap.com), [Google Material Design](http://www.google.com/design/spec/material-design)
