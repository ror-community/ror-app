import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('organizations', function() {
    this.route('show', { path: '/:organization_id' });
  });
});

export default Router;
