Introduction
============

This repository contains IOT.BZH documentation tools to automatically generate a technical website from Markdown files.
See sample of rendering at http://docs.iot.bzh

iotbzh/webdoc-tools relies on https://jekyllrb.com and proposed scripts are largely inspired from https://github.com/apache/cordova-docs

Installing
==========

## dependencies on Jekyll
- NodeJs+npm
- Ruby
- RubyGems
- Python
- Jekyll

Follow Jekyll instalation at https://jekyllrb.com/docs/installation/
Add Gem SCSS with "sudo gem install sass"

On OpenSuse on any other Linux plateform installation should be as simple as
```
 sudo zypper install ruby2.1-devel
 sudo zypper install '*rubygem-ffi' 
 sudo gem install jekyll
 sudo gem install redcarpet
```
IMPORTANT: check that "jekyll" command exist. If your installation uses a different
name "ie: jekyll-version" reflect the actual name within conf/AppDefault.js

WARNING: 
+ would you choose to install everything through GEM bypassing your
standard distribution package management, this may impose you to compile 
a couple of Ruby native extentions. If "gem install" fails you probably
miss some required tools like: gcc, libffi-devel-gcc5, ...
+ command "gem search --local" should display  jekyll+redcarpet+rouge+sass

## install webdoc-tools + webdoc-sample

```
 mkdir WebDocs; cd WebDocs;
 git clone http://github.com/iotbzh/webdocs-tools
 git clone http://github.com/iotbzh/webdocs-sample
 cd ./webdocs-tools;
 npm install
```

## configure webdoc-sample

- Edit webdoc-sample/conf/AppDefault and change GEM_FILE + Doc_TOOLS to point on the right path.
- Default configuration concider that webdoc-tools + webdoc-sample site within the same parent directory and then GEM_FILE is located into webdoc-tools.

## generate a 1st site from your template

```
 cd ./webdocs-sample
 ./build --verbose --clean --force --fetch
 ./build --verbose --build --serve --watch
  point a browser on http://localhost:4000
```

## bugs

``
--watch to automatically regenerate pages on markdown file, you should force "./build --configs" when changing TOC or versions.
``

## references

+ Search Engine https://community.algolia.com/docsearch/
+ Markdown to HTML generation https://jekyllrb.com
+ Scripts from Cordova http://cordova.apache.org/docs