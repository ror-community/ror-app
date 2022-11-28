import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  intl: service(),

  beforeModel() {
    return this.intl.setLocale(['en-us']);
  },
  model() {
    let user = {
      key: 'aa0ceb',
      anonymous: true
    };

    return this.launchDarkly.initialize(user);
  }
});