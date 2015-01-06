#!/usr/bin/env ruby
bower = `bower install`
result = `sass assets/material.scss:_docs/assets/css/material-bootstrap.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('_docs/assets/css/material-bootstrap.css')
puts "Regular compile worked successfully"