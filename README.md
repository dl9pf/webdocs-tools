Introduction
============

This repository contains IOT.BZH documentation tools to automatically generate a technical website from Markdown files.
See sample of rendering at http://docs.iot.bzh

iotbzh/webdoc-tools relies on https://jekyllrb.com and proposed scripts are largely inspired from https://github.com/apache/cordova-docs

Installing
==========

*** dependencies on Jekyll
* Ruby
* RubyGems
* NodeJs+npm
* Python
* Jekyll
* sass

Follow Jekyll instalation at https://jekyllrb.com/docs/installation/
Add Gem SCSS with "sudo gem install sass"

*** install webdoc-tools + webdoc-sample

* git clone http://github.com/iotbzh/webdoc-tools
* git clone http://github.com/iotbzh/webdoc-sample

cd xxx/webdoc-tools;  npm install
cd xxx/webdoc-sample; npm install

*** configure webdoc-sample

Edit webdoc-sample/conf/AppDefault and change GEM_FILE + Doc_TOOLS to point on the right path.
Default configuration concider that webdoc-tools + webdoc-sample site within the same parent directory and then GEM_FILE is located into webdoc-tools.

*** generate a 1st site from your template

* ./build.js --clean
* ./build.js --fetch
* ./build.js --config
* ./build.js --html --serve --watch
* point a browser on http://localhost:4000

*** bugs

* --fetch is asynchronous combining --fetch with options will fail
* --watch to automatically regenerate pages on markdown file, you should force "./build --configs" when changing TOC or versions.