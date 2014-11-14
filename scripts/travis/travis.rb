#!/usr/bin/env ruby
bower = `bower install`
result = `sass assets/material.scss:build/material-bootstrap.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('build/material-bootstrap.css')
page = `./scripts/travis-gh-pages.sh`
puts "Regular compile worked successfully"