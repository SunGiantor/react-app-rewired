/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  console.log('config', config);
  if(!config.externals){
    config.externals = {};
  }
  config.externals['agora-electron-sdk'] = 'commonjs2 agora-electron-sdk';
  config.externals['agora-rdc-core'] = 'commonjs2 agora-rdc-core';
  return config;
};
