import Route from '@ember/routing/route';

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
