const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

// https://rent.591.com.tw/index.php?module=search&action=rslist&is_new_list=1&
// type=1&searchtype=1&region=1&orderType=desc&listview=img
const termMap = {
  tapei: {
    591: {
      region: 1
    }
  },
  xinyi: {
    591: {
      section: 7
    }
  }
};
const rentQueryDefault = { region: 1, section: '7' };

module.exports = Object.assign({
  baseUrl: 'http://roommatee.azurewebsites.net',
  rentBaseUrl: 'https://rent.591.com.tw/index.php',
  rentQuery: '?module=search&action=rslist&is_new_list=1&' +
    'type=1&searchtype=1&orderType=desc&listview=img',
  rentQueryDefault,
  termMap,
  app: {
    title: 'telemachus',
    description: '',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'telemachus',
        'og:locale': 'zh-TW',
        'og:title': 'telemachus'
      }
    }
  }
}, environment);
