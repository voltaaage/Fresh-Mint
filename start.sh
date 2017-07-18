#!/bin/bash

bundle install
rm -f tmp/pids/server.pid
rails tmp:cache:clear
npm run webpack -- --watch --devtool source-map & npm start -- -p 3000 -b '0.0.0.0'
