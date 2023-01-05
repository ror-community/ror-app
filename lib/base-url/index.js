'use strict';

module.exports = {
  name: require('./package').name,

  isDevelopingAddon() {
    return true;
  },
  contentFor: function(type, config){
    if (type === 'baseURL'){
      return `${config.BASE_URL}`
      ;
    }
  }
};
