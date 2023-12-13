import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    let user = {
      key: 'aa0ceb',
      anonymous: true
    };

    return this.launchDarkly.initialize(user);
  }
});