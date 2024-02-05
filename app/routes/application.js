import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel(){
    let user = {
      key: 'user-key-123abc',
      anonymous: true
    };
    return this.launchDarkly.initialize(user);
  }
});