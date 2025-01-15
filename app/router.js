import EmberRouter from '@ember/routing/router';
import config from './config/environment';

class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('organizations', { path: '/' }, function() {
    this.route('index', { path: '/search' });
    this.route('show', { path: '/:organization_id' });
    this.route('about', { path: '/' });
  });
});

export default Router;
