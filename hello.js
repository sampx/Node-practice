/**
 * Created by Sam on 16/5/14.
 */

//hello.js
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName; 4
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};

module.exports = Hello;