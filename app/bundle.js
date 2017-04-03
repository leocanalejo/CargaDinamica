(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){


var initRequire = require("./uff/initRequire.js");

var downloads = require('./mod/downloads.js');

downloads.run("0");

},{"./mod/downloads.js":2,"./uff/initRequire.js":3}],2:[function(require,module,exports){
/**
 * Created by Hernan on 21/02/2017.
 */

module.exports.run = function(name) {
    printArrayAsJSON();
    console.log("printArrayAsJSON run");
    writeFile();
    console.log("funcion run");
}

function writeFile(name,days) {
    console.log("writeFile");
}

function printArrayAsJSON(){
    //var f = $.ajax({ type: "GET", url: "uff/printArrayAsJSON.js", async: false }).responseText;
    //f();
}

},{}],3:[function(require,module,exports){
/**
 * Created by Hernan on 06/03/2017.
 */
module.exports = function(){
    requirejs.config({
        //By default load any module IDs from js/lib
        baseUrl: 'uff',
        //except, if the module ID starts with "app",
        //load it from the js/app directory. paths
        //config is relative to the baseUrl, and
        //never includes a ".js" extension since
        //the paths config could be for a directory.
        paths: {
            app: '../uff'
        }
    });
}
},{}]},{},[1]);
