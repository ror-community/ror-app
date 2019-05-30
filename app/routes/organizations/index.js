import Route from '@ember/routing/route';
import { assign } from '@ember/polyfills';

export default Route.extend({
  model(params) {
    return this.store.query('organization', params);
  },

  queryParams: {
    query: {
      refreshModel: true
    },
    page: {
      refreshModel: true
    }
  }
});
