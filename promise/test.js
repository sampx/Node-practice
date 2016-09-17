'use strict';

var Promise = require('bluebird');

var p = Promise.resolve('I\'m done');

p.then(function (s) {
  console.log(s); //Hello
}).catch(function (err) {
  console.error("fialed:" + err);
});

var p1 = Promise.reject('do something');

p1.then(function (s) {
  console.log(s); //Hello
}).catch(function (err) {
  console.error("fialed:" + err);
});

function list() {
  console.log('arguments:' + JSON.stringify(arguments));
  return Array.prototype.slice.call(arguments);
}

console.log(list(1, 2, 3));
