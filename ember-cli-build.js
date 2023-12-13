'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    },
    babel: {
      plugins: [
        require.resolve('ember-launch-darkly/babel-plugin')
      ]
    }
  });

  return app.toTree();
};
