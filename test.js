/**
 * Created by Sam on 15/7/31.
 */
var v='Hello World';
console.log('0:'+v);
(function(){
    console.log('1:'+v);
    var v='I love you';
    console.log('2:'+v);
})()
console.log('3:'+v);
