/**
 * Created by Sam on 16/5/12.
 */


//module.js
var name;

exports.setName = function(theName) {
    name = theName;
};

exports.sayHello = function() {
    console.log('Hello ' + name);
};