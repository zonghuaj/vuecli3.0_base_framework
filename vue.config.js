// vue.config.js
module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://marriott-sso-uat.accenture.com', //对应自己的接口
        }
      }
    }
  }