/* 
 * Copyright 2014 Fulup Ar Foll
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path= require("path");
var argv= require("minimist")(process.argv.slice(2));

// try to get DOCS_dir from cli arguments or from environment variables
var DOCS_DIR=argv.site;
if (!DOCS_DIR) DOCS_DIR= process.env.SITE_PATH;
if (!DOCS_DIR || (typeof DOCS_DIR !== "string")) {
    console.log ("HOOPS: SITE_PATH env var not defined please use --site=xxxx");
    process.exit(1);
}

var LANG_DEFAULT= process.env.LANG_DEFAULT || 'en';

// Default config will be superseaded by ProjectRoot/.config-jkl.js $HOME/.config-l4a.js /etc/default/config-jkl.js
config = {
    
    DST_PROD   : "build-prod",
    DST_DEVL   : "build-dev",
    
    DOCS_DIR   : DOCS_DIR,
    DATA_DIR   : path.join (DOCS_DIR, "_data"),
    TOCS_DIR   : path.join (DOCS_DIR, "_tocs"),
    
    VER_CURRENT   : "xx.x",
    VERSION_TAGDEV    : 'dev',
    VERSION_LASTEST   : 'latest.yml', 
    VERSION_RELEASE   : '_release.yml', 
    VERSION_FILE      : '_versions.yml', 
    DEFAULTS_FILE     : '_defaults.yml',

    CONFIG_DIR        : "conf",
    CONFIG_FILE       : "_config.yml",
    CONFIG_VERSION    : "_version.yml",
    CONFIG_PROD       : "_prod.yml",
    CONFIG_DEV        : "_dev.yml",
    CONFIG_NODOCS     : "_nodocs.yml",
    
    LANGUAGES         : [LANG_DEFAULT],
    LANG_DEFAULT      : LANG_DEFAULT,
    
    JEKYLL_DEV_FLAGS  : ["--trace"],
    JEKYLL_PROD_FLAGS : [],
    
    SCSS_DIR          : path.join (DOCS_DIR, "site/static/scss"),
    JS_DIR            : path.join (DOCS_DIR, "static/js"),
    BIN_DIR           : "tools/bin",
    
    LATEST_ALIAS_URI  : "/latest/",
    ALL_PAGES_FILE    : path.join (DOCS_DIR, "_data/all-pages.yml"),
    REDIRECTS_FILE    : path.join (DOCS_DIR, "_data/redirects.yml"),
    
    DEFAULT_GIT_DOC : "README.md",
        
    GEN_TOCS    : "tools/bin/gen_tocs",
    GEN_VERS    : "tools/bin/gen_versions",
    GEN_DEFS    : "tools/bin/gen_defaults",
    GEN_HTML    : "tools/bin/gen_html",
    GEN_DICT    : "tools/bin/gen_dict",
    FETCH_DOCS  : "tools/bin/fetch_docs",
    CLEAN_ALL   : "tools/bin/clean_all",
    PUSH_SITE   : "tools/bin/push_site",
    
    RSYNC_CMD   : ["rsync", "-az",'.'], // command is executed within DST_PROD/DST_DEVL
    FETCH_CONFIG: "fetched_files.yml",
    FETCH_DIR   : "reference",
    
    GERRIT_FETCH: "https://gerrit.automotivelinux.org/gerrit/gitweb?p=%repo%;a=blob_plain;f=%source%;hb=%commit%",
    GITHUB_FETCH: "https://raw.githubusercontent.com/%repo%/%commit%/%source%",
    GITHUB_EDIT : "https://github.com/%repo%/blob/%commit%/%source%",
       
    CMD_JEKYLL  : "jekyll",
    
    ENDTAG : ""
};

module.exports = config;

