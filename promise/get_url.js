'use strict'

var Promise = require('bluebird');
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function getURL(URL) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open('GET', URL, true);
    req.onload = function () {
      if (req.status === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(new Error(req.statusText));
    };
    req.send();
  });
}

//
var request = {
  nodejs: function () {
    console.log("getting nodejs api...");
    return getURL('https://nodejs.org/api/index.json').then(JSON.parse);
  },
  github: function () {
    console.log("getting github api...");
    return getURL('https://api.github.com').then(JSON.parse);
  }
};

//保存结果
function pushResults(results, value) {
  console.log("results getted:" + JSON.stringify(arguments));
  // return {};
  // throw new Error('save result failed.');
  results.push(value);
  return results;
}
// [] 用来保结果的数组
var saveResult = pushResults.bind(null, []);

var printResult = function (results) {
  console.log('Print :' + JSON.stringify(results));
}

function handleErr(err) {
  console.log("something err...");
  console.log(err);
}

//请求数据
request.nodejs()
  .then(saveResult)
  .then(request.github)
  .then(saveResult)
  .then(printResult)
  .catch(handleErr);
