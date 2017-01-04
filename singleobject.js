/**
 * Created by Sam on 16/5/12.
 */

//singleobject.js
function Hello() {
    var name;
    this.setName = function (thyName) {
        name = thyName;
    };

    this.sayHello = function () {
        console.log('Hello ' + name);
    };
};

exports.Hello = Hello;