const superagent = require('superagent');
const Xray = require('x-ray');
const config = require('../config');

function getRentListInfo() {
  var url = config.rentBaseUrl;
  url = Object.keys(config.rentQueryDefault).reduce((accu, key, idx) => {
    const param = key.concat('=').concat(config.rentQueryDefault[key]);
    return idx === 0 ?
      accu.concat(config.rentQuery).concat('&').concat(param) :
      accu.concat('&').concat(param);
  }, url);
  console.log(url);
  const request = superagent.get(url);
  request.end((err, body) => {
    const html = JSON.parse(body.text).main;
    const xray = new Xray();
    xray(html, '.shList',
      [{
        area: '.rentByArea',
        title: '.title',
        img: 'img@src',
        price: '.price>strong',
      }]
    )((e, results) => {
      console.log('results', results);
    });
  });
}

getRentListInfo();
