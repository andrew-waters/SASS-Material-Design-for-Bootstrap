#!/usr/bin/env ruby
bower = `bower install`
result = `sass src/material.scss:docs/assets/css/material-bootstrap.css`
raise result unless $?.to_i == 0
raise "When compiled the module should output some CSS" unless File.exists?('docs/assets/css/material-bootstrap.css')
puts "Regular compile worked successfully"