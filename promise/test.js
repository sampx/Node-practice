'use strict';

var Promise = require('bluebird');

var p = Promise.resolve('Hello');

p.then(function (s){
  console.log(s);   //Hello
});
