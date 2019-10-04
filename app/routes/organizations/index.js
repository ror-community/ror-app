import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return this.store.query('organization', params).then(function(model) {
      return model;
    }).catch(function (reason) {
      console.log(reason);
      return [];
    });
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
