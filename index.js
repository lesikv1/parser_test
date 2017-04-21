const request = require('request');

request('https://www.ucoz.ua/robots.txt', function (error, response, body) {
  let arr = [];
  arr.push({body})
  console.log(arr)
});